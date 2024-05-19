'use client';
import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import SpeechCard from '../components/SpeechCard';
import { generateYogaWorkout } from '@utils/yoga-app';
import { processExerciseSpeech } from '@utils/elevenlabs';
import axios from 'axios';

export default function Home() {
  const timer_value = 10;
  const [generatedText, setGeneratedText] = useState(); // State to store generated text
  const [currentExercise, setCurrentExercise] = useState(0); // State to keep track of the current exercise
  const [sessionStarted, setSessionStarted] = useState(false); // State to keep track of whether the session has started
  const [timer, setTimer] = useState(timer_value); // State to keep track of the timer (in seconds)
  const [isTimerRunning, setIsTimerRunning] = useState(false); // State to control timer running status

  // Example usage:
  const params = {
    numberOfExercises: 8,
    numberOfSetsPerExercise: 3,
    mood: "Chill",
    intensity: "Difficult",
    timeOfDay: "Morning",
    preferredYogaStyle: "Hatha",
    healthConditionsOrInjuries: "Hamstring injury",
    goals: "Stress-relief",
    otherKeywords: "None"
  };

  const handleStartSession = async () => {
    // Call generateYogaWorkout and set the generated text in state
    const text = await generateYogaWorkout(params);
    const parsedText = JSON.parse(text); // Parse the JSON string if necessary
    setGeneratedText(parsedText);   
    
    // // Iterate through each exercise and call the function
    // for (const exercise of parsedText.exercises) {
    //   const exerciseName = exercise.exercise;
    //   const exerciseIntro = exercise.intro;
    //   const exerciseInstructions = exercise.instructions;
    //   await axios.post('/api/generate-audio', {
    //     exerciseName,
    //     exerciseIntro,
    //     exerciseInstructions
    //   });
    // }

    // First exercise audio only
    const exerciseName = parsedText.exercises[0].exercise;
    const exerciseIntro = parsedText.exercises[0].intro;
    const exerciseInstructions = parsedText.exercises[0].instructions;
    await axios.post('/api/generate-audio', {
      exerciseName,
      exerciseIntro,
      exerciseInstructions
    });
  
    setSessionStarted(true);
    setIsTimerRunning(false); // Don't start the timer immediately after session starts
  };

  useEffect(() => {
    setTimer(timer_value); // Reset the timer
  }, [generatedText]);

  // print the generated text
  useEffect(() => {
    console.log('generatedTextEffect:', generatedText);
  }, [generatedText]);

  useEffect(() => {
    // Start the timer when the session starts and isTimerRunning is true
    if (sessionStarted && isTimerRunning && timer > 0) {
      const interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000); // Update the timer every second
      return () => clearInterval(interval); // Clean up the interval
    } else if (timer === 0 && currentExercise < params.numberOfExercises - 1) {
      setCurrentExercise((prevExercise) => prevExercise + 1); // Move to the next exercise
      setTimer(timer_value); // Reset the timer for the next exercise
      setIsTimerRunning(false); // Stop the timer and wait for user to start it again
    }
  }, [sessionStarted, isTimerRunning, timer, currentExercise, params.numberOfExercises]);

  const handleStartNextExercise = () => {
    setIsTimerRunning(true); // Start the timer for the next exercise
  };

  return (
    <div>
      <Head>
        <title>Yoga Session</title>
      </Head>
      <main>
        <h1>Yoga Session</h1>
        <button onClick={handleStartSession}>Start Yoga Session</button>
        {((generatedText != undefined) && sessionStarted) ? 
          <div>
            <h2>Exercise {currentExercise + 1}: {generatedText.exercises[currentExercise].exercise}</h2>
            <SpeechCard text={generatedText.exercises[currentExercise].instructions} />
            <p>Time Remaining: {timer} seconds</p>
            {currentExercise < params.numberOfExercises - 1 && !isTimerRunning && (
              <button onClick={handleStartNextExercise}>Start Next Exercise</button>
            )}
          </div> : <h1>Loading...</h1>
        }
        {timer === 0 && currentExercise === params.numberOfExercises - 1 && (
          <div>
            <h2>Congratulations!</h2>
            <p>You have completed the yoga session.</p>
          </div>
        )}
      </main>
    </div>
  );
}
