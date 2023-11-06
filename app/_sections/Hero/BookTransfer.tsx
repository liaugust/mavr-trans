"use client";
import { Button } from "@/app/_components/Button";
import { useRouter } from "next/navigation";
import { FC } from "react";

export const BookTransfer: FC = () => {
  const router = useRouter();

  return (
    <Button variant="filled" onClick={() => router.push("/trip")}>
      Book a transfer
    </Button>
  );
};
