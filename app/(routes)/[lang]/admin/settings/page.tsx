import { CarsList } from "@/app/_components/CarsList";
import { CategoriesList } from "@/app/_components/CategoriesList";
import { OptionsList } from "@/app/_components/OptionsList";
import { getLanguage } from "@/app/_i18n/helper";

export default function CarsPage({}) {
  const lang = getLanguage();

  return (
    <div>
      <div className="container p-[30px]">
        <div className="grid gap-y-[30px]">
          <CarsList lang={lang} />

          <OptionsList lang={lang} />

          <CategoriesList lang={lang} />
        </div>
      </div>
    </div>
  );
}
