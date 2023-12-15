"use server";

import { headers } from "next/headers";
// import { headers } from "next/headers";
import {
  CreateRideUseCase,
  CreateRideUseCaseInput,
  GetUserRidesUseCase,
  GetUserUseCase,
  UpdateUserUseCase,
} from "../_storage";
import { getToken } from "./helper";
import { getLanguage } from "../_i18n/helper";
import { revalidatePath, revalidateTag } from "next/cache";
// import { revalidatePath } from "next/cache";

export const getUserRides = async () => {
  const token = await getToken();

  if (!token?.email) return [];

  const getRidesUseCase = new GetUserRidesUseCase();
  return getRidesUseCase.handle({ email: token.email });
};

export const createRide = async (
  input: Omit<CreateRideUseCaseInput, "userId">
) => {
  const token = await getToken();

  if (!token?.email) return null;

  const getUserUseCase = new GetUserUseCase();
  const user = await getUserUseCase.handle({ email: token.email });

  if (!user) return null;

  if (!user.phoneNumber) {
    const updateUserUseCase = new UpdateUserUseCase();
    await updateUserUseCase.handle(user.id, { phoneNumber: input.phone });
  }

  const createRideUseCase = new CreateRideUseCase();
  const ride = await createRideUseCase.handle({ ...input, userId: user.id });

  const baseHost = headers().get("host");
  const referer = headers().get("referer");
  const host =
    baseHost === "localhost:3000"
      ? "https://localhost:3000"
      : "https://www.mavrtrans.com";

  const lang = getLanguage();
  const url = `${host}/${lang}/admin/dashboard/leads`;
  revalidatePath("/", "layout");
  revalidateTag("rides");
  revalidatePath(url);

  return {
    baseHost,
    host,
    url,
    referer,
    headers: Object.fromEntries(headers().entries()),
  };
};
