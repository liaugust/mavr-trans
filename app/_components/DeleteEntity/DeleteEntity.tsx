"use client";

import { FC, useCallback, useState } from "react";
import { ConfirmModal } from "../ConfirmModal";

interface DeleteEntityProps {
  entityId: number;
  deleteEntityCb: (entityId: number) => Promise<void>;
}

export const DeleteEntity: FC<DeleteEntityProps> = ({
  entityId,
  deleteEntityCb,
}) => {
  const [open, setOpen] = useState(false);

  const onClose = useCallback(() => setOpen(false), []);
  const onOpen = useCallback(() => setOpen(true), []);

  const onDelete = useCallback(async () => {
    await deleteEntityCb(entityId);

    setOpen(false);
  }, [deleteEntityCb, entityId]);

  return (
    <>
      {open && (
        <ConfirmModal
          onCancel={onClose}
          onConfirm={onDelete}
          title="Are you sure?"
        />
      )}
      <button
        className={`w-full uppercase bg-[#F84949] py-[30px] px-[15px]`}
        onClick={onOpen}
      >
        Delete
      </button>
    </>
  );
};
