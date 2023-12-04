import { Text, Title } from "@/app/_components/Typography";
import { FC } from "react";
import { Control, useWatch } from "react-hook-form";
import { FormFields } from "./request-ride-schema";
import { WithLang } from "@/app/types";
import { useTranslation } from "@/app/_i18n/client";
import { useSession } from "next-auth/react";

interface CheckoutProps extends WithLang {
  control: Control<FormFields>;
}

export const Checkout: FC<CheckoutProps> = ({ lang, control }) => {
  const { t } = useTranslation(lang);
  const { data } = useSession();
  const { user } = data || {};

  const fields = useWatch({ control });

  const distance = (fields.distance || 0) / 1000;
  const direction = fields.waypoints?.map((w) => w.shortAddress).join(" - ");
  const formattedDistance =
    distance > 0.5 ? distance.toFixed(1) + "km" : fields.distance + "m";
  const total = (distance || 0) * (fields.category?.coefficient || 0);

  return (
    <>
      <Title
        level="2.1"
        weight="4"
        className="capitalize mb-10 md:mb-[60px] text-center leading-none"
      >
        {t("pages.trip.checkout.title")}
      </Title>

      <div className="grid gap-y-3 md:gap-y-[14px]">
        <div className="flex justify-between items-center">
          <Text level="1.1" weight="0">
            {t("pages.trip.checkout.fields.route")}
          </Text>
          <Text level="1.1">
            {direction} ({formattedDistance})
          </Text>
        </div>
        <div className="flex justify-between items-center">
          <Text level="1.1" weight="0">
            {t("pages.trip.checkout.fields.car")}
          </Text>
          <Text level="1.1">{fields.car?.name}</Text>
        </div>
        <div className="flex justify-between items-center">
          <Text level="1.1" weight="0">
            {t("pages.trip.checkout.fields.passengers")}
          </Text>
          <Text level="1.1">{fields.passengers}</Text>
        </div>
        <div className="flex justify-between items-center">
          <Text level="1.1" weight="0">
            {t("pages.trip.checkout.fields.options")}
          </Text>
          <Text level="1.1">{fields.option?.name}</Text>
        </div>
        <div className="flex justify-between items-center">
          <Text level="1.1" weight="0">
            {t("pages.trip.checkout.fields.full_name")}
          </Text>
          <Text level="1.1">{user?.name}</Text>
        </div>
        <div className="flex justify-between items-center">
          <Text level="1.1" weight="0">
            {t("pages.trip.checkout.fields.phone")}
          </Text>
          <Text level="1.1">{fields.phone}</Text>
        </div>
        <div className="flex justify-between items-center">
          <Text level="1.1" weight="0">
            {t("pages.trip.checkout.fields.number")}
          </Text>
          <Text level="1.1">{fields.number}</Text>
        </div>
      </div>

      <hr className="bg-[#121420] h-[1px] w-full mt-10 md:mt-[100px] mb-5 md:mb-[30px]" />

      <div className="flex justify-between items-center mb-[60px] md:mb-[100px]">
        <Text level="1.1">{t("pages.trip.checkout.fields.amount")}</Text>
        <Text level="1.1">€{total.toFixed(1)}</Text>
      </div>
    </>
  );
};
