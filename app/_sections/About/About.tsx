import { Caption, Heading, Text } from "@/app/_components/Typography";
import { FC } from "react";
import { Counter } from "./Counter";

const About: FC = () => {
  return (
    <section className="pt-20" id="about">
      <div className="container">
        <div className="flex flex-col lg:flex-row lg:space-x-10 gap-y-28">
          <div className="lg:w-1/2 grid grid-flow-col gap-x-5">
            <Counter
              count="10+"
              src="/about-1.jpg"
              text="Years <br /> experience"
            />
            <Counter
              src="/about-2.jpg"
              count="22K+"
              text="satisfied <br /> customers"
            />
          </div>

          <div className="text-center lg:text-left lg:w-1/2">
            <Text
              weight="0"
              level="3"
              className="uppercase mb-5 text-dark2 subhead leading-none m-auto lg:m-0 lg:mb-5"
            >
              About our company
            </Text>
            <Heading className="mb-[10px] leading-none">
              Lorem ipsum dolor sit amet
            </Heading>
            <Heading weight="0" className="mb-[30px] leading-none">
              Consectetur adipiscing elit
            </Heading>

            <Caption
              weight="0"
              level="1"
              Component="p"
              className="text-dark2 mb-[10px] lg:mb-[14px] leading-[1.4]"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              rutrum ligula ac dolor sagittis pretium. Fusce pharetra tortor a
              quam lacinia blandit. Maecenas ac lobortis sapien. Nam aliquam
              dignissim eros et consequat. Donec pulvinar pulvinar nulla, vel
              aliquam metus blandit at. Nullam ac congue magna.
            </Caption>

            <Caption
              Component="p"
              weight="0"
              level="1"
              className="text-dark2 leading-[1.4]"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              rutrum ligula ac dolor sagittis pretium. Fusce pharetra tortor a
              quam lacinia blandit. Maecenas ac lobortis sapien. Nam aliquam
              dignissim eros et consequat. Donec pulvinar pulvinar nulla, vel
              aliquam metus blandit at. Nullam ac congue magna.
            </Caption>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
