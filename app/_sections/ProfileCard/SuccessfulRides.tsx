"use client";
import { Heading, Title } from "@/app/_components/Typography";
import { useProfile } from "@/app/profile-context";
import { FC } from "react";

export const SuccessfulRides: FC = () => {
  const { active } = useProfile();

  return (
    <div className="pt-5 pb-[30px] px-5 bg-[#EBB200] text-center">
      <Title weight="1" level="4" Component="div" className="mb-2">
        {active.length}
      </Title>

      <Heading weight="0" Component="div" level="3">
        successful trips
      </Heading>
    </div>
  );
};
