"use client";
import { RideCard } from "@/app/_components/RideCard";
import { Text, Title } from "@/app/_components/Typography";
import { useProfile } from "@/app/[lang]/profile-context";
import { FC } from "react";
import { useTranslation } from "@/app/_i18n/client";
import { WithLang } from "@/app/types";

interface ActiveRidesProps extends WithLang {
  className?: string;
}

export const ActiveRides: FC<ActiveRidesProps> = ({ className, lang }) => {
  const { t } = useTranslation(lang);
  const { active } = useProfile();

  return (
    <div className={`mb-10 ${className}`}>
      <Title weight="0" level="5" className="mb-5">
        {t("pages.profile.active_transfers")}
      </Title>

      {active.length > 0 ? (
        <ul className="grid gap-y-5">
          {active.map((ride) => (
            <li key={ride.id}>
              <RideCard active ride={ride} />
            </li>
          ))}
        </ul>
      ) : (
        <Text>{t("no_transfers")}</Text>
      )}
    </div>
  );
};
