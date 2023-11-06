import { RideEntity } from "@/app/_storage/modules/rides/core";
import { FC } from "react";
import { Confirm } from "./Confirm";

interface RideProps {
  ride: RideEntity;
}

export const Ride: FC<RideProps> = ({ ride }) => {
  const direction = ride.allWaypoints.map((w) => w.shortAddress).join(" - ");
  const options = ride.options.join(", ");

  return (
    <tr className="text-center text-[12px]">
      <td className="py-[10px] px-[6px]">
        {ride.createdAt.toLocaleDateString()}
      </td>
      <td className="py-[10px] px-[6px]">{ride.user.name}</td>
      <td className="py-[10px] px-[6px]">{ride.user.phone}</td>
      <td className="py-[10px] px-[6px]">{direction}</td>
      <td className="py-[10px] px-[6px]">{ride.car.name}</td>
      <td className="py-[10px] px-[6px]">{options}</td>
      <td className="py-[10px] px-[6px]">{ride.total}</td>
      <td className="">
        <Confirm id={ride.id} status={ride.status} />
      </td>
    </tr>
  );
};
