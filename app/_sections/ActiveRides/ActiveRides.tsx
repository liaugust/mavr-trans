"use client";
import { RideCard } from "@/app/_components/RideCard";
import { Text, Title } from "@/app/_components/Typography";
import { useProfile } from "@/app/profile-context";
import { FC } from "react";

interface ActiveRidesProps {
  className?: string;
}

export const ActiveRides: FC<ActiveRidesProps> = ({ className }) => {
  const { active } = useProfile();

  return (
    <div className={`mb-10 ${className}`}>
      <Title weight="0" level="5" className="mb-5">
        Active transfer
      </Title>

      {active.length > 0 ? (
        <ul className="grid gap-y-5">
          {active.map((ride) => (
            <li key={ride.id}>
              <RideCard active ride={ride} />
            </li>
          ))}
        </ul>
      ) : (
        <Text>No active transfers yet</Text>
      )}
    </div>
  );
};
