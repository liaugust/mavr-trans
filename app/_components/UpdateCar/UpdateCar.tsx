"use client";

import { FC, useCallback, useState } from "react";
import { CarEntity } from "@/app/_storage/modules/cars/core";
import { ManageCar } from "../ManageCar";
import { Caption } from "../Typography";
import { updateCar } from "@/app/_state/cars";
import { WithLang } from "@/app/types";
import { CategoryEntity } from "@/app/_storage/modules/categories/core";

interface UpdateCarProps extends WithLang {
  car: CarEntity;
  categories: CategoryEntity[];
}

export const UpdateCar: FC<UpdateCarProps> = ({ car, categories, lang }) => {
  const [open, setOpen] = useState(false);

  const onClose = useCallback(() => setOpen(false), []);
  const onOpen = useCallback(() => setOpen(true), []);

  const onSubmit = useCallback(
    async (formData: FormData) => {
      await updateCar(car.id, formData);
      setOpen(false);
    },
    [car.id]
  );

  return (
    <>
      {open && (
        <ManageCar
          lang={lang}
          onClose={onClose}
          title="Update car"
          defaultValues={car}
          categories={categories}
          onSubmitHandler={onSubmit}
        />
      )}
      <button
        className={`w-full uppercase bg-[#F6B24B]  flex items-center justify-center`}
        onClick={onOpen}
      >
        <Caption>Update</Caption>
      </button>
    </>
  );
};
