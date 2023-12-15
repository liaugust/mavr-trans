"use client";

import { FC, useCallback, useState } from "react";
import { ManageCar } from "../ManageCar";
import { Button } from "../Button";
import { createCar } from "@/app/_state/cars";
import { WithLang } from "@/app/types";
import { useTranslation } from "@/app/_i18n/client";
import { CategoryEntity } from "@/app/_storage/modules/categories/core";

interface CreateCarProps extends WithLang {
  categories: CategoryEntity[];
}

export const CreateCar: FC<CreateCarProps> = ({ lang, categories }) => {
  const { t } = useTranslation(lang);
  const [open, setOpen] = useState(false);
  const onClose = useCallback(() => setOpen(false), []);
  const onOpen = useCallback(() => setOpen(true), []);

  const onSubmit = useCallback(
    async (formData: FormData) => {
      await createCar(formData);
      onClose();
    },
    [onClose]
  );

  return (
    <>
      {open && (
        <ManageCar
          lang={lang}
          onClose={onClose}
          categories={categories}
          title={t("admin.pages.settings.cars.form.title")}
          onSubmitHandler={onSubmit}
        />
      )}
      <Button className="w-full" onClick={onOpen}>
        {t("admin.pages.settings.buttons.add_new")}
      </Button>
    </>
  );
};
