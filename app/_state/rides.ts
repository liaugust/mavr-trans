"use server";

import {
  ConfirmRideUseCase,
  CreateRideUseCase,
  CreateRideUseCaseInput,
  GetRidesUseCase,
  GetUserRidesUseCase,
  GetUserUseCase,
} from "../_storage";
import { getToken } from "./helper";

export const getAllRides = async () => {
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

  const createRideUseCase = new CreateRideUseCase();
  return createRideUseCase.handle({ ...input, userId: user.id });
};

export const confirmRide = async (rideId: number) => {
  const confirmRideUseCase = new ConfirmRideUseCase();
  return confirmRideUseCase.handle({ rideId });
};
