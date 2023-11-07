import { CarsList } from "@/app/_components/CarsList";
import { CategoriesList } from "@/app/_components/CategoriesList";
import { OptionsList } from "@/app/_components/OptionsList";

export default function CarsPage() {
  return (
    <div>
      <div className="container p-[30px]">
        <div className="grid gap-y-[30px]">
          <CarsList />

          <OptionsList />

          <CategoriesList />
        </div>
      </div>
    </div>
  );
}
