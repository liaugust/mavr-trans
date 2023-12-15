import { FC } from "react";
import { Heading } from "../Typography";
import { EntityList } from "../EntityList";
import { CreateCar } from "../CreateCar";
import { deleteCar, toggleCarActive } from "@/app/_state/cars";
import { WithLang } from "@/app/types";
import { useTranslation } from "@/app/_i18n";
import { headers } from "next/headers";
import { CarEntity } from "@/app/_storage/modules/cars/core";
import { CategoryEntity } from "@/app/_storage/modules/categories/core";

export const CarsList: FC<WithLang> = async ({ lang }) => {
  const baseHost = headers().get("host");
  const host =
    baseHost === "localhost:3000"
      ? "https://localhost:3000"
      : "https://mavrtrans.com";

  const { t } = await useTranslation();
  const carsResponse = await fetch(`${host}/api/cars`, {
    next: { tags: ["cars"] },
  });
  const cars: CarEntity[] = await carsResponse.json();
  const categoriesResponse = await fetch(`${host}/api/categories`, {
    next: { tags: ["categories"] },
  });
  const categories: CategoryEntity[] = await categoriesResponse.json();

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
        categories={categories}
        onHideEntity={toggleCarActive}
        onDeleteEntity={deleteCar}
      />

      <CreateCar categories={categories} lang={lang} />
    </div>
  );
};
