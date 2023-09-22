import { FC } from "react";

interface AccordionProps {
  question: string;
  answer: string;
}

const Accordion: FC<AccordionProps> = ({ question, answer }) => {
  return (
    <details className="group text-dark2">
      <summary className="group-open:text-primary group-open:bg-[#121420] transition-colors flex justify-between items-center font-medium cursor-pointer list-none bg-white shadow-[0_4px_14px_0_rgba(0,0,0,0.2)] py-5 px-3 md:p-5 md:pl-8 md:pr-12">
        <h3 className="text-sm md:text-2xl w-40 md:w-full">{question}</h3>

        <span className="transition group-open:rotate-90">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-4 md:w-6 md:h-11"
            viewBox="0 0 25 46"
            // height="46"
            fill="none"
            // width="25"
          >
            <path
              d="M0.5 43.4L2.54878 45.5L24.5 23L2.54878 0.5L0.499998 2.6L20.4024 23L0.5 43.4Z"
              fill="currentColor"
            />
          </svg>
        </span>
      </summary>

      <p className="py-5 px-3 md:p-8 text-sm">{answer}</p>
    </details>
  );
};

export default Accordion;
