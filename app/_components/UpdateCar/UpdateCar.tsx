"use client";

import { FC, useCallback, useState } from "react";
import { CarEntity } from "@/app/_storage/modules/cars/core";
import { ManageCar } from "../ManageCar";
import { Caption } from "../Typography";
import { updateCar } from "@/app/_state/cars";
import { useStore } from "@/app/(routes)/[lang]/store-provider";

interface UpdateCarProps {
  car: CarEntity;
}

export const UpdateCar: FC<UpdateCarProps> = ({ car }) => {
  const { update } = useStore();
  const [open, setOpen] = useState(false);

  const onClose = useCallback(() => setOpen(false), []);
  const onOpen = useCallback(() => setOpen(true), []);

  const onSubmit = useCallback(
    async (formData: FormData) => {
      const newCar = await updateCar(car.id, formData);
      if (newCar) {
        update("cars", newCar);
        setOpen(false);
      }
    },
    [car.id, update]
  );

  return (
    <>
      {open && (
        <ManageCar
          onClose={onClose}
          title="Update car"
          defaultValues={car}
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
