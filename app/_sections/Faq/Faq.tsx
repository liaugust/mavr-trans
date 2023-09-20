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
    <div className="pt-16 pb-24">
      <div className="container">
        <div className="text-center mb-16">
          <div className="text-5xl mb-3 font-bold">FAQ</div>
          <div className="text-4xl font-light">Lorem ipsum</div>
        </div>

        <div className="grid grid-flow-row gap-y-5">
          {questions.map((q, i) => (
            <Accordion question={q.question} answer={q.answer} key={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
