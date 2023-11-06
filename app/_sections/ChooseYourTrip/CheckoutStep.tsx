import { Text, Title } from "@/app/_components/Typography";
import { FC } from "react";

export const Checkout: FC = () => {
  return (
    <>
      <Title weight="4" className="capitalize mb-[60px] text-center">
        Is everything right?
      </Title>

      <div className="grid gap-y-[14px]">
        <div className="flex justify-between items-center">
          <Text weight="0">Route:</Text>
          <Text>Milan - Paris (500km)</Text>
        </div>
        <div className="flex justify-between items-center">
          <Text weight="0">Car:</Text>
          <Text>Mercedes-benz sprinter</Text>
        </div>
        <div className="flex justify-between items-center">
          <Text weight="0">Number of passengers:</Text>
          <Text>4</Text>
        </div>
        <div className="flex justify-between items-center">
          <Text weight="0">Additional options:</Text>
          <Text>Baby chair</Text>
        </div>
        <div className="flex justify-between items-center">
          <Text weight="0">Customer name:</Text>
          <Text>Jake Rudiger</Text>
        </div>
        <div className="flex justify-between items-center">
          <Text weight="0">Phone number:</Text>
          <Text>+1 123 123 12 12</Text>
        </div>
      </div>

      <hr className="bg-[#121420] h-[1px] w-full mt-[100px] mb-[30px]" />

      <div className="flex justify-between items-center mb-[100px]">
        <Text>Amount:</Text>
        <Text>$549</Text>
      </div>
    </>
  );
};
