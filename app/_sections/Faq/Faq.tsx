import { Accordion } from "@/app/_components/Accordion";
import { Title } from "@/app/_components/Typography";
import { useTranslation } from "@/app/_i18n";
import { FC } from "react";

type Question = {
  question: string;
  answer: string;
};

const Faq: FC = async () => {
  const { t } = await useTranslation();

  const questions = t("pages.home.faq.questions", {
    returnObjects: true,
  }) as Question[];

  return (
    <section className="pt-20 lg:pt-16 pb-24" id="faq">
      <div className="container">
        <Title
          level="2.1"
          className="text-center text-[#343331] mb-10 lg:mb-[60px]"
        >
          {t("pages.home.faq.title")}
          {/* <Title level="4" weight="0" Component="span" className="block">
            Lorem ipsum
          </Title> */}
        </Title>

        <ul className="grid grid-flow-row gap-y-5">
          {questions.map((q, i) => (
            <li key={i}>
              <Accordion question={q.question} answer={q.answer} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Faq;
