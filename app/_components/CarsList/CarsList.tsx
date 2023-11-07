"use client";

import { FC, useCallback } from "react";
import { Heading } from "../Typography";
import { EntityList } from "../EntityList";
import { CreateCar } from "../CreateCar";
import { useStore } from "@/app/(routes)/[lang]/store-provider";
import { deleteCar, toggleCarActive } from "@/app/_state/cars";

export const CarsList: FC = () => {
  const { cars, remove, toggle } = useStore();

  const onDeleteCar = useCallback(
    async (id: number) => {
      await deleteCar(id);
      remove("cars", id);
    },
    [remove]
  );

  const onToggleCar = useCallback(
    async (id: number) => {
      await toggleCarActive(id);
      toggle("cars", id);
    },
    [toggle]
  );

  return (
    <div className="rounded-[10px] overflow-hidden">
      <div className="bg-black text-white flex items-center justify-center p-[30px]">
        <Heading className="uppercase" weight="2">
          Cars
        </Heading>
      </div>

      <EntityList
        kind="cars"
        entities={cars}
        onHideEntity={onToggleCar}
        onDeleteEntity={onDeleteCar}
      />

      <CreateCar />
    </div>
  );
};
