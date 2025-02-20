import { axios } from '@/lib/axios';
import { useMutation } from '@tanstack/react-query';
import { setCookie } from 'cookies-next';
import { useRouter } from 'next/navigation';

const loginViaGoogle = ({
  access_token,
  role,
}: {
  access_token: string;
  role?: 'RENTER' | 'HOST';
}): Promise<any> => axios.post('/users/auth', { access_token, role });

export const useLoginViaGoogle = () => {
  const router = useRouter();
  return useMutation({
    mutationFn: loginViaGoogle,
    onSuccess(data) {
      console.log(data.token, 'From login');
      const userRole = data?.data?.user?.role

      //   toast.success('Login successful!');
      if (data.token) {
        setCookie('LALA_TOKEN', data.token);
        setCookie('LALA_USER', JSON.stringify(data.data.user));
        if (userRole === 'RENTER') {
          router.push('/renter-dashboard');
        } else {
          router.push('/dashboard');
        }
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
