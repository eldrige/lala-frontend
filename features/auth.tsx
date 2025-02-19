import { axios } from '@/lib/axios';
import { useMutation } from '@tanstack/react-query';
import { setCookie } from 'cookies-next';
import { useRouter } from 'next/navigation';

const loginViaGoogle = (
  access_token: string,
  role?: 'HOST' | 'RENTER'
): Promise<any> => axios.post('/users/auth', { access_token, role });

export const useLoginViaGoogle = () => {
  const router = useRouter();
  return useMutation({
    mutationFn: loginViaGoogle,
    onSuccess(data) {
      console.log(data.token, 'From login');

      //   toast.success('Login successful!');
      if (data.token) {
        setCookie('LALA_TOKEN', data.token);
        router.push('/dashboard');
      }

      if (data.token !== undefined) {
        console.log('Failed.....');
      }

      if (data.status === 'fail') {
        console.log('Failed.....');
      }
    },
  });
};
