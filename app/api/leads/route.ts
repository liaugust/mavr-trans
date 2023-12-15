import { GetRidesUseCase } from "@/app/_storage";
import { NextResponse } from "next/server";

export const GET = async () => {
  const getRidesUseCase = new GetRidesUseCase();
  const rides = await getRidesUseCase.handle();

  return NextResponse.json(rides);
};
