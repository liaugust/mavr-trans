import { Heading, Title } from "@/app/_components/Typography";
import { FC } from "react";

type MessageType = "success" | "failure";

interface MessageStepProps {
  type: MessageType;
}

const content = {
  success: {
    text: "Your application has been processed and a manager will contact you soon.",
    title: "Confirmed",
  },
  failure: {
    text: "We were unable to process your request. Please try again later.",
    title: "An error has occurred",
  },
};

export const MessageStep: FC<MessageStepProps> = ({ type }) => {
  return (
    <>
      <Title
        level="2.1"
        weight="4"
        className="capitalize text-center mb-10 md:mb-[60px]"
      >
        {content[type].title}
      </Title>

      <Heading
        level="3.1"
        weight="1"
        className="text-primary p-[30px] rounded-md bg-[#121420] md:max-w-[560px] mx-auto text-center mb-10"
      >
        {content[type].text}
      </Heading>
    </>
  );
};
