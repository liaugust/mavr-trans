"use client";

import { FC, useCallback, useState } from "react";
import { ManageCategory } from "../ManageCategory";
import { CategoryEntity } from "@/app/_storage/modules/categories/core";
import { Caption } from "../Typography";
import { WithLang } from "@/app/types";
import { updateCategory } from "@/app/_state/categories";

interface UpdateCategoryProps extends WithLang {
  category: CategoryEntity;
}

export const UpdateCategory: FC<UpdateCategoryProps> = ({ lang, category }) => {
  const [open, setOpen] = useState(false);

  const onClose = useCallback(() => setOpen(false), []);
  const onOpen = useCallback(() => setOpen(true), []);

  const onSubmit = useCallback(
    async (formData: FormData) => {
      await updateCategory(category.id, formData);
      setOpen(false);
    },
    [category.id]
  );

  return (
    <>
      {open && (
        <ManageCategory
          lang={lang}
          onClose={onClose}
          title="Create category"
          defaultValues={category}
          onSubmitHandler={onSubmit}
        />
      )}
      <button
        className={`w-full uppercase bg-[#F6B24B] flex items-center justify-center`}
        onClick={onOpen}
      >
        <Caption>Update</Caption>
      </button>
    </>
  );
};
