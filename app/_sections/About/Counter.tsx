import { Text, Title } from "@/app/_components/Typography";
import { FC } from "react";

interface CounterProps {
  src: string;
  text: string;
  count: string;
}

export const Counter: FC<CounterProps> = ({ src, count, text }) => {
  return (
    <div className="h-52 lg:h-72 relative">
      <img
        src={src}
        alt={`${count} ${text}`}
        className="w-full h-full object-cover"
      />

      <div className="absolute bottom-0 left-0 translate-y-1/2 bg-[#121420] px-3 py-4 capitalize">
        <Title weight="3" level="3" className="text-primary">
          {/* <Title level="3" className="text-3xl"> */}
          {count}
        </Title>
        <Text
          //  <Text className="text-white text-sm">
          className="text-white"
          // @ts-ignore
          dangerouslySetInnerHTML={{ __html: text }}
        />
      </div>
    </div>
  );
};
