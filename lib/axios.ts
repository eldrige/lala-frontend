import Axios, { AxiosError, InternalAxiosRequestConfig } from 'axios';
import { getCookie } from 'cookies-next';
import { ExternalToast, toast } from 'sonner';

async function authRequestInterceptor(config: InternalAxiosRequestConfig) {
  const token = getCookie('LALA_TOKEN');

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  config.headers.Accept = 'application/json';
  return config;
}

export const axios = Axios.create({
  baseURL: 'http://localhost:2000/',
});

axios.interceptors.request.use((config) => authRequestInterceptor(config));

const interceptRespose = (error: AxiosError) => {
  console.log(error, 'From intercept');
  if (error.status === 401) {
    toast.error('Please login to perform this action', {
      position: 'bottom-right' as ExternalToast['position'],
    });
  }
  type ResponseError = Partial<{
    status: string;
    message: string;
    error: {
      isOperational: boolean;
      status: string;
      statusCode: number;
      statusText: string;
    };
  }>;

  const errorPromise = Promise.reject(error);
  if (error.response) {
    const errorResponseData = error.response?.data as ResponseError;
    const statusCode =
      error.response.status || errorResponseData?.error?.statusCode;

    const message =
      errorResponseData?.error?.statusText ||
      errorResponseData?.message ||
      error.message ||
      'Something went wrong.';

    const position =
      statusCode === 400
        ? 'top-center'
        : ('bottom-right' as ExternalToast['position']);

    const description =
      error.code === 'ERR_NETWORK'
        ? 'Please check your internet connection and try again'
        : statusCode === 400
        ? 'Please double-check your credentials'
        : '';

    const canshowToast =
      error.code === AxiosError.ERR_NETWORK ||
      error.code === AxiosError.ERR_BAD_RESPONSE ||
      statusCode === 400 ||
      statusCode === 404 ||
      statusCode === 500;

    if (canshowToast) {
      toast.error(message, {
        description,
        position,
      });
    }
  }

  return errorPromise;
};

axios.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    interceptRespose(error);
  }
);
