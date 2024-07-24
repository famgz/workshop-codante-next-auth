import { metadata } from './app/layout';
import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';

export const { handlers, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        console.log(credentials);
        if (credentials.password === '1234')
          return {
            id: '1',
            name: 'Pedro',
            email: 'me@email.me',
          };
        return null;
      },
    }),
  ],
});
