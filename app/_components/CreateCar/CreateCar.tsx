"use client";

import { FC, useCallback, useState } from "react";
import { ManageCar } from "../ManageCar";
import { Button } from "../Button";
import { createCar } from "@/app/_state/cars";
import { useStore } from "@/app/(routes)/[lang]/store-provider";
import { WithLang } from "@/app/types";
import { useTranslation } from "@/app/_i18n/client";

interface CreateCarProps extends WithLang {}

export const CreateCar: FC<CreateCarProps> = ({ lang }) => {
  const { add } = useStore();
  const { t } = useTranslation(lang);
  const [open, setOpen] = useState(false);
  const onClose = useCallback(() => setOpen(false), []);
  const onOpen = useCallback(() => setOpen(true), []);

  const onSubmit = useCallback(
    async (formData: FormData) => {
      const car = await createCar(formData);
      if (car) add("cars", car);
      onClose();
    },
    [onClose, add]
  );

  return (
    <>
      {open && (
        <ManageCar
          lang={lang}
          onClose={onClose}
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
