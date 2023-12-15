import { GetCategoriesUseCase } from "@/app/_storage";
import { NextResponse } from "next/server";

export const GET = async () => {
  const getCategoriesUseCase = new GetCategoriesUseCase();
  const categories = await getCategoriesUseCase.handle();

  return NextResponse.json(categories);
};
