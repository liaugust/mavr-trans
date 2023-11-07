"use client";

import { FC, useCallback } from "react";
import { Heading } from "../Typography";
import { EntityList } from "../EntityList";
import { CreateCar } from "../CreateCar";
import { useStore } from "@/app/(routes)/[lang]/store-provider";
import { deleteCar, toggleCarActive } from "@/app/_state/cars";
import { WithLang } from "@/app/types";
import { useTranslation } from "@/app/_i18n/client";

export const CarsList: FC<WithLang> = ({ lang }) => {
  const { t } = useTranslation(lang);
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
          {t("admin.pages.settings.cars.title")}
        </Heading>
      </div>

      <EntityList
        lang={lang}
        kind="cars"
        entities={cars}
        onHideEntity={onToggleCar}
        onDeleteEntity={onDeleteCar}
      />

      <CreateCar lang={lang} />
    </div>
  );
};
