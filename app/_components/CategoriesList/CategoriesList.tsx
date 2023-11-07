"use client";

import { FC, useCallback } from "react";
import { Heading } from "../Typography";
import { EntityList } from "../EntityList";
import { deleteCategory, toggleCategoryActive } from "@/app/_state/categories";
import { CreateCategory } from "../CreateCategory";
import { useStore } from "@/app/(routes)/[lang]/store-provider";
import { useTranslation } from "@/app/_i18n/client";
import { WithLang } from "@/app/types";

interface CategoriesListProps extends WithLang {}

export const CategoriesList: FC<CategoriesListProps> = ({ lang }) => {
  const { t } = useTranslation(lang);
  const { categories, remove, toggle } = useStore();

  const onDeleteCategory = useCallback(
    async (categoryId: number) => {
      await deleteCategory(categoryId);
      remove("categories", categoryId);
    },
    [remove]
  );

  const onToggleCategory = useCallback(
    async (categoryId: number) => {
      await toggleCategoryActive(categoryId);
      toggle("categories", categoryId);
    },
    [toggle]
  );

  return (
    <div className="rounded-[10px] overflow-hidden">
      <div className="bg-black text-white flex items-center justify-center p-[30px]">
        <Heading className="uppercase" weight="2">
          {t("admin.pages.settings.categories.title")}
        </Heading>
      </div>

      <EntityList
        lang={lang}
        kind="categories"
        entities={categories}
        onDeleteEntity={onDeleteCategory}
        onHideEntity={onToggleCategory}
      />

      <CreateCategory lang={lang} />
    </div>
  );
};
