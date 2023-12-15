"use client";

import { FC, useCallback, useState } from "react";
import { ManageOption } from "../ManageOption";
import { Button } from "../Button";
import { createOption } from "@/app/_state/options";
import { OptionSchema } from "@/app/_storage/modules/options/core";
import { WithLang } from "@/app/types";
import { useTranslation } from "@/app/_i18n/client";

interface CreateOptionProps extends WithLang {}

export const CreateOption: FC<CreateOptionProps> = ({ lang }) => {
  const { t } = useTranslation(lang);
  const [open, setOpen] = useState(false);
  const onClose = useCallback(() => setOpen(false), []);
  const onOpen = useCallback(() => setOpen(true), []);

  const onSubmit = useCallback(
    async (values: OptionSchema) => {
      await createOption(values);
      onClose();
    },
    [onClose]
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
