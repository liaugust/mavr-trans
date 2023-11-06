import { Car } from "@/app/_components/Car";
import { Title } from "@/app/_components/Typography";
import { useStore } from "@/app/store-provider";
import { FC, useMemo } from "react";

interface ChooseCarStepProps {
  value: number;
  passengers: number;
  onChange: (value: number) => void;
}

export const ChooseCarStep: FC<ChooseCarStepProps> = ({
  value,
  passengers,
  onChange,
}) => {
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
        Choose your car
      </Title>

      <div className="grid md:grid-cols-[repeat(2,1fr)] lg:grid-cols-[repeat(3,1fr)] gap-[10px] md:gap-10 mb-[60px]">
        {carsWithPassengers.map((car) => (
          <Car
            key={car.id}
            onSelect={() => onChange(car.id)}
            id={car.id}
            name={car.name}
            src={car.image}
            selected={value === car.id}
          />
        ))}
      </div>
    </>
  );
};
