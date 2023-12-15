// "use client";
import { FC } from "react";
import { Heading } from "../Typography";
import { EntityList } from "../EntityList";
import { deleteOption, toggleOptionActive } from "@/app/_state/options";
import { CreateOption } from "../CreateOption";
import { WithLang } from "@/app/types";
import { useTranslation } from "@/app/_i18n";
import { headers } from "next/headers";
import { OptionEntity } from "@/app/_storage/modules/options/core";
// import { useTranslation } from "@/app/_i18n/client";

export const OptionsList: FC<WithLang> = async ({ lang }) => {
  const baseHost = headers().get("host");
  const host =
    baseHost === "localhost:3000"
      ? "https://localhost:3000"
      : "https://mavrtrans.com";

  const url = `${host}/api/options`;

  const { t } = await useTranslation();
  const response = await fetch(url, {
    next: { tags: ["options"] },
  });
  const options: OptionEntity[] = await response.json();

  return (
    <div className="rounded-[10px] overflow-hidden">
      <div className="bg-black text-white flex items-center justify-center p-[30px]">
        <Heading className="uppercase" weight="2">
          {t("admin.pages.settings.options.title")}
        </Heading>
      </div>

      <EntityList
        lang={lang}
        kind="options"
        entities={options}
        categories={[]}
        onDeleteEntity={deleteOption}
        onHideEntity={toggleOptionActive}
      />

      <CreateOption lang={lang} />
    </div>
  );
};
