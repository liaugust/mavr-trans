import { FC } from "react";

const Service: FC = () => {
  return (
    <div className="py-20">
      <div className="container">
        <div className="text-center">
          <div className="text-5xl mb-3 font-bold">Best transfer service</div>
          <div className="text-4xl font-light mb-16">Lorem ipsum</div>
        </div>

        <div className="flex justify-between space-x-10">
          <div className="w-1/3 shadow-[0_4px_14px_0_rgba(0,0,0,0.20)]">
            <div className="object-cover">
              <img src="" alt="" />
            </div>

            <div className="px-5 py-6 text-center">
              <div className="text-2xl text-bold mb-2">Lorem ipsum</div>
              <div className="text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur rutrum ligula ac dolor sagittis pretium.
              </div>
            </div>
          </div>

          <div className="w-1/3 shadow-[0_4px_14px_0_rgba(0,0,0,0.20)]">
            <div className="object-cover">
              <img src="" alt="" />
            </div>

            <div className="px-5 py-6 text-center">
              <div className="text-2xl text-bold mb-2">Lorem ipsum</div>
              <div className="text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur rutrum ligula ac dolor sagittis pretium.
              </div>
            </div>
          </div>

          <div className="w-1/3 shadow-[0_4px_14px_0_rgba(0,0,0,0.20)]">
            <div className="object-cover">
              <img src="" alt="" />
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
