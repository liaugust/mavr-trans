import { Text } from "@/app/_components/Typography";
import { FC } from "react";

export interface CategoryProps {
  name: string;
  image: string;
  id: number;
}

export const Category: FC<CategoryProps> = ({ name, image }) => {
  return (
    <div className="shadow-[0_4px_14px_0_rgba(0,0,0,0.2)] px-[30px] h-[280px] py-[30px] lg:py-10 text-center bg-white">
      <div className="max-w-[300px] h-[150px] m-auto mb-[30px]">
        <img className="w-full h-full object-contain" src={image} alt={name} />
      </div>

      <Text
        level="1"
        Component="h3"
        weight="3"
        className="text-[#3D3C3A] uppercase"
      >
        {name}
      </Text>
    </div>
  );
};
