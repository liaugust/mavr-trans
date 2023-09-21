import { About } from "./_sections/About";
import { ChooseCar } from "./_sections/ChooseCar";
import { Faq } from "./_sections/Faq";
import { Service } from "./_sections/Service";

export default async function Home() {
  return (
    <main>
      <About />
      <Service />
      <ChooseCar />
      <Faq />
    </main>
  );
}
