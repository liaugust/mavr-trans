import { GetUsersUseCase } from "@/app/_storage";
import { NextResponse } from "next/server";

export const GET = async () => {
  const getUsersUseCase = new GetUsersUseCase();
  const users = await getUsersUseCase.handle();

  return NextResponse.json(users);
};
