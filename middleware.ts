// export { auth as middleware } from '@/auth';

import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  console.log('middleware running');
  return NextResponse.redirect(new URL('/asd', request.url));
}

export const config = {
  matcher: ['/dashboard/:path*'],
};
