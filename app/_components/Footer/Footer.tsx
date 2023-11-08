import { FC } from "react";
import { useTranslation } from "@/app/_i18n";
import Link from "next/link";
import { getLanguage } from "@/app/_i18n/helper";

const Footer: FC = async () => {
  const lang = getLanguage();
  const { t } = await useTranslation();

  return (
    <footer className="text-white" id="contact">
      <div className="bg-[#121420] pt-14 pb-12">
        <div className="container">
          <div className="flex-wrap md:flex-nowrap flex gap-y-10 md:gap-y-0 md:gap-x-5">
            <div className="w-full md:w-1/2">
              <img className="mb-5" src="/logo-primary.svg" alt="mavr trans" />
              <p className="text-xs w-52">{t("footer.text")}</p>
            </div>
            <div className="w-2/3 sm:w-1/2 lg:w-1/4">
              <div className="mb-[30px] text-[22px] md:text-2xl relative after:absolute after:bottom-0 after:w-[70px] after:h-[2px] after:block after:bg-primary">
                {t("footer.official_info.title")}
              </div>

              <ul className="grid grid-flow-row gap-y-3 mb-5">
                <li>
                  <a
                    className="flex items-center text-lg"
                    href="tel:+393503940838"
                  >
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
                    +393503940838
                  </a>
                  <a
                    className="flex items-center text-lg"
                    href="tel:+393500993924"
                  >
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
                    +393500993924
                  </a>
                </li>
                <li>
                  <a
                    className="flex items-center text-lg"
                    href="mailto:mavrtransfer@gmail.com"
                  >
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
                    mavrtransfer@gmail.com
                  </a>
                </li>
              </ul>
            </div>
            <div className="w-1/3 sm:w-1/2 md:w-1/4">
              <div className="mb-[30px] text-[22px] md:text-2xl relative after:absolute after:bottom-0 after:w-[70px] after:h-[2px] after:block after:bg-primary">
                {t("footer.quick_link.title")}
              </div>

              <ul className="grid grid-flow-row gap-y-3 mb-5">
                <li>
                  <Link className="text-lg" href={`/${lang}`}>
                    {t("footer.quick_link.links.home")}
                  </Link>
                </li>
                <li>
                  <Link className="text-lg" href={`/${lang}/#about`}>
                    {t("footer.quick_link.links.about")}
                  </Link>
                </li>
                <li>
                  <Link className="text-lg" href={`/${lang}/#faq`}>
                    {t("footer.quick_link.links.faq")}
                  </Link>
                </li>
                <li>
                  <Link className="text-lg" href={`#contact`}>
                    {t("footer.quick_link.links.contacts")}
                  </Link>
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
                <Link href={`/${lang}/terms`}>{t("terms")}</Link>
              </li>
              <li>|</li>
              <li>
                <Link href={`/${lang}/privacy`}>{t("privacy")}</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
