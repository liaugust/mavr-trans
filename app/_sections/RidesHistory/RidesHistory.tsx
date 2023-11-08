"use client";
import { RideCard } from "@/app/_components/RideCard";
import { Text, Title } from "@/app/_components/Typography";
import { useProfile } from "@/app/(routes)/[lang]/profile-context";
import { FC } from "react";
import { useTranslation } from "@/app/_i18n/client";
import { WithLang } from "@/app/types";

interface RidesHistoryProps extends WithLang {
  className?: string;
}

export const RidesHistory: FC<RidesHistoryProps> = ({ className, lang }) => {
  const { t } = useTranslation(lang);
  const { inactive } = useProfile();

  return (
    <div className={className}>
      <Title weight="0" level="5" className="mb-5">
        {t("pages.profile.transfers_history")}
      </Title>

      {inactive?.length > 0 ? (
        <ul className="grid gap-y-5">
          {inactive?.map((ride) => (
            <li key={ride.id}>
              <RideCard ride={ride} />
            </li>
          ))}
        </ul>
      ) : (
        <Text>
          <Text>{t("no_transfers")}</Text>
        </Text>
      )}
    </div>
  );
};
