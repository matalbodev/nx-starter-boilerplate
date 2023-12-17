import { JWT } from 'next-auth/jwt';
import CredentialsProvider from 'next-auth/providers/credentials';
import { User, type NextAuthOptions, type Session } from 'next-auth';

const API_URL = process.env.API_URL;
async function refreshToken(token: JWT): Promise<JWT> {
  const res = await fetch(`http://localhost:300/auth/refresh`, {
    method: 'POST',
    headers: {
      authorization: `Refresh ${token.refresh_token}`,
    },
  });

  const response = await res.json();

  return {
    ...token,
    access_token: response.access_token,
    refresh_token: response.refresh_token,
  };
}

export const authOptions: NextAuthOptions = {
  pages: {
    signIn: '/login',
    signOut: '/',
    error: '/login', // Error code passed in query string as ?error=
    verifyRequest: '/auth/verify-request', // (used for check email message)
    newUser: '/auth/new-user', // New users will be directed here on first sign in (leave the property out if not of interest)
  },
  session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60, // 30 days
    updateAge: 24 * 60 * 60, // 24 hours
  },
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: { label: 'Username', type: 'text', placeholder: 'jsmith' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials, req) {
        const res = await fetch(`${API_URL}/auth/login`, {
          method: 'POST',
          body: JSON.stringify(credentials),
          headers: { 'Content-Type': 'application/json' },
        });
        const user = await res.json();

        // If no error and we have user data, return it
        if (res?.ok && user) {
          return user;
        }
        // Return null if user data could not be retrieved
        return null;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) return { ...token, ...user };
      if (new Date().getTime() < token.expires_in) return token;
      return refreshToken(token);
    },
    async session(params: { session: Session; token: JWT }) {
      const { session, token } = params;
      const user: User | null = session.user || null;
      if (token && user) {
        user.username = token.username;
        user.id = token.id;
        user.access_token = token.access_token;
        user.refresh_token = token.refresh_token;
      }
      return session;
    },
  },
};
