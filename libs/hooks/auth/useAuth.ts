import type { KeyboardEvent, SyntheticEvent } from 'react';
import { useRef, useState } from 'react';
import { useRouter } from 'next/router';
import { signIn, useSession } from 'next-auth/react';
import { toast } from 'react-toastify';

export default function useAuth() {
  const router = useRouter();
  const { status } = useSession();
  const [formStatus, setFormStatus] = useState('');
  const passwordRef = useRef<HTMLInputElement>(null);

  const onLogin = async (e: SyntheticEvent) => {
    e.preventDefault();

    const password = passwordRef.current?.value;
    const response = await signIn('credentials', {
      redirect: false,
      password,
    });

    if (!response?.error) {
      setFormStatus('로그인 성공!');
      toast.success(formStatus);
      router.replace('/');
    } else {
      setFormStatus(`Error: ${response.error}`);
      toast.error(formStatus);
    }
  };

  const onKeyPress = (e: SyntheticEvent & KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onLogin(e);
    }
  };

  if (status === 'authenticated') {
    router.replace('/');
  }

  return {
    passwordRef,
    onLogin,
    onKeyPress,
  };
}
