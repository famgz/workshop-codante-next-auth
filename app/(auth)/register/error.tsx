'use client';

import ErrorCard from '@/app/(auth)/register/_components/error-card';

interface RegisterErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function RegisterError({ error, reset }: RegisterErrorProps) {
  return <ErrorCard errorMessage={error.message} reset={reset} />;
}
