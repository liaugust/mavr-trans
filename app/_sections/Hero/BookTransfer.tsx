"use client";
import { Button } from "@/app/_components/Button";
import { useTranslation } from "@/app/_i18n/client";
import { WithLang } from "@/app/types";
import { useRouter } from "next/navigation";
import { FC } from "react";

interface BookTransferProps extends WithLang {
  isLogged: boolean;
}

export const BookTransfer: FC<BookTransferProps> = ({ lang, isLogged }) => {
  const { t } = useTranslation(lang);
  const router = useRouter();

  const pathname = isLogged ? `/${lang}/trip` : `/${lang}?modal=login`;

  return (
    <Button variant="filled" onClick={() => router.push(pathname)}>
      {t("pages.home.hero.button")}
    </Button>
  );
};
