"use client";

import { FC, useCallback, useState } from "react";
import { CarEntity } from "@/app/_storage/modules/cars/core";
import { ManageCar } from "../ManageCar";

interface UpdateCarProps {
  car: CarEntity;
}

export const UpdateCar: FC<UpdateCarProps> = ({ car }) => {
  const [open, setOpen] = useState(false);

  const onClose = useCallback(() => setOpen(false), []);
  const onOpen = useCallback(() => setOpen(true), []);

  const onSubmit = useCallback(async (formData: FormData) => {
    // await updateCar(car.id, values);

    setOpen(false);
  }, []);

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
        className={`w-full uppercase bg-[#F6B24B] py-[30px] px-[15px]`}
        onClick={onOpen}
      >
        Update
      </button>
    </>
  );
};
