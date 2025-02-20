import Image from 'next/image';
import { SignUpStep } from './sign-up/components/sign-up-form';
import { SignInForm } from './components/sign-in-form';

const Page = () => {
  return (
    <div className="w-full min-h-screen grid grid-cols-2">
      <div className="relative max-lg:hidden h-screen">
        <div className="absolute justify-end items-center pb-20 top-0 bottom-0 right-0 left-0  flex flex-col">
          <h1 className="text-4xl text-white">Join LaLa for free!</h1>
          <p className="text-lg text-white max-w-md text-center mt-3">
            Let&apos;s make scheduling a breeze and never miss a beat. Join us
            for some serious fun!
          </p>
        </div>
        <Image
          height={500}
          width={1000}
          alt="banner"
          src={'/images/house.jpg'}
          className="bg-no-repeat object-cover absolute h-full w-full"
        />
      </div>
      <div className="max-w-xl lg:py-50 w-full mx-auto h-screen lg:place-content-center lg:flex lg:flex-col pb-24 pt-16 px-5">
        <SignInForm />
      </div>
    </div>
  );
};

export default Page;
