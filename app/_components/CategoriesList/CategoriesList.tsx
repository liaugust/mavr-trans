import { FC } from "react";
import { Heading } from "../Typography";
import { EntityList } from "../EntityList";
import { deleteCategory, toggleCategoryActive } from "@/app/_state/categories";
import { CreateCategory } from "../CreateCategory";
import { useTranslation } from "@/app/_i18n";
import { WithLang } from "@/app/types";
import { headers } from "next/headers";
import { CategoryEntity } from "@/app/_storage/modules/categories/core";

interface CategoriesListProps extends WithLang {}

export const CategoriesList: FC<CategoriesListProps> = async ({ lang }) => {
  const baseHost = headers().get("host");
  const host =
    baseHost === "localhost:3000"
      ? "https://localhost:3000"
      : "https://www.mavrtrans.com";

  const url = `${host}/api/categories`;

  const { t } = await useTranslation();
  const response = await fetch(url, {
    next: { tags: ["categories"] },
  });
  const categories: CategoryEntity[] = await response.json();

  return (
    <div className="rounded-[10px] overflow-hidden">
      <div className="bg-black text-white flex items-center justify-center p-[30px]">
        <Heading className="uppercase" weight="2">
          {t("admin.pages.settings.classes.title")}
        </Heading>
      </div>

      <EntityList
        lang={lang}
        categories={[]}
        kind="categories"
        entities={categories}
        onDeleteEntity={deleteCategory}
        onHideEntity={toggleCategoryActive}
      />

      <CreateCategory lang={lang} />
    </div>
  );
};
