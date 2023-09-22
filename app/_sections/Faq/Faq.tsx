import { Accordion } from "@/app/_components/Accordion";
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
    <section className="pt-20 lg:pt-16 pb-24">
      <div className="container">
        <h2 className="text-center mb-10 lg:mb-[60px]">
          <span className="block text-[26px] lg:text-[46px] mb-[10px] lg:mb-3 font-bold">
            FAQ
          </span>
          <span className="block text-base lg:text-4xl font-light">
            Lorem ipsum
          </span>
        </h2>

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
