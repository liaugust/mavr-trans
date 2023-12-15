import { GetCarsUseCase } from "@/app/_storage";
import { NextResponse } from "next/server";

export const GET = async () => {
  const getCarsUseCase = new GetCarsUseCase();
  const cars = await getCarsUseCase.handle();

  return NextResponse.json(cars);
};
