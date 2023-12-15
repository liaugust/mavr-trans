"use server";

import { ConfirmRideUseCase, RejectRideUseCase } from "@/app/_storage";
import { revalidatePath } from "next/cache";
import { headers } from "next/headers";

export const confirmRideAction = async (id: number) => {
  const referer = headers().get("referer") as string;

  try {
    const confirmRideUseCase = new ConfirmRideUseCase();
    const ride = await confirmRideUseCase.handle({ rideId: id });

    revalidatePath(referer);

    return referer;
  } catch (e: unknown) {
    console.log("ERROR from confirm ride action", e);
  }
};

export const rejectRideAction = async (id: number) => {
  const referer = headers().get("referer") as string;

  try {
    const rejectRideUseCase = new RejectRideUseCase();
    const ride = await rejectRideUseCase.handle({ rideId: id });

    revalidatePath(referer);

    return ride;
  } catch (e: unknown) {
    console.log("ERROR from confirm ride action", e);
  }
};
