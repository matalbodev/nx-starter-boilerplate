import { NextResponse } from 'next/server';

export async function route(access_token: string, endpoint: string) {
  const { API_URL } = process.env;
  const res = await fetch(`${API_URL}${endpoint}`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${access_token}`,
    },
  });
  const total = res?.headers.get('x-total');
  const data = await res.json();
  return NextResponse.json({ data, total });
}
