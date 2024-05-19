'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Input } from '@nextui-org/react';
import Button from '@components/Button'; // Adjust the import path as needed

const Page2 = () => {
  const [formData, setFormData] = useState({
    length: '',
    intensity: '',
    timeOfDay: '',
    yogaStyle: '',
    injuries: '',
    goals: '',
    keywords: '',
    numberOfExercises: '1' // Initialize with a default value of 1
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // If the input is for numberOfExercises, validate to keep the value between 1 and 10
    if (name === 'numberOfExercises') {
      const numValue = Math.max(1, Math.min(10, Number(value)));
      setFormData({
        ...formData,
        [name]: numValue.toString()
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };

  const handleSubmit = () => {
    // Save form data to localStorage
    localStorage.setItem('formData', JSON.stringify(formData));
    console.log('Form Data saved to localStorage:', formData);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Image */}
      <Image
        src="/assets/images/Background.svg"
        alt="Background"
        layout="fill"
        objectFit="cover"
        quality={100}
      />
      {/* Logo */}
      <div className="absolute top-0 left-0 m-4">
        <Image
          src="/assets/images/Logo.svg"
          alt="Logo"
          width={200}
          height={200}
        />
      </div>
      {/* Speech Box */}
      <div className="absolute top-[30%] left-8 transform -translate-y-[30%] w-[900px] h-[600px] p-4 overflow-hidden">
        <div className="relative w-full h-full">
          <Image
            src="/assets/images/speechbox.svg"
            alt="Speech Box"
            layout="fill"
            objectFit="contain"
          />
          <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-start items-center p-8 overflow-hidden">
            <div className="relative text-5xl font-bold text-gray-800 text-center mt-7 mb-8">
              Let's Personalize Your Workout!
              <div className="absolute bottom-[-6px] left-1/2 transform -translate-x-1/2 w-[110%] h-1 bg-pink-300"></div>
            </div>
            <div className="w-full h-[70%] overflow-auto p-4">
              <form className="space-y-6 text-lg text-gray-800">
                <div>
                  <label className="font-bold block mb-2">Length of session</label>
                  <Input
                    clearable
                    fullWidth
                    placeholder="Enter length"
                    name="length"
                    value={formData.length}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <label className="font-bold block mb-2">Number of Exercises</label>
                  <Input
                    clearable
                    fullWidth
                    type="number"
                    placeholder="Enter Number"
                    name="numberOfExercises"
                    value={formData.numberOfExercises}
                    onChange={handleInputChange}
                    min={1}
                    max={10}
                  />
                </div>
                <div>
                  <label className="font-bold block mb-2">Intensity</label>
                  <Input
                    clearable
                    fullWidth
                    placeholder="Enter intensity"
                    name="intensity"
                    value={formData.intensity}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <label className="font-bold block mb-2">At what time of the day are you exercising</label>
                  <Input
                    clearable
                    fullWidth
                    placeholder="Enter time of day"
                    name="timeOfDay"
                    value={formData.timeOfDay}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <label className="font-bold block mb-2">Preferred Yoga style (Vinyasa, Iyengar, Hatha, Kundalini, ..)</label>
                  <Input
                    clearable
                    fullWidth
                    placeholder="Enter yoga style"
                    name="yogaStyle"
                    value={formData.yogaStyle}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <label className="font-bold block mb-2">Injuries</label>
                  <Input
                    clearable
                    fullWidth
                    placeholder="Enter injuries"
                    name="injuries"
                    value={formData.injuries}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <label className="font-bold block mb-2">Goals? (example: Flexibility, Strength, Relaxation, Weightloss)</label>
                  <Input
                    clearable
                    fullWidth
                    placeholder="Enter goals"
                    name="goals"
                    value={formData.goals}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <label className="font-bold block mb-2">Keywords: </label>
                  <Input
                    clearable
                    fullWidth
                    placeholder="Enter anything you want here"
                    name="keywords"
                    value={formData.keywords}
                    onChange={handleInputChange}
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* Main Page Cat */}
      <div className="absolute bottom-0 right-0 mb-8 mr-8">
        <Image
          src="/assets/images/Page2Cat.png"
          alt="Page2Cat"
          width={400}
          height={400}
        />
      </div>
      {/* Button */}
      <div className="absolute bottom-[8vh] left-[20vw]">
        <Button href="/page3" onClick={handleSubmit}>
          Generate My Workout
        </Button>
      </div>
    </div>
  );
};

export default Page2;
