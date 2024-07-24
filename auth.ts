import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';

const config = {
  providers: [Credentials],
};

export const { handlers, auth } = NextAuth(config);
