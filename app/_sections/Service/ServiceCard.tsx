import { Caption, Heading } from "@/app/_components/Typography";
import { FC } from "react";

export interface ServiceCardProps {
  title: string;
  text: string;
  src: string;
  id: number;
}

export const ServiceCard: FC<ServiceCardProps> = ({ title, text, src }) => {
  return (
    <div className="shadow-[0_4px_14px_0_rgba(0,0,0,0.2)]">
      <div className="object-cover h-[280px]">
        <img src={src} className="w-full h-full object-cover" alt={title} />
      </div>

      <div className="px-5 py-6 text-[#343331] text-center">
        <Heading className="mb-[10px]">{title}</Heading>
        <Caption level="1" weight="0" className="leading-[1.4]">
          {text}
        </Caption>
      </div>
    </div>
  );
};
