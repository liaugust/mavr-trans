"use client";
import { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { FC, PropsWithChildren } from "react";

interface AuthContextProps extends PropsWithChildren {
  session: Session | null;
}

export const AuthContext: FC<AuthContextProps> = ({ session, children }) => {
  return (
    <SessionProvider session={session} refetchOnWindowFocus>
      {children}
    </SessionProvider>
  );
};
