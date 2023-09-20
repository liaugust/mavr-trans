import { CreateCarUseCase, GetCarsUseCase } from "@/app/_storage";
import { NextRequest, NextResponse } from "next/server";
import { createCarSchema } from "./validation";

export const GET = async () => {
  const getCarsUseCase = new GetCarsUseCase();
  const cars = await getCarsUseCase.handle();

  return NextResponse.json({ cars });
};

export const POST = async (request: NextRequest) => {
  const body = await request.json();
  const parsedBody = createCarSchema.safeParse(body);

  if (!parsedBody.success) {
    return NextResponse.json({}, { status: 400 });
  }

  const input = parsedBody.data;

  const createCarUseCase = new CreateCarUseCase();
  const car = await createCarUseCase.handle({
    name: input.name,
    image: "",
  });

  return NextResponse.json({ car });
};
