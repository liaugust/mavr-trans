import { FC } from "react";

const Footer: FC = () => {
  return (
    <footer className="text-white">
      <div className="bg-[#121420] pt-14 pb-12">
        <div className="container">
          <div className="flex-wrap md:flex-nowrap flex gap-y-10 md:gap-y-0 md:gap-x-5">
            <div className="w-full md:w-1/2">
              <p className="text-xs w-52">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur rutrum ligula ac dolor sagittis pretium.
              </p>
            </div>
            <div className="w-1/2 md:w-1/4">
              <div className="mb-8 text-2xl">Official info</div>

              <ul className="grid grid-flow-row gap-y-3 mb-5">
                <li>
                  <a className="text-lg" href="tel:">
                    +1 123 123 34 56
                  </a>
                </li>
                <li>
                  <a className="text-lg" href="mailto:">
                    test@gmail.com
                  </a>
                </li>
              </ul>
            </div>
            <div className="w-1/2 md:w-1/4">
              <div className="mb-8 text-2xl">Quick link</div>

              <ul className="grid grid-flow-row gap-y-3 mb-5">
                <li>
                  <a className="text-lg" href="#">
                    Home
                  </a>
                </li>
                <li>
                  <a className="text-lg" href="#">
                    About us
                  </a>
                </li>
                <li>
                  <a className="text-lg" href="#">
                    FAQ
                  </a>
                </li>
                <li>
                  <a className="text-lg" href="#">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#0A0B15] py-3 border-t border-white border-opacity-50">
        <div className="container">
          <nav>
            <ul className="flex justify-end space-x-4">
              <li>
                <a href="">Terms</a>
              </li>
              <li>|</li>
              <li>
                <a href="">Privacy</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
