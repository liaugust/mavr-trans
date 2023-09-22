import { FC } from "react";

const Service: FC = () => {
  return (
    <section className="pt-20 lg:pt-[140px] lg:pb-20">
      <div className="container">
        <h2 className="text-center mb-10 lg:mb-[60px]">
          <span className="block text-[26px] lg:text-[46px] mb-[10px] lg:mb-3 font-bold">
            Best transfer service
          </span>
          <span className="block text-base lg:text-4xl font-light">
            Lorem ipsum
          </span>
        </h2>

        <ul className="flex flex-col md:flex-row md:flex-wrap md:justify-evenly lg:justify-between gap-x-5 md:gap-x-3 gap-y-5 lg:gap-y-0">
          <li className="md:w-[calc(50%_-_20px)] lg:w-[calc(33.333%_-_20px)] shadow-[0_4px_14px_0_rgba(0,0,0,0.2)]">
            <div className="object-cover h-72">
              <img
                src="/service.jpg"
                className="w-full h-full object-cover"
                alt=""
              />
            </div>

            <div className="px-5 py-6 text-center">
              <h3 className="text-[25px] text-bold mb-[10px]">Lorem ipsum</h3>
              <div className="text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur rutrum ligula ac dolor sagittis pretium.
              </div>
            </div>
          </li>
          <div className="md:w-[calc(50%_-_20px)] lg:w-[calc(33.333%_-_20px)] shadow-[0_4px_14px_0_rgba(0,0,0,0.2)]">
            <div className="object-cover h-72">
              <img
                src="/service.jpg"
                className="w-full h-full object-cover"
                alt=""
              />
            </div>

            <div className="px-5 py-6 text-center">
              <h3 className="text-[25px] text-bold mb-[10px]">Lorem ipsum</h3>
              <div className="text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur rutrum ligula ac dolor sagittis pretium.
              </div>
            </div>
          </div>
          <div className="md:w-1/2 lg:w-[calc(33.333%_-_20px)] shadow-[0_4px_14px_0_rgba(0,0,0,0.2)]">
            <div className="object-cover h-72">
              <img
                src="/service.jpg"
                className="w-full h-full object-cover"
                alt=""
              />
            </div>

            <div className="px-5 py-6 text-center">
              <h3 className="text-[25px] text-bold mb-[10px]">Lorem ipsum</h3>
              <div className="text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur rutrum ligula ac dolor sagittis pretium.
              </div>
            </div>
          </div>
        </ul>
      </div>
    </section>
  );
};

export default Service;
