import { Input } from "@/app/_components/Input";
import { Title } from "@/app/_components/Typography";
import { FC } from "react";
import { Control, Controller } from "react-hook-form";
import { FormFields } from "./request-ride-schema";
import { WithLang } from "@/app/types";
import { useTranslation } from "@/app/_i18n/client";

interface FillFormStepProps extends WithLang {
  control: Control<FormFields>;
  hasPhone: boolean;
}

export const FillFormStep: FC<FillFormStepProps> = ({
  lang,
  control,
  hasPhone,
}) => {
  const { t } = useTranslation(lang);

  return (
    <>
      <Title
        level="2.1"
        weight="4"
        className="capitalize text-center mb-10 md:mb-[60px]"
      >
        {t("pages.trip.form.contact_info.title")}
      </Title>

      <div className="mb-[35px] grid gap-y-[14px] max-w-[560px] mx-auto">
        {!hasPhone && (
          <Controller
            control={control}
            name="phone"
            render={({
              field: { value, onChange },
              fieldState: { error, invalid },
            }) => (
              <Input
                invalid={invalid}
                errorMessage={error?.message}
                placeholder={t("pages.trip.form.contact_info.fields.phone")}
                value={value}
                onChange={onChange}
              />
            )}
          />
        )}
        <Controller
          control={control}
          name="number"
          render={({
            field: { value, onChange },
            fieldState: { error, invalid },
          }) => (
            <Input
              invalid={invalid}
              errorMessage={error?.message}
              placeholder={t("pages.trip.form.contact_info.fields.number")}
              value={value}
              onChange={onChange}
            />
          )}
        />
        <Controller
          name="departureAt"
          control={control}
          render={({
            field: { value, onChange },
            fieldState: { error, invalid },
          }) => (
            <Input
              invalid={invalid}
              errorMessage={error?.message}
              value={value as unknown as string}
              onChange={onChange}
              type="date"
            />
          )}
        />
      </div>
    </>
  );
};
