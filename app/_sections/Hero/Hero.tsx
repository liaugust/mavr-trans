import { Button, ButtonVariant } from "@/app/_components/Button";
import { FC } from "react";

const gradient = {
  position: `before:top-0 before:bottom-0 before:left-0`,
  color: `before:bg-[linear-gradient(#1D1D1F_44.63%,rgba(29,29,31,0.81)_63.44%,rgba(15,15,15,0.29)_85.43%,rgba(29,29,31,0.00)_96.08%)] lg:before:bg-[linear-gradient(90deg,#1D1D1F_44.63%,rgba(29,29,31,0.81)_63.44%,rgba(15,15,15,0.29)_85.43%,rgba(29,29,31,0.00)_96.08%)]`,
  size: `before:w-full before:h-[680px] lg:before:h-full`,
  base: `before:absolute before:z-10`,
};
const className = `pt-24 lg:pt-40 pb-64 lg:pb-44 relative bg-[url('/hero.jpg')] bg-no-repeat bg-[right_bottom] lg:bg-center lg:bg-cover`;

const Hero: FC = () => {
  return (
    <div
      className={`${className} ${gradient.base} ${gradient.position} ${gradient.color} ${gradient.size}`}
    >
      <div className="container">
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left text-white relative z-20">
          <div className="mb-[14px] lg:mb-5 text-sm lg:text-base uppercase">
            Fast car delivery
          </div>
          <div className="mb-2 lg:mb-[10px] text-3xl text-primary lg:text-5xl">
            The best way to
          </div>
          <div className="mb-[30px] text-3xl lg:text-5xl">
            Relax while traveling
          </div>
          <div className="mb-[60px] max-w-[285px] lg:max-w-[435px] text-[10px] lg:text-xs">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            rutrum ligula ac dolor sagittis pretium. Fusce pharetra tortor a
            quam lacinia blandit. Maecenas ac lobortis sapien. Nam aliquam
            dignissim eros et consequat. Donec pulvinar pulvinar nulla, vel
            aliquam metus blandit at. Nullam ac congue magna.
          </div>
          <Button variant={ButtonVariant.Filled}>Book a transfer</Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
