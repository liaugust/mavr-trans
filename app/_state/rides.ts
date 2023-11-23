"use server";

// import { headers } from "next/headers";
import {
  ConfirmRideUseCase,
  CreateRideUseCase,
  CreateRideUseCaseInput,
  GetRidesUseCase,
  GetUserRidesUseCase,
  GetUserUseCase,
  UpdateUserUseCase,
} from "../_storage";
import { getToken } from "./helper";
// import { revalidatePath } from "next/cache";

export const getAllRides = async () => {
  // const response = await fetch("https://localhost:3000/api/rides", {
  //   headers: headers(),
  //   cache: 'no-cache',
  //   next: {
  //     revalidate: 5,
  //   },
  // });
  // console.log("response", response);

  // const data = await response.json();

  // // revalidatePath("/(routes)/[lang]/admin/dashboard/leads", "page");

  // return data.rides;
  const getRidesUseCase = new GetRidesUseCase();
  return getRidesUseCase.handle();
};

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
  return createRideUseCase.handle({ ...input, userId: user.id });
};

export const confirmRide = async (
  rideId: number,
  values: { departureAt: Date; arrivalAt: Date }
) => {
  const confirmRideUseCase = new ConfirmRideUseCase();
  return confirmRideUseCase.handle({ rideId, ...values });
};
