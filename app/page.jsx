import Head from 'next/head';
import Image from 'next/image';
import MainPageCat from '@public/assets/images/MainPageCat.png';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Yoga Companion</title>
      </Head>
      <main>
        <div className="flex items-center">
          <h1 className="mr-4">Welcome to your yoga companion!</h1>
          <Image
            src={MainPageCat}
            alt="Main Page Cat"
            width={500}
            height={500}
          />
        </div>
      </main>
    </div>
  );
}
