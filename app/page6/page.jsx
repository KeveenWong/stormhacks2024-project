import Image from 'next/image';
import Button from '../../components/Button';
import Link from 'next/link'

const Page = ({ onReset, onBye }) => {
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
          <div className="absolute top-0 left-0 w-full h-full p-20">
            <p className="text-4xl pt-10 pb-10 font-bold">Thanks for spending time with me!</p>
            <p className="text-4xl pb-10 font-bold">I'm gonna miss you!</p>
            <p className="text-4xl pb-10 font-bold">Come back for some more, okay?</p>
          </div>
        </div>
      </div>
      {/* Page 6 Cat */}
      <div className="absolute bottom-0 right-0 mr-8">
        <Image
          src="/assets/images/Page6Cat.png"
          alt="Page 6 Cat"
          width={700}
          height={700}
        />
      </div>
      {/* Button */}
      <div className="absolute bottom-[8vh] left-[5vw]">
        <Button onClick={onReset} className="px-12 py-6 bg-pink-100 text-gray-800 text-3xl font-bold rounded-xl shadow-md focus:outline-none focus:ring-2 focus:ring-pink-300 focus:ring-opacity-50 transform transition-transform duration-200 hover:scale-105 active:scale-95">
          Let's Go Again!
        </Button>
        <Button onClick={onBye} href="/page1" className="px- py-6 bg-pink-100 ml-12 text-gray-800 text-3xl font-bold rounded-xl shadow-md focus:outline-none focus:ring-2 focus:ring-pink-300 focus:ring-opacity-50 transform transition-transform duration-200 hover:scale-105 active:scale-95">
          Bye!
        </Button>
      </div>
    </div>
  );
};

export default Page;
