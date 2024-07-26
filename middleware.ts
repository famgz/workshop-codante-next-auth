import { auth } from '@/auth';
import { NextResponse } from 'next/server';

export default auth((req) => {
  console.log('[middleware] req.auth: ', req.auth, req.nextUrl.pathname);

  // protect login/register if already logged in
  if (
    req.auth &&
    (req.nextUrl.pathname.startsWith('/login') ||
      req.nextUrl.pathname === '/register')
  ) {
    return NextResponse.redirect(new URL('/dashboard', req.nextUrl.origin));
  }

  // protect dashboard if not logged in
  if (!req.auth && req.nextUrl.pathname.startsWith('/dashboard')) {
    return NextResponse.redirect(new URL('/login-client', req.nextUrl.origin));
  }

  return NextResponse.next();
});

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
