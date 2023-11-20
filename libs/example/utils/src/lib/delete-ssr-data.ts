import { getServerSession } from 'next-auth';
import { authOptions } from '@nx-starter/utils';

interface GetSSRData {
  endpoint: string;
}

export async function deleteSSRData(options: GetSSRData) {
  const { endpoint } = options;
  const session = await getServerSession(authOptions);
  const access_token = session?.user?.access_token;
  const res = await fetch(`${process.env['NX_API_URL']}/${endpoint}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${access_token}`,
    },
  });
  if (!res.ok) {
    throw new Error('Failed to DELETE data');
  }

  return await res.json();
}
