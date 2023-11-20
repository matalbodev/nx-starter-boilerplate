import { getToken } from 'next-auth/jwt';
import { NextRequest } from 'next/server';

export async function authentificatedRoute<T>(
  req: NextRequest,
  fn: (access_token: string) => Promise<T>
) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

  const access_token = token?.access_token;
  if (!access_token) {
    throw new Error('Could not get authentification token')
  }
  return fn(access_token as string);
}
