"use client";

import { useAdminContext } from "@/app/(routes)/[lang]/admin/admin-provider";
import { confirmRide } from "@/app/_state/rides";
import { Status } from "@prisma/client";
import { FC, useCallback, useState } from "react";
import { ConfirmModal } from "../ConfirmModal";

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
  const [open, setOpen] = useState(false);
  const { confirm } = useAdminContext();

  const onConfirm = useCallback(async () => {
    await confirmRide(id);
    confirm(id);
  }, [id, confirm]);

  const onCancel = useCallback(() => {
    setOpen(false);
  }, []);

  const onOpen = useCallback(() => {
    setOpen(true);
  }, []);

  if (status === "waiting") {
    return (
      <>
        {open && (
          <ConfirmModal
            title="Are you sure?"
            onCancel={onCancel}
            onConfirm={onConfirm}
          />
        )}
        <button className="w-full h-full bg-[#96FA94] py-3" onClick={onOpen}>
          {labels[status]}
        </button>
      </>
    );
  }

  return labels[status];
};
