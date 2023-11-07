"use client";
import { FC } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/app/_components/Button";
import { ChangePasswordModal } from "../ChangePasswordModal";
import { useTranslation } from "@/app/_i18n/client";
import { WithLang } from "@/app/types";

export const ChangePassword: FC<WithLang> = ({ lang }) => {
  const { t } = useTranslation(lang);
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
        {t("pages.profile.profile_button")}
      </Button>

      {modal === "change-password" && (
        <ChangePasswordModal
          lang={lang}
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
