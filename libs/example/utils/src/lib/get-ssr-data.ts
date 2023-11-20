import { getServerSession } from 'next-auth';
import { authOptions } from '@nx-starter/utils';

interface GetSSRData {
  endpoint: string;
  noCache?: boolean;
}

export async function getSSRData(options: GetSSRData) {
  const { endpoint, noCache } = options;
  const session = await getServerSession(authOptions);
  const access_token = session?.user?.access_token;
  const { API_URL } = process.env;

  const res = await fetch(`${API_URL}/${endpoint}`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${access_token}`,
    },
    cache: noCache ? 'no-store' : 'default',
  });

  const data = await res.json();
  if (res.status !== 200) {
    return {
      error: data,
    };
  }

  const total = res?.headers.get('x-total');

  return {
    data,
    total,
    username: session?.user?.username,
  };
}
