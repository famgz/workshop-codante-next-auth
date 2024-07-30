import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { SiGithub } from '@icons-pack/react-simple-icons';
import { KeyRoundIcon, LogInIcon, Mail } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <main className='container px-0 py-20 mx-auto text-center'>
      <header className='mx-auto'>
        <h1 className='max-w-[500px] mx-auto font-extrabold text-slate-600 dark:text-transparent text-5xl min-[400px]:text-7xl dark:bg-gradient-to-r dark:from-slate-50 dark:via-slate-400 dark:to-slate-200 bg-clip-text'>
          Workshop Auth.js
        </h1>
        <hr className='w-1/4 mx-auto mt-5 mb-16' />
      </header>

      <section className='grid grid-cols-1 min-[400px]:grid-cols-2 mx-auto max-w-[500px] items-stretch justify-center gap-4'>
        <Link
          href='/dashboard'
          className={cn(
            buttonVariants({ variant: 'outline', size: 'lg' }),
            'font-bold'
          )}>
          Dashboard
        </Link>
        <Link
          href='/api/auth/signin'
          className={cn(
            buttonVariants({ size: 'lg' }),
            'flex items-center gap-2'
          )}>
          <LogInIcon className='size-4' />
          Login Padrão
        </Link>
        <Link
          href='/login-server'
          className={cn(
            buttonVariants({ size: 'lg' }),
            'flex items-center gap-2'
          )}>
          <KeyRoundIcon className='size-4' />
          Login - Server
        </Link>
        <Link
          href='/login-client'
          className={cn(
            buttonVariants({ size: 'lg' }),
            'flex items-center gap-2'
          )}>
          <KeyRoundIcon className='size-4' />
          Login - Client
        </Link>
        <Link
          href='/login-github'
          className={cn(
            buttonVariants({ size: 'lg' }),
            'flex items-center gap-2'
          )}>
          <SiGithub className='size-4 shrink-0' />
          Login com Github
        </Link>
        <Link
          href='/login-email'
          className={cn(
            buttonVariants({ size: 'lg' }),
            'flex items-center gap-2'
          )}>
          <Mail className='size-4 shrink-0' />
          Login Link Email
        </Link>
      </section>
    </main>
  );
}
