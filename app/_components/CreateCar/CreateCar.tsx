"use client";

import { FC, useCallback, useState } from "react";
import { ManageCar } from "../ManageCar";
import { Button } from "../Button";
import { createCar } from "@/app/_state/cars";
import { useStore } from "@/app/store-provider";

interface CreateCarProps {}

export const CreateCar: FC<CreateCarProps> = () => {
  const { add } = useStore();
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
          onClose={onClose}
          title="Create car"
          onSubmitHandler={onSubmit}
        />
      )}
      <Button className="w-full" onClick={onOpen}>
        Add new
      </Button>
    </>
  );
};
