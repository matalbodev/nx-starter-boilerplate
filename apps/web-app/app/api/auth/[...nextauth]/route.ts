import NextAuth from 'next-auth';
import { authOptions } from '@nx-starter/utils';


const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
