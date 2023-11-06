"use client";

import { Title } from "@/app/_components/Typography";
import { FC } from "react";
import { Category } from "./Category";
import { useStore } from "@/app/store-provider";
import Link from "next/link";

interface ChooseCategoryProps {}

const ChooseCategory: FC<ChooseCategoryProps> = () => {
  const { categories } = useStore();

  return (
    <section className="pt-20 lg:pt-[60px] lg:pb-20 lg:bg-[#E2E2E2]">
      <div className="container">
        <Title
          level="2.1"
          Component={"h2"}
          className="text-center mb-10 lg:mb-[60px] text-[#343331] capitalize"
        >
          Choose your way
          <Title level="4" weight="0" Component="span" className="block">
            Lorem ipsum
          </Title>
        </Title>

        <ul className="grid md:grid-cols-2 lg:grid-cols-3 auto-rows-[280px] gap-3 sm:gap-5 md:gap-7 lg:gap-10">
          {categories.map((category) => (
            <li key={category.id}>
              <Category
                id={category.id}
                name={category.name}
                image={category.image}
              />
            </li>
          ))}
          <li>
            <Link href="/trip">
              <Title
                weight="1"
                level="5"
                className="bg-primary w-full h-full flex items-center justify-center uppercase"
              >
                Book now
              </Title>
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default ChooseCategory;
