'use client';

import githubLogin from '@/app/(auth)/login-github/_actions/githubLogin';
import { Button, buttonVariants } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { SiGithub } from '@icons-pack/react-simple-icons';
import Link from 'next/link';

export default function LoginForm() {
  return (
    <Card className='mx-auto max-w-96'>
      <CardHeader>
        <CardTitle>Login Github</CardTitle>
        <CardDescription>Entre com seu Github</CardDescription>
      </CardHeader>
      <CardContent>
        {' '}
        <form action={githubLogin} className='text-left '>
          <Button
            size={'lg'}
            type='submit'
            className='flex items-center gap-2 w-full mt-10'>
            <SiGithub className='w-4 h-4' />
            <span>Login com Github</span>
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
