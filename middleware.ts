import { NextResponse } from 'next/server';

export function middleware(request: Request) {
  const authCookie = request.headers.get('cookie')?.includes('auth=authenticated');

  if (!authCookie && request.url.includes('/admin/dashboard')) {
    return NextResponse.redirect(new URL('/admin', request.url));
  }

  return NextResponse.next();
}

// Apply the middleware only to the `/admin/dashboard` route
export const config = {
  matcher: ['/admin/dashboard'],
};
