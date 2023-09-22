import { About } from "./_sections/About";
import { ChooseCar } from "./_sections/ChooseCar";
import { Faq } from "./_sections/Faq";
import { Hero } from "./_sections/Hero";
import { Service } from "./_sections/Service";

export default async function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Service />
      <ChooseCar />
      <Faq />
    </main>
  );
}
