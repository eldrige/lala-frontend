'use client';
import { GoogleOAuthProvider } from '@react-oauth/google';

export const GoogleProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <GoogleOAuthProvider clientId="773507698296-d8j7e9uu8ol9i5hrtrorctcd3emgggjg.apps.googleusercontent.com">
      {children}
    </GoogleOAuthProvider>
  );
};
