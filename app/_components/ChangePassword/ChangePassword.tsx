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
          router.push("/?modal=login");
        }}
        variant="filled_primary"
        className="mr-2"
      >
        Sign in
      </Button>

      {modal === "login" && (
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
