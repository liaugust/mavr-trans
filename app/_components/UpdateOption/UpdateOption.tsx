"use client";

import { FC, useCallback, useState } from "react";
import { updateOption } from "@/app/_state/options";
import {
  OptionEntity,
  OptionSchema,
} from "@/app/_storage/modules/options/core";
import { ManageOption } from "../ManageOption";

interface UpdateOptionProps {
  option: OptionEntity;
}

export const UpdateOption: FC<UpdateOptionProps> = ({ option }) => {
  const [open, setOpen] = useState(false);

  const onClose = useCallback(() => setOpen(false), []);
  const onOpen = useCallback(() => setOpen(true), []);

  const onSubmit = useCallback(
    async (values: OptionSchema) => {
      await updateOption(option.id, values);

      setOpen(false);
    },
    [option]
  );

  return (
    <>
      {open && (
        <ManageOption
          onClose={onClose}
          title="Update option"
          defaultValues={option}
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
