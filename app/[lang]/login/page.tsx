"use client";
import { Button } from "@/app/_components/Button";
import { signIn } from "next-auth/react";

export default function Page() {
  return <Button onClick={() => signIn("google")}>Login with google</Button>;
}
