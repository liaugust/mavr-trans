import { FC } from "react";
import Socials from "./Socials";

const Footer: FC = () => {
  return (
    <footer className="text-white">
      <div className="bg-[#121420] pt-14 pb-12">
        <div className="container">
          <div className="flex-wrap md:flex-nowrap flex gap-y-10 md:gap-y-0 md:gap-x-5">
            <div className="w-full md:w-1/2">
              <img className="mb-5" src="/logo-primary.svg" alt="" />
              <p className="text-xs w-52">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur rutrum ligula ac dolor sagittis pretium.
              </p>
            </div>
            <div className="w-2/3 sm:w-1/2 md:w-1/4">
              <div className="mb-[30px] text-[22px] md:text-2xl relative after:absolute after:bottom-0 after:w-[70px] after:h-[2px] after:block after:bg-primary">
                Official info
              </div>

              <ul className="grid grid-flow-row gap-y-3 mb-5">
                <li>
                  <a className="flex items-center text-lg" href="tel:">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-4 mr-[10px] fill-primary stroke-primary"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                      />
                    </svg>
                    +1 123 123 34 56
                  </a>
                </li>
                <li>
                  <a className="flex items-center text-lg" href="mailto:">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-4 mr-[10px] stroke-primary"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                      />
                    </svg>
                    test@gmail.com
                  </a>
                </li>
              </ul>

              <Socials />
            </div>
            <div className="w-1/3 sm:w-1/2 md:w-1/4">
              <div className="mb-[30px] text-[22px] md:text-2xl relative after:absolute after:bottom-0 after:w-[70px] after:h-[2px] after:block after:bg-primary">
                Quick link
              </div>

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
