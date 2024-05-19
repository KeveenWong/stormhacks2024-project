import Image from 'next/image';
import Button from '../components/Button'; // Adjust the import path as needed
import Link from 'next/link'

const Page = () => {
  return (
    <div className="relative w-full h-screen">
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
          width={200}  // adjusted width
          height={200} // adjusted height
        />
      </div>
      {/* Speech Box */}
      <div className="absolute top-[40%] left-8 transform -translate-y-[40%] w-[900px] h-[500px] p-4">
        <div className="relative w-full h-full">
          <Image
            src="/assets/images/speechbox.svg"
            alt="Speech Box"
            layout="fill"
            objectFit="contain"
          />
          <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center p-8">
            <p className="text-4xl font-bold text-gray-800 mb-10 text-center">
              Welcome to your AI Yoga Companion!
            </p>
            <p className="text-4xl font-bold text-gray-800 mb-10 text-center">
              I'm here to guide you to your journey of self improvement.
            </p>
            <p className="text-4xl font-bold text-gray-800 text-center">
              Are you ready to begin?
            </p>
          </div>
        </div>
      </div>
      {/* Main Page Cat */}
      <div className="absolute bottom-0 right-0 mb-8 mr-8">
        <Image
          src="/assets/images/MainPageCat.png"
          alt="Main Page Cat"
          width={400}  // adjust width as needed
          height={400} // adjust height as needed
        />
      </div>
      {/* Button */}
      <div className="absolute bottom-[8vh] left-[26vw]">
        <Button href="/page2" className="px-12 py-6 bg-pink-100 text-gray-800 text-3xl font-bold rounded-xl shadow-md focus:outline-none focus:ring-2 focus:ring-pink-300 focus:ring-opacity-50 transform transition-transform duration-200 hover:scale-105 active:scale-95">
          I'm Ready!
        </Button>
      </div>
    </div>
  );
};

export default Page;
