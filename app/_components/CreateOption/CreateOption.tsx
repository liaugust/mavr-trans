"use client";

import { FC, useCallback, useState } from "react";
import { ManageOption } from "../ManageOption";
import { Button } from "../Button";
import { createOption } from "@/app/_state/options";
import { useStore } from "@/app/(routes)/[lang]/store-provider";
import { OptionSchema } from "@/app/_storage/modules/options/core";
import { WithLang } from "@/app/types";
import { useTranslation } from "@/app/_i18n/client";

interface CreateOptionProps extends WithLang {}

export const CreateOption: FC<CreateOptionProps> = ({ lang }) => {
  const { add } = useStore();
  const { t } = useTranslation(lang);
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
          lang={lang}
          onClose={onClose}
          title={t("admin.pages.settings.options.form.title")}
          onSubmitHandler={onSubmit}
        />
      )}
      <Button className="w-full" onClick={onOpen}>
        {t("admin.pages.settings.buttons.add_new")}
      </Button>
    </>
  );
};
