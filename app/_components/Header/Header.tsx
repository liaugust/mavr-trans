"use client";

import { FC, useEffect, useState } from "react";
import { Button, ButtonVariant } from "../Button";

const Header: FC = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    window.document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  return (
    <header className="bg-white shadow-[0px_4px_14px_0px_rgba(0,0,0,0.2)]">
      <div className="container">
        <nav className="flex justify-between items-center py-4">
          <a className="mr-24" href="#">
            <img src="/logo.svg" alt="Mavt Trans" />
          </a>

          <div
            className={`z-40 transition-all w-full flex flex-col lg:flex-row justify-between items-center absolute lg:static left-0 h-full bg-[#121420] lg:bg-white py-20 lg:py-0 ${
              open ? "top-0" : "-top-full"
            }`}
          >
            <ul className="lg:flex lg:items-center text-center lg:text-left text-primary lg:text-[#1E1D1F]">
              <li className="py-2 lg:py-0 px-2 lg:mr-12 text-2xl lg:text-lg">
                <a href="#">Home</a>
              </li>
              <li className="py-2 lg:py-0 px-2 lg:mr-12 text-2xl lg:text-lg">
                <a href="#">About us</a>
              </li>
              <li className="py-2 lg:py-0 px-2 lg:mr-12 text-2xl lg:text-lg">
                <a href="#">FAQ</a>
              </li>
              <li className="py-2 lg:py-0 px-2 text-2xl lg:text-lg">
                <a href="#">Contact</a>
              </li>
            </ul>

            <div className="buttons">
              <Button variant={ButtonVariant.FilledPrimary} className="mr-2">
                Sign in
              </Button>
              <Button variant={ButtonVariant.OutlinedPrimary}>Sign UP</Button>
            </div>
          </div>

          <button
            className="lg:hidden relative z-50"
            onClick={() => setOpen((prev) => !prev)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="22"
              viewBox="0 0 36 22"
              fill="none"
              className="text-primary"
            >
              <rect width="36" height="2" fill="currentColor" />
              <rect y="10" width="30" height="2" fill="currentColor" />
              <rect y="20" width="36" height="2" fill="currentColor" />
            </svg>
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
