"use client";

import { FC, useCallback } from "react";

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
      className={`w-full uppercase bg-[#8E8E8E] py-[30px] px-[15px]`}
      onClick={onHideEntity}
    >
      {active ? "Hide" : "Show"}
    </button>
  );
};
