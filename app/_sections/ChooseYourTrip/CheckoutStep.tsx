import { Text, Title } from "@/app/_components/Typography";
import { FC, useEffect } from "react";
import { Control, UseFormSetValue, useWatch } from "react-hook-form";
import { FormFields } from "./request-ride-schema";

interface CheckoutProps {
  control: Control<FormFields>;
}

export const Checkout: FC<CheckoutProps> = ({ control }) => {
  const fields = useWatch({ control });

  const distance = (fields.distance || 0) / 1000;
  const direction = fields.waypoints?.map((w) => w.shortAddress).join(" - ");
  const formattedDistance =
    distance > 0.5 ? distance.toFixed(1) + "km" : fields.distance + "m";
  const total = (fields.distance || 0) * (fields.category?.coefficient || 0);

  return (
    <>
      <Title
        level="2.1"
        weight="4"
        className="capitalize mb-10 md:mb-[60px] text-center leading-none"
      >
        Is everything right?
      </Title>

      <div className="grid gap-y-3 md:gap-y-[14px]">
        <div className="flex justify-between items-center">
          <Text level="1.1" weight="0">
            Route:
          </Text>
          <Text level="1.1">
            {direction} ({formattedDistance})
          </Text>
        </div>
        <div className="flex justify-between items-center">
          <Text level="1.1" weight="0">
            Car:
          </Text>
          <Text level="1.1">{fields.car?.name}</Text>
        </div>
        <div className="flex justify-between items-center">
          <Text level="1.1" weight="0">
            Number of passengers:
          </Text>
          <Text level="1.1">{fields.passengers}</Text>
        </div>
        <div className="flex justify-between items-center">
          <Text level="1.1" weight="0">
            Additional options:
          </Text>
          <Text level="1.1">{fields.option?.name}</Text>
        </div>
        <div className="flex justify-between items-center">
          <Text level="1.1" weight="0">
            Customer name:
          </Text>
          <Text level="1.1">
            {fields.userInfo?.firstName} {fields.userInfo?.lastName}
          </Text>
        </div>
        <div className="flex justify-between items-center">
          <Text level="1.1" weight="0">
            Phone number:
          </Text>
          <Text level="1.1">{fields.userInfo?.phone}</Text>
        </div>
      </div>

      <hr className="bg-[#121420] h-[1px] w-full mt-10 md:mt-[100px] mb-5 md:mb-[30px]" />

      <div className="flex justify-between items-center mb-[60px] md:mb-[100px]">
        <Text level="1.1">Amount:</Text>
        <Text level="1.1">€{total.toFixed(1)}</Text>
      </div>
    </>
  );
};
