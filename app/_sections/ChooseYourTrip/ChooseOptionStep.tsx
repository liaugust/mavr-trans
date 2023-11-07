import { Card } from "@/app/_components/Card";
import { Heading, Title } from "@/app/_components/Typography";
import { useStore } from "@/app/(routes)/[lang]/store-provider";
import { FC } from "react";
import { WithLang } from "@/app/types";
import { useTranslation } from "@/app/_i18n/client";

type Option = { id: number; name: string };

interface ChooseOptionStepProps extends WithLang {
  value: Option | null;
  onChange: (value: Option | null) => void;
}

export const ChooseOptionStep: FC<ChooseOptionStepProps> = ({
  lang,
  value,
  onChange,
}) => {
  const { t } = useTranslation(lang);
  const { options } = useStore();

  return (
    <>
      <Title
        level="2.1"
        weight="4"
        className="capitalize text-center mb-10 md:mb-[60px]"
      >
        {t("pages.trip.form.options.title")}
      </Title>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-[60px] justify-center">
        {options.map((option) => (
          <Card
            key={option.id}
            selected={value?.id === option.id}
            onSelect={() =>
              value
                ? onChange(null)
                : onChange({ id: option.id, name: option.name })
            }
            className="p-[30px] h-[180px] flex items-center justify-center"
          >
            <Heading level="1" weight="3" className="uppercase">
              {option.name}
            </Heading>
          </Card>
        ))}
      </div>
    </>
  );
};
