import { FC } from "react";

const About: FC = () => {
  return (
    <div className="pt-20">
      <div className="container">
        <div className="flex flex-col lg:flex-row lg:space-x-10 gap-y-28">
          <div className="lg:w-1/2 grid grid-flow-col gap-x-5">
            <div className="h-52 lg:h-72 relative">
              <img
                className="w-full h-full object-cover"
                src="/about-1.jpg"
                alt=""
              />

              <div className="absolute bottom-0 left-0 translate-y-1/2 bg-[#121420] px-3 py-4">
                <div className="text-primary text-3xl lg:text-[44px] font-bold">
                  10+
                </div>
                <div className="text-white text-sm lg:text-lg">
                  Years <br /> experience
                </div>
              </div>
            </div>
            <div className="h-52 lg:h-72 relative">
              <img
                className="w-full h-full object-cover"
                src="/about-2.jpg"
                alt=""
              />

              <div className="absolute bottom-0 left-0 translate-y-1/2 bg-[#121420] px-3 py-4">
                <div className="text-primary text-3xl lg:text-[44px] font-bold">
                  22K+
                </div>
                <div className="text-white text-sm lg:text-lg">
                  satisfied <br /> customers
                </div>
              </div>
            </div>
          </div>

          <div className="text-center lg:text-left lg:w-1/2">
            <div className="uppercase text-sm lg:text-base mb-5 text-dark2">
              About our company
            </div>
            <div className="text-xl lg:text-[25px] mb-[10px] font-bold">
              Lorem ipsum dolor sit amet
            </div>
            <div className="text-xl lg:text-[25px] font-light mb-[30px]">
              Consectetur adipiscing elit
            </div>

            <p className="text-dark2 text-xs lg:text-sm mb-[10px] lg:mb-[14px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              rutrum ligula ac dolor sagittis pretium. Fusce pharetra tortor a
              quam lacinia blandit. Maecenas ac lobortis sapien. Nam aliquam
              dignissim eros et consequat. Donec pulvinar pulvinar nulla, vel
              aliquam metus blandit at. Nullam ac congue magna.
            </p>

            <p className="text-dark2 text-xs lg:text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              rutrum ligula ac dolor sagittis pretium. Fusce pharetra tortor a
              quam lacinia blandit. Maecenas ac lobortis sapien. Nam aliquam
              dignissim eros et consequat. Donec pulvinar pulvinar nulla, vel
              aliquam metus blandit at. Nullam ac congue magna.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
