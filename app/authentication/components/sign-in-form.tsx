'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useGoogleLogin } from '@react-oauth/google';
import { Spinner } from '@/components/spinner';
import { useLoginViaGoogle } from '@/features/auth';

export function SignInForm() {
  const { mutate: loginViaGoogle, isPending: loginViaGoogleLoading } =
    useLoginViaGoogle();
  const login = useGoogleLogin({
    onSuccess: (codeResponse) => {
      loginViaGoogle({
        access_token: codeResponse.access_token,
      });
    },
    onError: (error) => {
      console.log(error);
    },
  });

  return (
    <div
      //   onSubmit={handleSubmit(onSubmitSignUp)}
      className="bg-gray-50 shadow-lg lg:border pt-20 pb-10 rounded-xl flex flex-col items-center p-4 sm:px-10 lg:px-16 text-gray-800"
    >
      <button
        //@ts-ignore
        onClick={login}
        disabled={loginViaGoogleLoading}
        className="bg-white hover:bg-gray-100 w-full font-semibold border border-gray-100 text-gray-800 active:scale-95 gap-2 transition-all flex items-center justify-center px-3 rounded-lg py-2"
      >
        <Image height={24} width={24} alt="icon" src={'/icons/google.svg'} />
        {loginViaGoogleLoading ? <Spinner /> : 'Sign In with Google'}
      </button>

      <div className="font-medium mx-auto mt-4 text-center cursor-pointer">
        <Link href="/authentication/sign-up">
          Dont have an account? <span className="text-pink-500">Register</span>
        </Link>
      </div>
    </div>
  );
}
