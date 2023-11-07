import { FC } from "react";
import { Button } from "../Button";
import { useRouter, useSearchParams } from "next/navigation";
import { SignInModal } from "../SignInModal";
import { useTranslation } from "@/app/_i18n/client";
import { WithLang } from "@/app/types";

interface SignInProps extends WithLang {}

export const SignIn: FC<SignInProps> = ({ lang }) => {
  const { t } = useTranslation(lang);

  const searchParams = useSearchParams();
  const modal = searchParams.get("modal");
  const router = useRouter();

  return (
    <>
      <Button
        onClick={() => {
          router.push(`/${lang}?modal=login`);
        }}
        variant="filled_primary"
      >
        {t("header.buttons.sign_in")}
      </Button>

      {modal === "login" && (
        <SignInModal
          lang={lang}
          onClose={() => {
            router.push(`/${lang}`);
          }}
          onSuccess={() => {
            router.push(`/${lang}/profile`);
          }}
        />
      )}
    </>
  );
};
