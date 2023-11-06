import { FC } from "react";
import { Button } from "../Button";
import { useRouter, useSearchParams } from "next/navigation";
import { SignUpModal } from "../SignUpModal";

export const SignUp: FC = () => {
  const searchParams = useSearchParams();
  const modal = searchParams.get("modal");
  const router = useRouter();

  return (
    <>
      <Button
        onClick={() => {
          router.push("/?modal=signup");
        }}
        variant="outlined_primary"
      >
        Sign UP
      </Button>

      {modal === "signup" && (
        <SignUpModal
          onSuccess={() => {
            router.push("/?modal=login");
          }}
          onClose={() => {
            router.push("/");
          }}
        />
      )}
    </>
  );
};
