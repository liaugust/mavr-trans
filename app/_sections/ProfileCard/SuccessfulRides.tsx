"use client";
import { Heading, Title } from "@/app/_components/Typography";
import { useProfile } from "@/app/(routes)/[lang]/profile-context";
import { FC } from "react";
import { useTranslation } from "@/app/_i18n/client";
import { WithLang } from "@/app/types";

export const SuccessfulRides: FC<WithLang> = ({ lang }) => {
  const { t } = useTranslation(lang);
  const { active } = useProfile();

  return (
    <div className="pt-5 pb-[30px] px-5 bg-[#EBB200] text-center">
      <Title weight="1" level="4" Component="div" className="mb-2">
        {active.length}
      </Title>

      <Heading weight="0" Component="div" level="3">
        {t("pages.profile.successfull_trips")}
      </Heading>
    </div>
  );
};
