"use client";
import { RideCard } from "@/app/_components/RideCard";
import { Text, Title } from "@/app/_components/Typography";
import { useProfile } from "@/app/profile-context";
import { FC } from "react";

interface RidesHistoryProps {
  className?: string;
}

export const RidesHistory: FC<RidesHistoryProps> = ({ className }) => {
  const { inactive } = useProfile();

  return (
    <div className={className}>
      <Title weight="0" level="5" className="mb-5">
        History of orders
      </Title>

      {inactive?.length > 0 ? (
        <ul className="grid gap-y-5">
          {inactive?.map((ride) => (
            <li key={ride.id}>
              <RideCard ride={ride} />
            </li>
          ))}
        </ul>
      ) : (
        <Text>No active transfers yet</Text>
      )}
    </div>
  );
};
