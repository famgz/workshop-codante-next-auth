'use client';

// import { useSession } from 'next-auth/react';
// import { useRouter } from 'next/navigation';
// import { auth } from '@/auth';
import LoginForm from './_components/login-form';

export default function LoginPage() {
  // const session = useSession();
  // const router = useRouter();
  // if (session.status === 'authenticated') {
  //   return router.push('/dashboard');
  // }

  return <LoginForm />;
}
