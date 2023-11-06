import { Accordion } from "@/app/_components/Accordion";
import { Title } from "@/app/_components/Typography";
import { FC } from "react";

const questions = [
  {
    question: "What are the rules for using the service?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur rutrum ligula ac dolor sagittis pretium. Fusce pharetra tortor a quam lacinia blandit. Maecenas ac lobortis sapien. Nam aliquam dignissim eros et consequat. Donec pulvinar pulvinar nulla, vel aliquam metus blandit at. Nullam ac congue magna.",
  },
  {
    question: "What are the rules for using the service?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur rutrum ligula ac dolor sagittis pretium. Fusce pharetra tortor a quam lacinia blandit. Maecenas ac lobortis sapien. Nam aliquam dignissim eros et consequat. Donec pulvinar pulvinar nulla, vel aliquam metus blandit at. Nullam ac congue magna.",
  },
];

const Faq: FC = () => {
  return (
    <section className="pt-20 lg:pt-16 pb-24" id="faq">
      <div className="container">
        <Title
          level="2.1"
          className="text-center text-[#343331] mb-10 lg:mb-[60px]"
        >
          FAQ
          <Title level="4" weight="0" Component="span" className="block">
            Lorem ipsum
          </Title>
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
