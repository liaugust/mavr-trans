"use client";

import { FC, useCallback } from "react";
import { Caption } from "../Typography";
import { useTranslation } from "@/app/_i18n/client";
import { WithLang } from "@/app/types";

interface HideEntityProps extends WithLang {
  active: boolean;
  entityId: number;
  hideEntityCb: (entityId: number) => Promise<void>;
}

export const HideEntity: FC<HideEntityProps> = ({
  lang,
  hideEntityCb,
  entityId,
  active,
}) => {
  const { t } = useTranslation(lang);
  const onHideEntity = useCallback(() => {
    hideEntityCb(entityId);
  }, [hideEntityCb, entityId]);

  return (
    <button
      className={`w-full uppercase bg-[#8E8E8E]  flex items-center justify-center`}
      onClick={onHideEntity}
    >
      <Caption>
        {active
          ? t("admin.pages.settings.buttons.hide")
          : t("admin.pages.settings.buttons.show")}
      </Caption>
    </button>
  );
};
