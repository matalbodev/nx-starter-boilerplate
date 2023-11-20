import NextAuth, { DefaultSession } from 'next-auth';

declare module 'next-auth' {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session extends DefaultSession {
    user?: {
      /** The user's postal address. */
      id: string;
      username: string;
      access_token: string;
      refresh_token: string;
      expires_in: number;
    };
  }
}