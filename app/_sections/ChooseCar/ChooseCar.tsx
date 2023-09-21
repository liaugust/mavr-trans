"use client";

import { Button, ButtonVariant } from "@/app/_components/Button";
import { useCars } from "@/app/_state";
import { getCars } from "@/app/_state/api";
import { FC, useEffect } from "react";

const ChooseCar: FC = () => {
  const cars = useCars();

  useEffect(() => {
    getCars();
  }, []);

  return (
    <div className="pt-16 pb-20 bg-[#E2E2E2]">
      <div className="container">
        <div className="text-center mb-16">
          <div className="text-5xl mb-3 font-bold">Choose your way</div>
          <div className="text-4xl font-light">Lorem ipsum</div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5 md:gap-7 lg:gap-10">
          {cars.map((car) => (
            <div
              key={car.id}
              className="shadow-[0_4px_14px_0_rgba(0,0,0,0.2)] px-5 pt-5 pb-10 text-center bg-white"
            >
              {/* <div className="h-44 w-72 m-auto mb-5"> */}
              <div className="h-44 w-full m-auto mb-5">
                <img
                  className="w-full h-full object-contain"
                  src="/choose-car.png"
                  alt=""
                />
              </div>

              <div className="text-sm text-bold mb-8 uppercase">{car.name}</div>
              <Button variant={ButtonVariant.Filled} className="w-full">
                Book now
              </Button>
            </div>
          ))}
          <div className="shadow-[0_4px_14px_0_rgba(0,0,0,0.2)] px-5 pt-5 pb-10 text-center bg-white">
            {/* <div className="h-44 w-72 m-auto mb-5"> */}
            <div className="h-44 w-full m-auto mb-5">
              <img
                className="w-full h-full object-contain"
                src="/choose-car.png"
                alt=""
              />
            </div>

            <div className="text-sm text-bold mb-8 uppercase">
              Mercedes-benz sprinter
            </div>
            <Button variant={ButtonVariant.Filled} className="w-full">
              Book now
            </Button>
          </div>
          <div className="shadow-[0_4px_14px_0_rgba(0,0,0,0.2)] px-5 pt-5 pb-10 text-center bg-white">
            {/* <div className="h-44 w-72 m-auto mb-5"> */}
            <div className="h-44 w-full m-auto mb-5">
              <img
                className="w-full h-full object-contain"
                src="/choose-car.png"
                alt=""
              />
            </div>

            <div className="text-sm text-bold mb-8 uppercase">
              Mercedes-benz sprinter
            </div>
            <Button variant={ButtonVariant.Filled} className="w-full">
              Book now
            </Button>
          </div>
          <div className="shadow-[0_4px_14px_0_rgba(0,0,0,0.2)] px-5 pt-5 pb-10 text-center bg-white">
            {/* <div className="h-44 w-72 m-auto mb-5"> */}
            <div className="h-44 w-full m-auto mb-5">
              <img
                className="w-full h-full object-contain"
                src="/choose-car.png"
                alt=""
              />
            </div>

            <div className="text-sm text-bold mb-8 uppercase">
              Mercedes-benz sprinter
            </div>
            <Button variant={ButtonVariant.Filled} className="w-full">
              Book now
            </Button>
          </div>
          <div className="shadow-[0_4px_14px_0_rgba(0,0,0,0.2)] px-5 pt-5 pb-10 text-center bg-white">
            {/* <div className="h-44 w-72 m-auto mb-5"> */}
            <div className="h-44 w-full m-auto mb-5">
              <img
                className="w-full h-full object-contain"
                src="/choose-car.png"
                alt=""
              />
            </div>

            <div className="text-sm text-bold mb-8 uppercase">
              Mercedes-benz sprinter
            </div>
            <Button variant={ButtonVariant.Filled} className="w-full">
              Book now
            </Button>
          </div>
          <div className="shadow-[0_4px_14px_0_rgba(0,0,0,0.2)] px-5 pt-5 pb-10 text-center bg-white">
            {/* <div className="h-44 w-72 m-auto mb-5"> */}
            <div className="h-44 w-full m-auto mb-5">
              <img
                className="w-full h-full object-contain"
                src="/choose-car.png"
                alt=""
              />
            </div>

            <div className="text-sm text-bold mb-8 uppercase">
              Mercedes-benz sprinter
            </div>
            <Button variant={ButtonVariant.Filled} className="w-full">
              Book now
            </Button>
          </div>
          <div className="shadow-[0_4px_14px_0_rgba(0,0,0,0.2)] px-5 pt-5 pb-10 text-center bg-white">
            {/* <div className="h-44 w-72 m-auto mb-5"> */}
            <div className="h-44 w-full m-auto mb-5">
              <img
                className="w-full h-full object-contain"
                src="/choose-car.png"
                alt=""
              />
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
