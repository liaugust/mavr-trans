import { EntityCard } from "@/app/_components/EntityCard";
import { Title } from "@/app/_components/Typography";
import { FC, useMemo } from "react";
import { FormFields } from "./request-ride-schema";
import { WithLang } from "@/app/types";
import { useTranslation } from "@/app/_i18n/client";
import { CategoryEntity } from "@/app/_storage/modules/categories/core";

type Class = FormFields["category"];

interface ChooseClassStepProps extends WithLang {
  value: Class | null;
  onChange: (value: Class) => void;
  categories: CategoryEntity[];
}

export const ChooseClassStep: FC<ChooseClassStepProps> = ({
  lang,
  value,
  onChange,
  categories,
}) => {
  const { t } = useTranslation(lang);

  const activeCategories = useMemo(
    () => categories.filter((c) => c.active),
    [categories]
  );

  return (
    <>
      <Title
        level="2.1"
        weight="4"
        className="capitalize text-center mb-10 md:mb-[60px]"
      >
        {t("pages.trip.form.choose_class.title")}
      </Title>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-[10px] md:gap-10 mb-[60px]">
        {activeCategories.map((category) => (
          <EntityCard
            key={category.id}
            id={category.id}
            name={category.name}
            src={category.image}
            onSelect={() =>
              onChange({
                id: category.id,
                name: category.name,
                coefficient: category.coefficient,
                maximumSeats: category.maximumSeats,
              })
            }
            selected={value?.id === category.id}
          />
        ))}
      </div>
    </>
  );
};
