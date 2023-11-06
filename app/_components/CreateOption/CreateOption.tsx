"use client";

import { FC, useCallback, useState } from "react";
import { ManageOption } from "../ManageOption";
import { Button } from "../Button";
import { createOption } from "@/app/_state/options";
import { useStore } from "@/app/store-provider";
import { OptionSchema } from "@/app/_storage/modules/options/core";

interface CreateOptionProps {}

export const CreateOption: FC<CreateOptionProps> = () => {
  const { add } = useStore();
  const [open, setOpen] = useState(false);
  const onClose = useCallback(() => setOpen(false), []);
  const onOpen = useCallback(() => setOpen(true), []);

  const onSubmit = useCallback(
    async (values: OptionSchema) => {
      const option = await createOption(values);
      if (option) add("options", option);
      onClose();
    },
    [onClose, add]
  );

  return (
    <>
      {open && (
        <ManageOption
          onClose={onClose}
          title="Create option"
          onSubmitHandler={onSubmit}
        />
      )}
      <Button className="w-full" onClick={onOpen}>
        Add new
      </Button>
    </>
  );
};
