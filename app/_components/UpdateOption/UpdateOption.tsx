"use client";

import { FC, useCallback, useState } from "react";
import { updateOption } from "@/app/_state/options";
import {
  OptionEntity,
  OptionSchema,
} from "@/app/_storage/modules/options/core";
import { ManageOption } from "../ManageOption";
import { Caption } from "../Typography";
import { WithLang } from "@/app/types";

interface UpdateOptionProps extends WithLang {
  option: OptionEntity;
}

export const UpdateOption: FC<UpdateOptionProps> = ({ lang, option }) => {
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
          lang={lang}
          onClose={onClose}
          title="Update option"
          defaultValues={option}
          onSubmitHandler={onSubmit}
        />
      )}
      <button
        className={`w-full uppercase bg-[#F6B24B]  flex items-center justify-center`}
        onClick={onOpen}
      >
        <Caption>Update</Caption>
      </button>
    </>
  );
};
