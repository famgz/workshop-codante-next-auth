import db from '@/lib/db';
import { PrismaAdapter } from '@auth/prisma-adapter';
import { compareSync } from 'bcrypt-ts';
import NextAuth, { NextAuthConfig } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import GitHub from 'next-auth/providers/github';
import Resend from 'next-auth/providers/resend';

const options: NextAuthConfig = {
  // customize auth routes
  pages: {
    // signIn: '/login-client',
    // signOut: '/logout',
  },
  adapter: PrismaAdapter(db),
  session: {
    strategy: 'jwt',
  },
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

        const passwordsMatches = compareSync(password, user.password!);

        if (!passwordsMatches) {
          return null;
        }

        return user;
      },
    }),
    // the providers order mattters for the default signin page layout
    GitHub({
      allowDangerousEmailAccountLinking: true,
    }),
    // Nodemailer({
    //   server: process.env.EMAIL_SERVER,
    //   from: process.env.EMAIL_FROM,
    // }),
    Resend({
      from: process.env.EMAIL_FROM,
    }),
  ],
  callbacks: {
    authorized: async ({ auth }) => {
      return !!auth;
    },
  },
};

export const { handlers, auth, signIn, signOut } = NextAuth(options);
