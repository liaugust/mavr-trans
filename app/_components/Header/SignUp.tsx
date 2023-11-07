import { FC } from "react";
import { Button } from "../Button";
import { useRouter, useSearchParams } from "next/navigation";
import { SignUpModal } from "../SignUpModal";
import { useTranslation } from "@/app/_i18n/client";
import { WithLang } from "@/app/types";

interface SignUpProps extends WithLang {}

export const SignUp: FC<SignUpProps> = ({ lang }) => {
  const { t } = useTranslation(lang);

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
        {t("header.buttons.sign_up")}
      </Button>

      {modal === "signup" && (
        <SignUpModal
          lang={lang}
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
