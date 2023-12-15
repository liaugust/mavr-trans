"use client";

import { Status } from "@prisma/client";
import { FC, useCallback, useState } from "react";
import { ConfirmModal } from "../ConfirmModal";
import {
  confirmRideAction,
  rejectRideAction,
} from "@/app/[lang]/admin/dashboard/leads/actions";

interface ConfirmProps {
  departureAt: null | Date;
  status: Status;
  id: number;
}

const labels: Record<Status, string> = {
  waiting: "Confirm",
  active: "Active",
  done: "Done",
};

export const Confirm: FC<ConfirmProps> = ({ status, id, departureAt }) => {
  const [open, setOpen] = useState<"reject" | "confirm" | null>(null);

  const onConfirm = useCallback(async () => {
    await confirmRideAction(id);
    setOpen(null);
  }, [id]);

  const onReject = useCallback(async () => {
    await rejectRideAction(id);
    setOpen(null);
  }, [id]);

  const onCancel = useCallback(() => {
    setOpen(null);
  }, []);

  const onConfirmOpen = useCallback(() => {
    setOpen("confirm");
  }, []);

  const onRejectOpen = useCallback(() => {
    setOpen("reject");
  }, []);

  if (status === "waiting") {
    return (
      <>
        {open && (
          <ConfirmModal
            title={
              open === "confirm"
                ? "Are you sure you want to confirm ride?"
                : "Are you sure you want to reject ride?"
            }
            onCancel={onCancel}
            onConfirm={open === "confirm" ? onConfirm : onReject}
          />
        )}
        <button
          className="w-full h-full bg-[#96FA94] py-3"
          onClick={onConfirmOpen}
        >
          Confirm
        </button>
        <button
          className="w-full h-full bg-[#e55858] py-3 text-white"
          onClick={onRejectOpen}
        >
          Reject
        </button>
      </>
    );
  }

  if (departureAt && new Date(departureAt).getTime() < Date.now()) {
    return labels.done;
  }

  return labels[status];
};
