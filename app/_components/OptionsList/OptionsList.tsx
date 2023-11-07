"use client";
import { FC, useCallback } from "react";
import { Heading } from "../Typography";
import { EntityList } from "../EntityList";
import { deleteOption, toggleOptionActive } from "@/app/_state/options";
import { CreateOption } from "../CreateOption";
import { useStore } from "@/app/(routes)/[lang]/store-provider";

export const OptionsList: FC = () => {
  const { options, remove, toggle } = useStore();

  const onDeleteOption = useCallback(
    async (id: number) => {
      await deleteOption(id);
      remove("options", id);
    },
    [remove]
  );

  const onToggleOption = useCallback(
    async (id: number) => {
      await toggleOptionActive(id);
      toggle("options", id);
    },
    [toggle]
  );

  return (
    <div className="rounded-[10px] overflow-hidden">
      <div className="bg-black text-white flex items-center justify-center p-[30px]">
        <Heading className="uppercase" weight="2">
          Options
        </Heading>
      </div>

      <EntityList
        kind="options"
        entities={options}
        onDeleteEntity={onDeleteOption}
        onHideEntity={onToggleOption}
      />

      <CreateOption />
    </div>
  );
};
