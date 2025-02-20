'use client';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useMutation } from '@tanstack/react-query';
import { useGoogleLogin } from '@react-oauth/google';

import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import { Spinner } from '@/components/spinner';
import { Button } from '@/components/button';
import { useLoginViaGoogle } from '@/features/auth';

export function SignUpStep() {
  const [role, setRole] = useState<'RENTER' | 'HOST'>('RENTER');
  const { mutate, isPending: loginViaGoogleLoading } = useLoginViaGoogle();
  const login = useGoogleLogin({
    onSuccess: (codeResponse) => {
      mutate({
        access_token: codeResponse.access_token,
        role,
      });
    },

    onError: (error) => {
      console.log(error);
    },
  });

  return (
    <div
      //   onSubmit={handleSubmit(onSubmitSignUp)}
      className="bg-gray-50 shadow-lg lg:border pt-20 pb-10 lg:px-16 rounded-xl flex flex-col items-center p-4 sm:px-10 text-gray-800"
    >
      <button
        onClick={() => {
          login();
          setRole('RENTER');
        }}
        className="bg-white justify-center w-full hover:bg-gray-100 font-semibold border border-gray-100 text-gray-800 active:scale-95 gap-2 transition-all flex items-center px-3 rounded-lg py-2"
      >
        <Image height={24} width={24} alt="icon" src={'/icons/google.svg'} />
        Sign up as a renter
      </button>

      <div className="divider my-3">or</div>
      <button
        onClick={() => {
          login();
          setRole('HOST');
        }}
        className="bg-white justify-center w-full hover:bg-gray-100 font-semibold border border-gray-100 text-gray-800 active:scale-95 gap-2 transition-all flex items-center px-3 rounded-lg py-2"
      >
        <Image height={24} width={24} alt="icon" src={'/icons/google.svg'} />
        Sign up as a host
      </button>

      <div className="font-medium mx-auto mt-4 text-center cursor-pointer">
        <Link href="/authentication">
          Already have an account? <span className="text-pink-500">Login</span>
        </Link>
      </div>
    </div>
  );
}
