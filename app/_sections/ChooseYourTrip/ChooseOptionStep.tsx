import { Card } from "@/app/_components/Card";
import { Heading, Title } from "@/app/_components/Typography";
import { useStore } from "@/app/store-provider";
import { FC } from "react";

interface ChooseOptionStepProps {
  value: number | null;
  onChange: (value: number) => void;
}

export const ChooseOptionStep: FC<ChooseOptionStepProps> = ({
  value,
  onChange,
}) => {
  const { options } = useStore();

  return (
    <>
      <Title
        level="2.1"
        weight="4"
        className="capitalize text-center mb-[60px]"
      >
        additional options
      </Title>

      <div className="grid grid-cols-[repeat(4,1fr)] gap-10 mb-[60px] justify-center">
        {options.map((option) => (
          <Card
            key={option.id}
            selected={value === option.id}
            onSelect={() => onChange(option.id)}
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
