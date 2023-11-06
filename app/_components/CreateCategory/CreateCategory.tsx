"use client";

import { FC, useCallback, useState } from "react";
import { ManageCategory } from "../ManageCategory";
import { Button } from "../Button";
import { createCategory } from "@/app/_state/categories";
import { useStore } from "@/app/store-provider";

export const CreateCategory: FC = ({}) => {
  const { add } = useStore();
  const [open, setOpen] = useState(false);
  const onClose = useCallback(() => setOpen(false), []);
  const onOpen = useCallback(() => setOpen(true), []);

  const onSubmit = useCallback(
    async (formData: FormData) => {
      const category = await createCategory(formData);
      if (category) add("categories", category);
      onClose();
    },
    [onClose, add]
  );

  return (
    <>
      {open && (
        <ManageCategory
          onClose={onClose}
          title="Create category"
          onSubmitHandler={onSubmit}
        />
      )}
      <Button className="w-full" onClick={onOpen}>
        Add new
      </Button>
    </>
  );
};
