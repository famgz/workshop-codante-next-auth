'use server';

import { signIn } from '@/auth';

export default async function nodemailerLogin(formData: FormData) {
  const email = formData.get('email') as string;

  await signIn('resend', { email, redirectTo: '/dashboard' });
}
