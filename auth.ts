import db from '@/lib/db';
import { compareSync } from 'bcrypt-ts';
import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';

export const { handlers, auth } = NextAuth({
  // customize auth routes
  // pages: {
  //   signIn: '/login',
  //   signOut: '/logout',
  // },
  providers: [
    Credentials({
      credentials: {
        email: {
          label: 'Email',
          type: 'email',
        },
        password: {
          label: 'Senha',
          type: 'password',
        },
      },
      authorize: async (credentials) => {
        const email = credentials.email as string;
        const password = credentials.password as string;

        if (!(email && password)) return null;

        const user = await db.user.findUnique({
          where: { email },
        });

        if (!user) return null;

        const passwordsMatches = compareSync(password, user.password);

        if (!passwordsMatches) {
          return null;
        }

        return user;
      },
    }),
  ],
});
