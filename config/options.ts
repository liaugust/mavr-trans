import { getUser } from "@/app/_state/users";
import { GetUserUseCase } from "@/app/_storage";
import { prisma } from "@/prisma";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { compare } from "bcrypt";
import { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import Credentials from "next-auth/providers/credentials";
import Google from "next-auth/providers/google";

export const options: NextAuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  adapter: PrismaAdapter(prisma),
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/?modal=login",
  },
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials) {
        const { email, password } = credentials || {};
        if (!email || !password) return null;

        const existingUser = await getUser(email);

        if (!existingUser) {
          return null;
        }

        if (existingUser.password) {
          const passwordMatch = await compare(password, existingUser.password);
          if (!passwordMatch) return null;
        }

        return {
          id: existingUser.id,
          email: existingUser.email,
          username: existingUser.name,
          isAdmin: existingUser.isAdmin,
          activeRides: existingUser.activeRides,
          phoneNumber: existingUser.phoneNumber,
          inactiveRides: existingUser.inactiveRides,
          successfulRides: existingUser.successfulRides,
        };
      },
    }),
    Google({
      allowDangerousEmailAccountLinking: true,
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        return {
          ...token,
          username: user.name,
          activeRides: user.activeRides,
          phoneNumber: user.phoneNumber,
          inactiveRides: user.inactiveRides,
          successfulRides: user.successfulRides,
        };
      }

      return token;
    },
    async session({ session, token }) {
      return {
        ...session,
        user: {
          ...session.user,
          username: token.username,
          phoneNumber: token.phoneNumber,
          activeRides: token.activeRides,
          inactiveRides: token.inactiveRides,
          successfulRides: token.successfulRides,
        },
      };
    },

    // async jwt({ token, trigger, session }) {
    //   if (trigger === "update" && session?.name) {
    //     token.name = session.name;
    //   }

    //   return token;
    // },
  },
};

export const { handlers, auth, signIn, signOut } = NextAuth(options);
