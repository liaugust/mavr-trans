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
    <section className="pt-20 lg:pt-[60px] lg:pb-20 lg:bg-[#E2E2E2]">
      <div className="container">
        <h2 className="text-center mb-10 lg:mb-[60px]">
          <span className="block text-[26px] lg:text-[46px] mb-[10px] lg:mb-3 font-bold">
            Choose your way
          </span>
          <span className="block text-base lg:text-4xl font-light ">
            Lorem ipsum
          </span>
        </h2>

        <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5 md:gap-7 lg:gap-10">
          {cars.map((car) => (
            <li
              key={car.id}
              className="shadow-[0_4px_14px_0_rgba(0,0,0,0.2)] px-5 pt-5 pb-10 text-center bg-white"
            >
              <div className="h-44 w-full m-auto mb-5">
                <img
                  className="w-full h-full object-contain"
                  src="/choose-car.png"
                  alt=""
                />
              </div>

              <h3 className="text-[21px] text-bold mb-[30px] uppercase">
                {car.name}
              </h3>
              <Button variant={ButtonVariant.Filled} className="w-full">
                Book now
              </Button>
            </li>
          ))}
          <li className="shadow-[0_4px_14px_0_rgba(0,0,0,0.2)] px-5 pt-5 pb-10 text-center bg-white">
            <div className="h-44 w-full m-auto mb-5">
              <img
                className="w-full h-full object-contain"
                src="/choose-car.png"
                alt=""
              />
            </div>

            <h3 className="text-[21px] text-bold mb-[30px] uppercase">
              Mercedes-benz sprinter
            </h3>
            <Button variant={ButtonVariant.Filled} className="w-full">
              Book now
            </Button>
          </li>
          <li className="shadow-[0_4px_14px_0_rgba(0,0,0,0.2)] px-5 pt-5 pb-10 text-center bg-white">
            <div className="h-44 w-full m-auto mb-5">
              <img
                className="w-full h-full object-contain"
                src="/choose-car.png"
                alt=""
              />
            </div>

            <h3 className="text-[21px] text-bold mb-[30px] uppercase">
              Mercedes-benz sprinter
            </h3>
            <Button variant={ButtonVariant.Filled} className="w-full">
              Book now
            </Button>
          </li>
          <li className="shadow-[0_4px_14px_0_rgba(0,0,0,0.2)] px-5 pt-5 pb-10 text-center bg-white">
            <div className="h-44 w-full m-auto mb-5">
              <img
                className="w-full h-full object-contain"
                src="/choose-car.png"
                alt=""
              />
            </div>

            <h3 className="text-[21px] text-bold mb-[30px] uppercase">
              Mercedes-benz sprinter
            </h3>
            <Button variant={ButtonVariant.Filled} className="w-full">
              Book now
            </Button>
          </li>
          <li className="shadow-[0_4px_14px_0_rgba(0,0,0,0.2)] px-5 pt-5 pb-10 text-center bg-white">
            <div className="h-44 w-full m-auto mb-5">
              <img
                className="w-full h-full object-contain"
                src="/choose-car.png"
                alt=""
              />
            </div>

            <h3 className="text-[21px] text-bold mb-[30px] uppercase">
              Mercedes-benz sprinter
            </h3>
            <Button variant={ButtonVariant.Filled} className="w-full">
              Book now
            </Button>
          </li>
          <li className="shadow-[0_4px_14px_0_rgba(0,0,0,0.2)] px-5 pt-5 pb-10 text-center bg-white">
            <div className="h-44 w-full m-auto mb-5">
              <img
                className="w-full h-full object-contain"
                src="/choose-car.png"
                alt=""
              />
            </div>

            <h3 className="text-[21px] text-bold mb-[30px] uppercase">
              Mercedes-benz sprinter
            </h3>
            <Button variant={ButtonVariant.Filled} className="w-full">
              Book now
            </Button>
          </li>
          <li className="shadow-[0_4px_14px_0_rgba(0,0,0,0.2)] px-5 pt-5 pb-10 text-center bg-white">
            <div className="h-44 w-full m-auto mb-5">
              <img
                className="w-full h-full object-contain"
                src="/choose-car.png"
                alt=""
              />
            </div>

            <h3 className="text-[21px] text-bold mb-[30px] uppercase">
              Mercedes-benz sprinter
            </h3>
            <Button variant={ButtonVariant.Filled} className="w-full">
              Book now
            </Button>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default ChooseCar;
