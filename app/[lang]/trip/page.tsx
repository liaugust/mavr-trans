import { ChooseYourTrip } from "@/app/_sections/ChooseYourTrip";
import { CarEntity } from "@/app/_storage/modules/cars/core";
import { CategoryEntity } from "@/app/_storage/modules/categories/core";
import { OptionEntity } from "@/app/_storage/modules/options/core";
import { WithLang } from "@/app/types";
import { options } from "@/config/options";
import { getServerSession } from "next-auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

const getData = async () => {
  const baseHost = headers().get("host");
  const host =
    baseHost === "localhost:3000"
      ? "https://localhost:3000"
      : "https://mavrtrans.com";

  const carsResponse = await fetch(`${host}/api/cars`, {
    next: { tags: ["cars"] },
  });
  const cars: CarEntity[] = await carsResponse.json();

  const categoriesResponse = await fetch(`${host}/api/categories`, {
    next: { tags: ["categories"] },
  });
  const categories: CategoryEntity[] = await categoriesResponse.json();

  const optionsResponse = await fetch(`${host}/api/options`, {
    next: { tags: ["options"] },
  });
  const options: OptionEntity[] = await optionsResponse.json();

  return { cars, categories, options };
};

export default async function TipPage({ params }: { params: WithLang }) {
  const session = await getServerSession(options);
  const { cars, categories, options: optionEntities } = await getData();

  if (!session?.user) {
    redirect(`/${params.lang}/?modal=login`);
  }

  return (
    <ChooseYourTrip
      cars={cars}
      categories={categories}
      options={optionEntities}
      lang={params.lang}
    />
  );
}
