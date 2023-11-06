import { FC } from "react";
import { Caption, Heading, Text, Title } from "../Typography";
import { RideEntity } from "@/app/_storage/modules/rides/core";

interface RideCardProps {
  active?: boolean;
  ride: RideEntity;
}

export const RideCard: FC<RideCardProps> = ({ active = false, ride }) => {
  const date = `${ride.departureDate.toLocaleDateString()} - ${ride.arrivalDate.toLocaleDateString()}`;
  const direction = ride.allWaypoints.map((w) => w.shortAddress).join(" - ");

  if (active) {
    return (
      <div className="rounded-[10px] grid grid-cols-[1fr,240px] overflow-hidden text-[#EBB200]">
        <div
          className={"py-5 px-[30px] bg-[#121420] flex flex-col justify-center"}
        >
          <Title weight="0" level="5" className={`mb-[10px]`}>
            {direction}
          </Title>
          <Text weight="0" level="3">
            {date}
          </Text>
        </div>
        <div
          className={`py-5 px-[30px] bg-[#20244B] flex flex-col items-center`}
        >
          <div className="w-[80px] h-[80px] rounded-[50%] bg-[#EBB200] mb-[10px]">
            {ride.car.image && <img src={ride.car.image} alt={ride.car.name} />}
          </div>
          <Caption className="uppercase">{ride.car.name}</Caption>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`rounded-[10px] grid grid-cols-[1fr,240px] overflow-hidden text-[#343331] shadow-[0px_4px_14px_0px_rgba(0,0,0,0.20)]`}
    >
      <div className={"py-5 px-[30px] bg-white flex flex-col justify-center"}>
        <Heading weight="0" level="3" className={`mb-[10px]`}>
          {direction}
        </Heading>
        <Text level="3" className={`text-[#343331]`}>
          {date}
        </Text>
      </div>
      <div className={`py-5 px-[30px] bg-white flex flex-col items-center`}>
        <div className="mb-[10px]">
          {ride.car.image && <img src={ride.car.image} alt={ride.car.name} />}
        </div>
        <Caption level="3" className="uppercase">
          {ride.car.name}
        </Caption>
      </div>
    </div>
  );
};
