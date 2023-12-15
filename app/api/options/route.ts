import { GetOptionsUseCase, GetUsersUseCase } from "@/app/_storage";
import { NextResponse } from "next/server";

export const GET = async () => {
  const getOptionsUseCase = new GetOptionsUseCase();
  const options = await getOptionsUseCase.handle();

  return NextResponse.json(options);
};
