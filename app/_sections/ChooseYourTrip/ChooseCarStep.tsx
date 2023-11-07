import { EntityCard } from "@/app/_components/EntityCard";
import { Title } from "@/app/_components/Typography";
import { useStore } from "@/app/(routes)/[lang]/store-provider";
import { FC, useMemo } from "react";
import { WithLang } from "@/app/types";
import { useTranslation } from "@/app/_i18n/client";

type Car = { id: number; name: string };

interface ChooseCarStepProps extends WithLang {
  value: Car | null;
  passengers: number;
  onChange: (value: Car) => void;
}

export const ChooseCarStep: FC<ChooseCarStepProps> = ({
  lang,
  value,
  passengers,
  onChange,
}) => {
  const { t } = useTranslation(lang);
  const { cars } = useStore();

  const carsWithPassengers = useMemo(
    () => cars.filter((car) => car.seats >= passengers),
    [cars, passengers]
  );

  if (carsWithPassengers.length === 0) {
    return (
      <Title
        level="2.1"
        weight="4"
        className="capitalize text-center mb-10 md:mb-[60px]"
      >
        No cars available for such amount of passengers
      </Title>
    );
  }

  return (
    <>
      <Title
        level="2.1"
        weight="4"
        className="capitalize text-center mb-[60px]"
      >
        {t("pages.trip.form.choose_car.title")}
      </Title>

      <div className="grid md:grid-cols-[repeat(2,1fr)] lg:grid-cols-[repeat(3,1fr)] gap-[10px] md:gap-10 mb-[60px]">
        {carsWithPassengers.map((car) => (
          <EntityCard
            key={car.id}
            onSelect={() => onChange({ id: car.id, name: car.name })}
            id={car.id}
            name={car.name}
            src={car.image}
            selected={value?.id === car.id}
          />
        ))}
      </div>
    </>
  );
};
