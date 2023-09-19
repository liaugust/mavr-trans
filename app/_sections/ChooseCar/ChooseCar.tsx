import { Button, ButtonVariant } from "@/app/_components/Button";
import { FC } from "react";

const ChooseCar: FC = () => {
  return (
    <div className="pt-16 pb-20 bg-[#E2E2E2]">
      <div className="container">
        <div className="text-center mb-16">
          <div className="text-5xl mb-3 font-bold">Choose your way</div>
          <div className="text-4xl font-light">Lorem ipsum</div>
        </div>

        {/* <div className="md:flex md:flex-wrap md:justify-evenly lg:justify-between"> */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5 md:gap-7 lg:gap-10">
          {/* <div className="md:w-1/2 lg:w-1/3 shadow-[0_4px_14px_0_rgba(0,0,0,0.2)] px-5 pt-5 pb-10 text-center"> */}
          <div className="shadow-[0_4px_14px_0_rgba(0,0,0,0.2)] px-5 pt-5 pb-10 text-center">
            <div className="object-cover">
              <img src="" alt="" />
            </div>

            <div className="text-sm text-bold mb-8 uppercase">
              Mercedes-benz sprinter
            </div>
            <Button variant={ButtonVariant.Filled} className="w-full">
              Book now
            </Button>
          </div>
          {/* <div className="md:w-1/2 lg:w-1/3 shadow-[0_4px_14px_0_rgba(0,0,0,0.2)] px-5 pt-5 pb-10 text-center"> */}
          <div className="shadow-[0_4px_14px_0_rgba(0,0,0,0.2)] px-5 pt-5 pb-10 text-center">
            <div className="object-cover">
              <img src="" alt="" />
            </div>

            <div className="text-sm text-bold mb-8 uppercase">
              Mercedes-benz sprinter
            </div>
            <Button variant={ButtonVariant.Filled} className="w-full">
              Book now
            </Button>
          </div>
          {/* <div className="md:w-1/2 lg:w-1/3 shadow-[0_4px_14px_0_rgba(0,0,0,0.2)] px-5 pt-5 pb-10 text-center"> */}
          <div className="shadow-[0_4px_14px_0_rgba(0,0,0,0.2)] px-5 pt-5 pb-10 text-center">
            <div className="object-cover">
              <img src="" alt="" />
            </div>

            <div className="text-sm text-bold mb-8 uppercase">
              Mercedes-benz sprinter
            </div>
            <Button variant={ButtonVariant.Filled} className="w-full">
              Book now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseCar;
