import { EntityCard } from "@/app/_components/EntityCard";
import { Title } from "@/app/_components/Typography";
import { useStore } from "@/app/store-provider";
import { FC, useMemo } from "react";
import { FormFields } from "./request-ride-schema";

type Class = FormFields["category"];

interface ChooseClassStepProps {
  value: Class | null;
  onChange: (value: Class) => void;
}

export const ChooseClassStep: FC<ChooseClassStepProps> = ({
  value,
  onChange,
}) => {
  const { categories } = useStore();

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
        Choose Class
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
