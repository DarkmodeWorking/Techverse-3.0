import { NextResponse } from 'next/server';
import { serialize } from 'cookie';

interface LoginRequestBody {
  username: string;
  password: string;
}

export async function POST(request: Request) {
  const { username, password }: LoginRequestBody = await request.json();

  if (username === 'admin' && password === process.env.NEXT_PUBLIC_ADMIN_PASSWORD) {
    // Set the auth cookie if credentials match
    const authCookie = serialize('auth', 'authenticated', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      path: '/',
      maxAge: 60 * 60, // 1 hour
    });

    return NextResponse.json({ success: true }, {
      headers: { 'Set-Cookie': authCookie },
    });
  } else {
    return NextResponse.json({ success: false, message: 'Invalid credentials' }, { status: 401 });
  }
}
