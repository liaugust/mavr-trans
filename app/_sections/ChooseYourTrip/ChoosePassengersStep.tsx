import { Card } from "@/app/_components/Card";
import { Title } from "@/app/_components/Typography";
import { FC } from "react";

interface ChoosePassengersStepProps {
  value: number;
  maximumSeats: number;
  onChange: (value: number) => void;
}

export const ChoosePassengersStep: FC<ChoosePassengersStepProps> = ({
  value,
  onChange,
  maximumSeats,
}) => {
  return (
    <>
      <Title
        level="2.1"
        weight="4"
        className="capitalize text-center mb-10 md:mb-[60px]"
      >
        Number of passengers
      </Title>

      <div className="grid grid-cols-[repeat(2,1fr)] md:grid-cols-[repeat(3,1fr)] gap-5 md:gap-10 mb-[60px] justify-center">
        {Array.from({ length: maximumSeats }).map((_, idx) => {
          const number = idx + 1;

          return (
            <Card
              key={number}
              selected={value === number}
              onSelect={() => onChange(number)}
              className="p-[30px] "
            >
              <Title level="1" weight="3" className="leading-none">
                {number}
              </Title>
            </Card>
          );
        })}
      </div>
    </>
  );
};
