import { getLanguage } from "@/app/_i18n/helper";
import { About } from "../_sections/About";
import { ChooseCategory } from "../_sections/ChooseCategory";
import { Faq } from "../_sections/Faq";
import { Hero } from "../_sections/Hero";
import { Service } from "../_sections/Service";

export default async function Home() {
  const language = getLanguage();
  return (
    <>
      <Hero lang={language} />
      <About />
      <Service />
      <ChooseCategory lang={language} />
      <Faq />
    </>
  );
}
