'use client';

import login from '@/app/(auth)/login-server/_actions/login';
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
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

export default function LoginForm() {
  const params = useSearchParams();
  const emailFromURL = params.get('email') || '';

  return (
    <Card className='mx-auto max-w-96'>
      <CardHeader>
        <CardTitle>Login Server Side</CardTitle>
        <CardDescription>Entre com email e senha</CardDescription>
      </CardHeader>
      <CardContent>
        {' '}
        <form action={login} className='text-left '>
          <div className='space-y-6'>
            <div className='grid w-full max-w-sm items-center gap-1.5'>
              <Label htmlFor='email'>Email</Label>
              <Input
                name='email'
                type='email'
                id='email'
                placeholder='Email'
                defaultValue={emailFromURL}
              />
            </div>
            <div className='grid w-full max-w-sm items-center gap-1.5'>
              <Label htmlFor='password'>Senha</Label>
              <Input
                name='password'
                type='password'
                id='password'
                placeholder='password'
              />
            </div>
          </div>
          <Button size={'lg'} type='submit' className='w-full mt-10 '>
            Login
          </Button>
        </form>
      </CardContent>
      <CardFooter>
        <div className='flex flex-col mx-auto'>
          <Link
            className={cn(
              buttonVariants({ variant: 'link', size: 'sm' }),
              'mt-2 mx-auto'
            )}
            href='/register'>
            Não possui conta?
          </Link>
          <Link
            className={cn(
              buttonVariants({ variant: 'link', size: 'sm' }),
              'mt-2 mx-auto'
            )}
            href='/'>
            Voltar para Home
          </Link>
        </div>
      </CardFooter>
    </Card>
  );
}
