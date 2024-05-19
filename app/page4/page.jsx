import Image from 'next/image';
import Button from '../../components/Button';
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
          <div className="absolute top-0 left-0 w-full h-full flex p-20">
            <div className="flex flex-col items-start justify-center w-1/2">
                
              <Image 
                style={{border: "2px solid #c0c0c0", borderRadius: "10%"}}
                src="/assets/images/bird_of_paradise.png"
                alt="Yoga Photo"
                width={400}
                height={400}
              />
              <p className="text-center text-3xl font-bold pt-5">Bird of Paradise 15 mins</p>
            </div>
            <div className="flex flex-col justify-center w-1/2 pl-10">
              <p className="text-left text-3xl">Stand tall with feet together. Put up one leg and keep your balance. Take in deep breaths and relax!</p>
            </div>
          </div>
        </div>
      </div>
      {/* Main Page Cat */}
      <div className="absolute bottom-0 right-0 mb-8 mr-8">
        <Image
          src="/assets/images/Page4Cat.png"
          alt="Page4 Cat"
          width={400}
          height={400}
        />
      </div>
      {/* Button */}
      <div className="absolute bottom-[8vh] left-[26vw]">
        <Button href="/page5" className="px-12 py-6 bg-pink-100 text-gray-800 text-3xl font-bold rounded-xl shadow-md focus:outline-none focus:ring-2 focus:ring-pink-300 focus:ring-opacity-50 transform transition-transform duration-200 hover:scale-105 active:scale-95">
          Let's Do This!
        </Button>
      </div>
    </div>
  );
};

export default Page;
