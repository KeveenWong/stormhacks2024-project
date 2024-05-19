'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Input } from '@nextui-org/react';
import Button from '@components/Button';
import imgageone from "../../public/assets/images/bird_of_paradise.png"
import imagetwo from "../../public/assets/images/front_splits.png"
import imagethree from '../../public/assets/images/peacock.png'

const Page3 = () => {
  const photos = [
    { id: 1, url: imgageone, caption: 'Bird of Paradise' },
    { id: 2, url: imagetwo, caption: 'Front Splits' },
    { id: 3, url: imagethree, caption: 'Peacock' },
    { id: 4, url: imgageone, caption: 'Bird of Paradise' },
    { id: 5, url: imagetwo, caption: 'Front Splits' },
    { id: 6, url: imagethree, caption: 'Peacock' },
    { id: 7, url: imgageone, caption: 'Bird of Paradise' },
    { id: 8, url: imagetwo, caption: 'Front Splits' },
    { id: 9, url: imagethree, caption: 'Peacock' }
    

  ];

  const positions = [
    { name: 'Bird of Paradise', duration: 5 },
    { name: 'Front Splits', duration: 10 },
    { name: 'Peacock', duration: 7 },
    { name: 'Bird of Paradise', duration: 5 },
    { name: 'Front Splits', duration: 10 },
    { name: 'Peacock', duration: 7 },
    { name: 'Bird of Paradise', duration: 5 },
    { name: 'Front Splits', duration: 10 },
    { name: 'Peacock', duration: 7 }
  ];

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
            <div className="relative text-5xl font-bold text-gray-800 text-center mt-7 mb-16">
              Take a Look at your Session!
              <div className="absolute bottom-[-20px] left-1/2 transform -translate-x-1/2 w-[120%] h-1 bg-pink-300"></div>
            </div>
            
            <div className="w-full h-[70%] overflow-auto p-4">
              <div className="grid grid-cols-3 gap-4">
              {photos.map(photo => (
                <div key={photo.id} className="photo">
                <Image src={photo.url} height={300} width={300}/>
                
                <p>{photo.caption}{photo.duration} minutes</p>
                </div>
              ))}

              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Main Page Cat */}
      <div className="absolute bottom-0 right-0 mb-8 mr-8">
        <Image
          src="/assets/images/Page3Cat.png"
          alt="Page2Cat"
          width={500}
          height={500}
        />
      </div>
      {/* Button */}
      <div className="absolute bottom-[8vh] left-[8vw]">
        <Button href="/page4" className="px-12 py-6 bg-pink-100 text-gray-800 text-3xl font-bold rounded-xl shadow-xl focus:outline-none focus:ring-2 focus:ring-pink-300 focus:ring-opacity-50 transform transition-transform duration-200 hover:scale-105 active:scale-95 hover:bg-pink-300">
          Let's Start!
        </Button>
        <Button href="/page2" className="px-16 py-6 bg-pink-100 ml-12 text-gray-800 text-3xl font-bold rounded-xl shadow-xl focus:outline-none focus:ring-2 focus:ring-pink-300 focus:ring-opacity-50 transform transition-transform duration-200 hover:scale-105 active:scale-95 hover:bg-pink-300">
          Go Back
        </Button>
      </div>
    </div>
  );
};

export default Page3;
