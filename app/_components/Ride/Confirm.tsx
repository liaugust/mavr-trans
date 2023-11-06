"use client";

import { confirmRide } from "@/app/_state/rides";
import { Status } from "@prisma/client";
import { FC, useCallback } from "react";

interface ConfirmProps {
  status: Status;
  id: number;
}

const labels: Record<Status, string> = {
  waiting: "Confirm",
  active: "Active",
  done: "Done",
};

export const Confirm: FC<ConfirmProps> = ({ status, id }) => {
  const onConfirm = useCallback(async () => {
    await confirmRide(id);
  }, [id]);

  if (status === "waiting") {
    return (
      <button className="w-full h-full bg-[#96FA94] py-3" onClick={onConfirm}>
        {labels[status]}
      </button>
    );
  }

  return labels[status];
};
