'use server';

import db from '@/lib/db';
import { hashSync } from 'bcrypt-ts';
import { redirect } from 'next/navigation';

export default async function register(formData: FormData) {
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;

  if (!(name && email && password)) {
    throw new Error('Os campos devem estar preenchidos');
  }

  const existingUser = await db.user.findFirst({ where: { email } });

  if (existingUser) {
    throw new Error('Usuario já existe');
  }

  const newUser = await db.user.create({
    data: {
      name,
      email,
      password: hashSync(password),
    },
  });

  console.log(newUser);

  redirect('/');
}
