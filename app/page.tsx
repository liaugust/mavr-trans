import { About } from "./_sections/About";
import { ChooseCategory } from "./_sections/ChooseCategory";
import { Faq } from "./_sections/Faq";
import { Hero } from "./_sections/Hero";
import { Service } from "./_sections/Service";

export default async function Home() {
  return (
    <>
      <Hero />
      <About />
      <Service />
      <ChooseCategory />
      <Faq />
    </>
  );
}
