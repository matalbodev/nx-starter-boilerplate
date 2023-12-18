import { route } from '../../lib/route';
import BackOfficePage from '../../components/BackOfficePage';
import { getServerSession } from '@nx-starter/users/utils';

export default async function BackOffice() {
  const session = await getServerSession();
  const access_token = session?.user?.access_token;
  if (!access_token) {
    return <>Non authentificated user</>;
  }
  const req = await route(access_token, '/users');

  if (!req.ok) {
    return 'Error requesting users';
  }
  const res = await req.json();

  const { data, total } = res;

  return <BackOfficePage users={{ data, total }} />;
}
