'use client'
import { FC } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/app/_components/Button";
import { ChangePasswordModal } from "../ChangePasswordModal";

export const ChangePassword: FC = () => {
  const searchParams = useSearchParams();
  const modal = searchParams.get("modal");
  const router = useRouter();

  return (
    <>
      <Button
        onClick={() => {
          router.push("/?modal=change-password");
        }}
        className="bg-transparent"
        variant="outlined"
      >
        Change password
      </Button>

      {modal === "change-password" && (
        <ChangePasswordModal
          onClose={() => {
            router.back();
          }}
          onSuccess={() => {
            router.back();
          }}
        />
      )}
    </>
  );
};
