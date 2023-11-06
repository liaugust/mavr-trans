"use client";

import { FC, useCallback } from "react";
import { Caption } from "../Typography";

interface HideEntityProps {
  active: boolean;
  entityId: number;
  hideEntityCb: (entityId: number) => Promise<void>;
}

export const HideEntity: FC<HideEntityProps> = ({
  hideEntityCb,
  entityId,
  active,
}) => {
  const onHideEntity = useCallback(() => {
    hideEntityCb(entityId);
  }, [hideEntityCb, entityId]);

  return (
    <button
      className={`w-full uppercase bg-[#8E8E8E]  flex items-center justify-center`}
      onClick={onHideEntity}
    >
      <Caption>{active ? "Hide" : "Show"}</Caption>
    </button>
  );
};
