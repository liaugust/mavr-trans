import { Caption, Text, Title } from "@/app/_components/Typography";
import { FC } from "react";
import { BookTransfer } from "./BookTransfer";
import { useTranslation } from "@/app/_i18n";
import { getServerSession } from "next-auth";
import { options } from "@/config/options";
import { WithLang } from "@/app/types";

const gradient = {
  position: `before:top-0 before:bottom-0 before:left-0`,
  size: `before:w-full before:h-[680px] lg:before:h-full`,
  base: `before:absolute before:z-10`,
};
const baseSectionClassName = `max-w-[1920px] m-auto pt-24 lg:pt-40 pb-64 lg:pb-44 relative bg-no-repeat`;

const Hero: FC<WithLang> = async ({ lang }) => {
  const { t } = await useTranslation();
  const session = await getServerSession(options);

  return (
    <div
      className={`${baseSectionClassName} ${gradient.base} ${gradient.position} ${gradient.size} hero`}
    >
      <div className="container">
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left text-white relative z-20">
          <Title className="mb-[30px]">
            <Text
              level="3"
              Component="span"
              className="mb-[14px] uppercase subhead w-max m-auto lg:m-0 lg:mb-5 leading-none"
            >
              {t("pages.home.hero.subhead")}
            </Text>
            <Title
              Component="span"
              className="mb-2 lg:mb-[10px] text-primary leading-none"
            >
              {t("pages.home.hero.title")}
            </Title>

            <Title Component="span" weight="1" className="leading-none">
              {t("pages.home.hero.subtitle")}
            </Title>
          </Title>

          <Caption
            weight="0"
            spacing={36}
            className="mb-[60px] max-w-[285px] lg:max-w-[435px] leading-[1.4]"
          >
            {t("pages.home.hero.text")}
          </Caption>

          <BookTransfer isLogged={Boolean(session?.user)} lang={lang} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
