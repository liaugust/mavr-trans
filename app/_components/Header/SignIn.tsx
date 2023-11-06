import { FC } from "react";
import { Button } from "../Button";
import { useRouter, useSearchParams } from "next/navigation";
import { SignInModal } from "../SignInModal";

export const SignIn: FC = () => {
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
        <SignInModal
          onClose={() => {
            router.push("/");
          }}
          onSuccess={() => {
            router.push("/profile");
          }}
        />
      )}
    </>
  );
};
