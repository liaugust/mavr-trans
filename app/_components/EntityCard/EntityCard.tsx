import { FC } from "react";
import { Text } from "../Typography";
import Image from "next/image";
import { Card } from "../Card";

export interface EntityCardProps {
  onSelect: () => void;
  selected?: boolean;
  name: string;
  src: string;
  id: number;
}

export const EntityCard: FC<EntityCardProps> = ({
  src,
  name,
  selected,
  onSelect,
}) => {
  return (
    <Card
      className="grid grid-cols-[100px,1fr] gap-x-3 md:block px-[14px] pt-[10px] pb-[13px] md:px-5 md:pt-5 md:pb-10"
      selected={selected}
      onSelect={onSelect}
    >
      <div className={`h-[95px] w-full m-auto md:mb-[7px]`}>
        <Image
          className="w-full h-full object-contain"
          width={100}
          height={50}
          src={src}
          alt={name}
        />
      </div>

      <Text
        level="1"
        weight="3"
        Component="h3"
        className="text-[#3D3C3A] uppercase leading-none flex items-center justify-center"
      >
        {name}
      </Text>
    </Card>
  );
};
