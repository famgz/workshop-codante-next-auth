// import { auth } from '@/auth';
// import { redirect } from 'next/navigation';
import { Suspense } from 'react';
import LoginForm from './_components/login-form';

export default async function LoginPage() {
  // const session = await auth();
  // if (session) redirect('/dashboard');

  return (
    <Suspense>
      <LoginForm />
    </Suspense>
  );
}
