'use client';
// components/WorkoutManager.js
import { useState } from 'react';
import Page1 from '../app/page1/page';
import Page2 from '../app/page2/page';
import Page3 from '../app/page3/page';
import Page4 from '../app/page4/page';
import Page5 from '../app/page5/page';
import Page6 from '../app/page6/page';
import { generateYogaWorkout } from '@utils/yoga-app';

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

  const handleNextStep = () => setStep((prevStep) => prevStep + 1);
  const handlePrevStep = () => setStep((prevStep) => prevStep - 1);

  const handleFormSubmit = async (formData) => {
    const text = await generateYogaWorkout(formData);
    console.log('text:', text);
    setGeneratedText(JSON.parse(text));
    console.log('generatedText:', generatedText);
    handleNextStep();
  };

  return (
    <>
      {step === 1 && <Page1 onNext={handleNextStep} />}
      {step === 2 && <Page2 formData={formData} setFormData={setFormData} onSubmit={handleFormSubmit} />}
      {step === 3 && <Page3 generatedText={generatedText} onNext={handleNextStep} />}
      {step === 4 && <Page4 onNext={handleNextStep} />}
      {step === 5 && <Page5 onNext={handleNextStep} />}
      {step === 6 && <Page6 />}
    </>
  );
};

export default WorkoutManager;
