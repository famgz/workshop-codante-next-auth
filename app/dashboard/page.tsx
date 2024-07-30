import logout from '@/app/(auth)/_actions/logout';
import { auth } from '@/auth';
import { Button, buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import { redirect } from 'next/navigation';

export default async function Dashboard() {
  const session = await auth();

  if (!session) {
    redirect('/login-server');
  }

  return (
    <main className='container mx-auto text-center'>
      <div>
        <h1 className='font-extrabold text-slate-600 dark:text-transparent text-7xl dark:bg-gradient-to-r dark:from-slate-50 dark:via-slate-400 dark:to-slate-200 bg-clip-text'>
          Dashboard
        </h1>
        {/* <div> */}
        <Image
          src={
            session.user?.image ||
            'https://www.aurubis.com/.resources/aurubis-light-module/webresources/assets/img/image-avatar-avatar-fallback.svg'
          }
          alt=''
          height={100}
          width={100}
          className='rounded-full mx-auto my-2'
        />
        {/* </div> */}
        <h3 className='mt-4 font-bold text-muted-foreground'>
          Boas vindas{`, ${session.user?.name || 'usuário'}`}!
        </h3>
        <p className='text-sm text-muted-foreground/60 mt-1'>
          Email: {session.user?.email}
        </p>
        {session.user?.githubProfile && (
          <>
            <p className='text-sm text-muted-foreground/60 mt-1'>
              Numero de seguidores do Github:{' '}
              {session.user?.githubProfile?.followers}
            </p>
            <p className='text-sm text-muted-foreground/60 mt-1'>
              Bio: {session.user?.githubProfile?.bio}
            </p>
          </>
        )}
        <hr className='w-1/4 mx-auto mt-5 mb-16' />

        <section className='flex flex-wrap items-center justify-center gap-3'>
          <form action={logout}>
            <Button>Logout</Button>
          </form>
          <Link href='/' className={cn(buttonVariants({ variant: 'outline' }))}>
            Home
          </Link>
        </section>
      </div>
    </main>
  );
}
