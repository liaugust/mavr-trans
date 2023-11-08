"use client";

import { FC, useState } from "react";
import { Button } from "../Button";
import useLockBodyScroll from "@/app/_hooks/useLockBodyScroll";
import { useTranslation } from "@/app/_i18n/client";
import { WithLang } from "@/app/types";
import { Link } from "../Link";
import { UserMenu } from "./UserMenu";

interface HeaderProps extends WithLang {}

const Header: FC<HeaderProps> = ({ lang }) => {
  const { t } = useTranslation(lang);

  const [open, setOpen] = useState(false);

  useLockBodyScroll(open);

  return (
    <>
      <header className="bg-white shadow-[0px_4px_14px_0px_rgba(0,0,0,0.2)]">
        <div className="container">
          <nav className="flex justify-between items-center py-4">
            <Link href="/">
              <img src="/logo.svg" alt="Mavt Trans" />
            </Link>

            <div
              className={`z-40 transition-all lg:transition-none flex w-full lg:w-max flex-col lg:flex-row justify-between items-center fixed lg:static left-0 h-full bg-[#121420] lg:bg-white py-20 lg:py-0 ${
                open ? "top-0" : "-top-full"
              }`}
            >
              <ul className="lg:flex lg:items-center text-center lg:text-left text-primary lg:text-[#1E1D1F]">
                <li className="py-2 lg:py-0 px-2 lg:mr-[10px] text-2xl lg:text-lg">
                  <Link onClick={() => setOpen(false)} href={`/${lang}`}>
                    {t("header.links.home")}
                  </Link>
                </li>
                <li className="py-2 lg:py-0 px-2 lg:mr-[10px] text-2xl lg:text-lg">
                  <Link onClick={() => setOpen(false)} href={`/${lang}/#about`}>
                    {t("header.links.about")}
                  </Link>
                </li>
                <li className="py-2 lg:py-0 px-2 lg:mr-[10px] text-2xl lg:text-lg">
                  <Link onClick={() => setOpen(false)} href={`/${lang}/#faq`}>
                    {t("header.links.faq")}
                  </Link>
                </li>
                <li className="py-2 lg:py-0 px-2 text-2xl lg:text-lg">
                  <Link onClick={() => setOpen(false)} href={"#contact"}>
                    {t("header.links.contacts")}
                  </Link>
                </li>
              </ul>

              <UserMenu
                lang={lang}
                className="lg:hidden"
                onCloseModal={() => setOpen(false)}
              />
            </div>

            <UserMenu
              className="hidden lg:flex"
              lang={lang}
              onCloseModal={() => setOpen(false)}
            />

            <Button
              normalize
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
            </Button>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
