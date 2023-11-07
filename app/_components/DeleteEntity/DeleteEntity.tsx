"use client";

import { FC, useCallback, useState } from "react";
import { ConfirmModal } from "../ConfirmModal";
import { Caption } from "../Typography";
import { useTranslation } from "@/app/_i18n/client";
import { WithLang } from "@/app/types";

interface DeleteEntityProps extends WithLang {
  entityId: number;
  deleteEntityCb: (entityId: number) => Promise<void>;
}

export const DeleteEntity: FC<DeleteEntityProps> = ({
  lang,
  entityId,
  deleteEntityCb,
}) => {
  const { t } = useTranslation(lang);
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
        className={`w-full uppercase bg-[#F84949]  flex items-center justify-center`}
        onClick={onOpen}
      >
        <Caption>{t("admin.pages.settings.buttons.delete")}</Caption>
      </button>
    </>
  );
};
