import { ConfirmRideUseCase } from "@/app/_storage";
import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (
  req: NextRequest,
  { params: { id } }: { params: { id: string } }
) => {
  const rideId = Number(id);

  const confirmRideUseCase = new ConfirmRideUseCase();
  const ride = await confirmRideUseCase.handle({ rideId });

  const path = req.nextUrl.searchParams.get("path");
  if (path) {
    revalidatePath(path);
  }

  return NextResponse.json(ride);
};
