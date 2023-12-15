"use client";

import { FC, useCallback, useState } from "react";
import { ManageCategory } from "../ManageCategory";
import { Button } from "../Button";
import { createCategory } from "@/app/_state/categories";
import { WithLang } from "@/app/types";
import { useTranslation } from "@/app/_i18n/client";

export const CreateCategory: FC<WithLang> = ({ lang }) => {
  const { t } = useTranslation(lang);
  const [open, setOpen] = useState(false);
  const onClose = useCallback(() => setOpen(false), []);
  const onOpen = useCallback(() => setOpen(true), []);

  const onSubmit = useCallback(
    async (formData: FormData) => {
      await createCategory(formData);
      onClose();
    },
    [onClose]
  );

  return (
    <>
      {open && (
        <ManageCategory
          lang={lang}
          onClose={onClose}
          title={t("admin.pages.settings.classes.form.title")}
          onSubmitHandler={onSubmit}
        />
      )}
      <Button className="w-full" onClick={onOpen}>
        {t("admin.pages.settings.buttons.add_new")}
      </Button>
    </>
  );
};
