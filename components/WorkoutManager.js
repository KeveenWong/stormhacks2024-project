"use client";
import { useState, useEffect } from 'react';
import Page1 from '../app/page1/page';
import Page2 from '../app/page2/page';
import Page3 from '../app/page3/page';
import Page4 from '../app/page4/page';
import Page5 from '../app/page5/page';
import Page6 from '../app/page6/page';
import { generateYogaWorkout } from '@utils/yoga-app';
import { playAudio } from '@utils/general';
import axios from 'axios';

const WorkoutManager = () => {
  const [step, setStep] = useState(1); // 1: Page1, 2: Page2, ..., 6: Page6
  const [formData, setFormData] = useState({
    intensity: '',
    timeOfDay: '',
    yogaStyle: '',
    injuries: '',
    goals: '',
    keywords: '',
    numberOfExercises: '1'
  });
  const [generatedText, setGeneratedText] = useState(null);
  const [showPage4, setShowPage4] = useState(true);
  const [currentExerciseIndex, setCurrentExerciseIndex] = useState(0);
  const [currentAudio, setCurrentAudio] = useState(null);
  const [userInteracted, setUserInteracted] = useState(false);

  useEffect(() => {
    if (userInteracted) {
    console.log('Attempting to play opening audio');
    const audio = new Audio('/assets/static_audio/opening_audio.mp3'); // Adjust the path to your audio file
    audio.play().catch(error => {
        console.error('Error playing initial audio:', error);
    });
    setCurrentAudio(audio);
    }
  }, [userInteracted]);

  useEffect(() => {
    // Function to stop the current audio
    const stopCurrentAudio = () => {
      if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
      }
    };

    // Stop current audio before playing new audio
    stopCurrentAudio();

    // Play audio based on the current step
    let audio;
    if (step === 1) {
      audio = new Audio('/assets/static_audio/opening_audio.mp3');
    } else if (step === 2) {
      audio = new Audio('/assets/static_audio/page2_audio.mp3');
    } else if (step === 3) {
      audio = new Audio('/assets/static_audio/page3_audio.mp3');
    } else if (step === 5) {
      audio = new Audio('/assets/static_audio/congrats_audio.mp3');
    }

    if (audio) {
      audio.play().catch(error => {
        console.error('Error playing step audio:', error);
      });
      setCurrentAudio(audio);
    }
  }, [step]);

  const handleNextStep = () => {
    const currentStep = step;
    setStep((prevStep) => prevStep + 1);

    // Check if the current step is 3 (transitioning to step 4)
    if (currentStep === 3) {
      // Check if the generatedText is available and if the currentExerciseIndex is valid
      if (generatedText && generatedText.exercises[currentExerciseIndex]) {
        // Play the audio for the current exercise index
        playAudio(`/assets/instructions_audio/${generatedText.exercises[currentExerciseIndex].exercise}`);
      }
    }
  };

  const handlePrevStep = () => setStep((prevStep) => prevStep - 1);

  const handleFormSubmit = async (formData) => {
    const text = await generateYogaWorkout(formData);
    const parsedText = JSON.parse(text);
    setGeneratedText(parsedText);
    handleNextStep();

    // Iterate through each exercise and call the function
    for (const exercise of parsedText.exercises) {
        const exerciseName = exercise.exercise;
        const exerciseIntro = exercise.intro;
        const exerciseInstructions = exercise.instructions;
        await axios.post('/api/generate-audio', {
            exerciseName,
            exerciseIntro,
            exerciseInstructions
        });
        }
    // // First exercise audio only
    // const exerciseName = parsedText.exercises[0].exercise;
    // const exerciseIntro = parsedText.exercises[0].intro;
    // const exerciseInstructions = parsedText.exercises[0].instructions;

    // await axios.post('/api/generate-audio', {
    //   exerciseName,
    //   exerciseIntro,
    //   exerciseInstructions
    // });

    // // Second exercise audio only
    // const exerciseName2 = parsedText.exercises[1].exercise;
    // const exerciseIntro2 = parsedText.exercises[1].intro;
    // const exerciseInstructions2 = parsedText.exercises[1].instructions;
    // await axios.post('/api/generate-audio', {
    //   exerciseName: exerciseName2,
    //   exerciseIntro: exerciseIntro2,
    //   exerciseInstructions: exerciseInstructions2
    // });
  };

  const handleReset = () => {
    setStep(1);
    setGeneratedText(null);
    setShowPage4(true);
    setCurrentExerciseIndex(0);
  };

  const handleBye = () => {
    window.close();
  };

  const togglePage = () => {
    setShowPage4((prevShowPage4) => !prevShowPage4);
  };

  const handleNextExercise = () => {
    if (currentExerciseIndex < generatedText.exercises.length - 1) {
      setCurrentExerciseIndex((prevIndex) => prevIndex + 1);
      // Play audio for the next exercise
      const nextExercise = generatedText.exercises[currentExerciseIndex + 1];
      if (nextExercise) {
        playAudio(`/assets/instructions_audio/${nextExercise.exercise}`);
      }
    } else {
      setStep((prevStep) => prevStep + 1); // Move to the next step if there are no more exercises
    }
    setShowPage4(true); // Show Page 4 for the next exercise
  };

  const handleUserInteraction = () => {
    if (!userInteracted) {
      setUserInteracted(true);
    }
  };

  return (
    <div onClick={handleUserInteraction}>
      {step === 1 && <Page1 onNext={handleNextStep} />}
      {step === 2 && <Page2 formData={formData} setFormData={setFormData} onSubmit={handleFormSubmit} />}
      {step === 3 && <Page3 generatedText={generatedText} onNext={handleNextStep} onPrev={handlePrevStep} />}
      {step === 4 && generatedText && (
        showPage4 ? (
          <>
            <Page4 exercise={generatedText.exercises[currentExerciseIndex]} onNext={togglePage} />
          </>
        ) : (
          <Page5 exercise={generatedText.exercises[currentExerciseIndex]} onComplete={handleNextExercise} />
        )
      )}
      {step === 5 && <Page6 onReset={handleReset} onBye={handleBye} />}
    </div>
  );
}

export default WorkoutManager;
