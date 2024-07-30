'use server';

import { signIn } from '@/auth';

export default async function resendLogin(formData: FormData) {
  const email = formData.get('email') as string;

  await signIn('resend', { email, redirectTo: '/dashboard' });
}
