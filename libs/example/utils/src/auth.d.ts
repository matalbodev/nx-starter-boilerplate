import 'next-auth';
import { User } from 'next-auth';

declare module 'next-auth' {
  interface User {
    id: string;
    username: string;
    access_token: string;
  }
  interface Session extends DefaultSession {
    user?: {
      /** The user's postal address. */
      id: string;
      username: string;
      access_token: string;
    };
  }
}

declare module 'next-auth/jwt' {
  interface JWT extends User {}
}