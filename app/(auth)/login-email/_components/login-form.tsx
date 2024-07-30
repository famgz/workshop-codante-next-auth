'use client';

import resendLogin from '@/app/(auth)/login-email/_actions/emailLogin';
import { Button, buttonVariants } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';
import { Mail } from 'lucide-react';
import Link from 'next/link';

export default function LoginForm() {
  return (
    <Card className='mx-auto max-w-96'>
      <CardHeader>
        <CardTitle>Login Link Email</CardTitle>
        <CardDescription>Receba link de acesso no seu Email</CardDescription>
      </CardHeader>
      <CardContent>
        {' '}
        <form action={resendLogin} className='text-left '>
          <div className='grid w-full max-w-sm items-center gap-1.5'>
            <Label htmlFor='email'>Email</Label>
            <Input name='email' type='email' id='email' placeholder='Email' />
          </div>
          <Button
            size={'lg'}
            type='submit'
            className='flex items-center gap-2 w-full mt-10'>
            <Mail className='size-4' />
            Login Link Email
          </Button>
        </form>
      </CardContent>
      <CardFooter>
        <Link
          className={cn(
            buttonVariants({ variant: 'link', size: 'sm' }),
            'mt-2 mx-auto'
          )}
          href='/'>
          Voltar para Home
        </Link>
      </CardFooter>
    </Card>
  );
}
