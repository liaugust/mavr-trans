import { FC } from "react";

const Service: FC = () => {
  return (
    <div className="py-20">
      <div className="container">
        <div className="text-center">
          <div className="text-5xl mb-3 font-bold">Best transfer service</div>
          <div className="text-4xl font-light mb-16">Lorem ipsum</div>
        </div>

        <div className="md:flex md:flex-wrap md:justify-evenly lg:justify-between">
          <div className="md:w-1/2 lg:w-1/3 shadow-[0_4px_14px_0_rgba(0,0,0,0.2)]">
            <div className="object-cover h-72">
              <img
                src="/service.jpg"
                className="w-full h-full object-cover"
                alt=""
              />
            </div>

            <div className="px-5 py-6 text-center">
              <div className="text-2xl text-bold mb-2">Lorem ipsum</div>
              <div className="text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur rutrum ligula ac dolor sagittis pretium.
              </div>
            </div>
          </div>
          <div className="md:w-1/2 lg:w-1/3 shadow-[0_4px_14px_0_rgba(0,0,0,0.2)]">
            <div className="object-cover h-72">
              <img
                src="/service.jpg"
                className="w-full h-full object-cover"
                alt=""
              />
            </div>

            <div className="px-5 py-6 text-center">
              <div className="text-2xl text-bold mb-2">Lorem ipsum</div>
              <div className="text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur rutrum ligula ac dolor sagittis pretium.
              </div>
            </div>
          </div>
          <div className="md:w-1/2 lg:w-1/3 shadow-[0_4px_14px_0_rgba(0,0,0,0.2)]">
            <div className="object-cover h-72">
              <img
                src="/service.jpg"
                className="w-full h-full object-cover"
                alt=""
              />
            </div>

            <div className="px-5 py-6 text-center">
              <div className="text-2xl text-bold mb-2">Lorem ipsum</div>
              <div className="text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur rutrum ligula ac dolor sagittis pretium.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
