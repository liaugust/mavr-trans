import { Car } from "@/app/_components/Car";
import { Title } from "@/app/_components/Typography";
import { useStore } from "@/app/store-provider";
import { FC, useMemo } from "react";

interface ChooseClassStepProps {
  value: number;
  onChange: (value: number) => void;
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

      <div className="grid md:grid-cols-[repeat(2,1fr)] lg:grid-cols-[repeat(3,1fr)] gap-[10px] md:gap-10 mb-[60px]">
        {activeCategories.map((category) => (
          <Car
            key={category.id}
            id={category.id}
            name={category.name}
            src={category.image}
            onSelect={() => onChange(category.id)}
            selected={value === category.id}
          />
        ))}
      </div>
    </>
  );
};
