import { Heading, Title } from "@/app/_components/Typography";
import { useTranslation } from "@/app/_i18n/client";
import { WithLang } from "@/app/types";
import { FC } from "react";

type MessageType = "success" | "failure";

interface MessageStepProps extends WithLang {
  type: MessageType;
}

const content = {
  success: {
    text: "pages.trip.confirmation.title",
    title: "pages.trip.confirmation.text",
  },
  failure: {
    text: "pages.trip.error.title",
    title: "pages.trip.error.title",
  },
};

export const MessageStep: FC<MessageStepProps> = ({ lang, type }) => {
  const { t } = useTranslation(lang);
  return (
    <>
      <Title
        level="2.1"
        weight="4"
        className="capitalize text-center mb-10 md:mb-[60px]"
      >
        {t(content[type].title)}
      </Title>

      <Heading
        level="3.1"
        weight="1"
        className="text-primary p-[30px] rounded-md bg-[#121420] md:max-w-[560px] mx-auto text-center mb-10"
      >
        {t(content[type].text)}
      </Heading>
    </>
  );
};
