"use server";

import { fetch } from "../api/fetch";
import { getToken } from "./helper";
import { CarEntity, carSchema } from "../_storage/modules/cars/core";
import {
  CreateCarUseCase,
  DeleteCarUseCase,
  GetCarUseCase,
  GetCarsUseCase,
  ToggleCarActiveUseCase,
  UpdateCarUseCaseInput,
} from "../_storage";
import { del, put } from "@vercel/blob";

export const getCar = async (carId: number): Promise<CarEntity | null> => {
  const getCarUseCase = new GetCarUseCase();
  return getCarUseCase.handle({ id: carId });
};

export const getCars = async (): Promise<CarEntity[]> => {
  const getCarsUseCase = new GetCarsUseCase();
  return getCarsUseCase.handle();
};

export const toggleCarActive = async (carId: number) => {
  const toggleCategoryActive = new ToggleCarActiveUseCase();
  return toggleCategoryActive.handle({ carId });
};

export const deleteCar = async (carId: number) => {
  const deleteCarUseCase = new DeleteCarUseCase();
  const categoryToDelete = await getCar(carId);

  if (!categoryToDelete) return;

  if (categoryToDelete.image) {
    await del(categoryToDelete.image);
  }

  return deleteCarUseCase.handle({ id: carId });
};

export const createCar = async (formData: FormData) => {
  const createCarUseCase = new CreateCarUseCase();
  const categoryId = formData.get("categoryId");
  const image = formData.get("image") as File;
  const seats = formData.get("seats");
  const name = formData.get("name");

  const safeParsedBody = carSchema.safeParse({
    categoryId,
    seats,
    image,
    name,
  });

  if (!safeParsedBody.success) {
    console.log(
      "safeParse failed",
      JSON.stringify(safeParsedBody.error, null, 4)
    );
    return null;
  }

  const { data } = safeParsedBody;

  const file = await image.arrayBuffer();
  const fileType = image.name.split(".").pop();
  const filePath = `car-images/${Date.now()}.${fileType}`;

  const { url } = await put(filePath, file, { access: "public" });

  return createCarUseCase.handle({
    categoryId: data.categoryId,
    seats: data.seats,
    name: data.name,
    active: true,
    image: url,
  });
};

export const updateCar = async (
  carId: number,
  input: UpdateCarUseCaseInput
) => {
  const token = await getToken();

  try {
    const response = await fetch(`/api/cars/${carId}`, {
      body: JSON.stringify(input),
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      method: "PUT",
    });

    if (!response.ok) {
      return { car: null };
    }

    const data = await response.json();

    return data;
  } catch (e: unknown) {
    console.log("Error: ", e);

    return { car: null };
  }
};
