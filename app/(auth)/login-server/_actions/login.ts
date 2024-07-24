'use server';

import { signIn } from '@/auth';
import { AuthError } from 'next-auth';
import { redirect } from 'next/navigation';

export default async function login(formData: FormData) {
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;

  await signIn('credentials', { email, password }).catch((err: AuthError) => {
    if (err.type === 'CredentialsSignin') {
      err.message = 'Credenciais inválidas';
      throw err;
    }
  });

  redirect('/dashboard');
}
