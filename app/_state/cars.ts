"use server";

import { CarEntity, carSchema } from "../_storage/modules/cars/core";
import {
  CreateCarUseCase,
  DeleteCarUseCase,
  GetCarUseCase,
  GetCarsUseCase,
  ToggleCarActiveUseCase,
  UpdateCarUseCase,
} from "../_storage";
import { del, put } from "@vercel/blob";
import { headers } from "next/headers";
import { revalidatePath } from "next/cache";

export const getCar = async (carId: number): Promise<CarEntity | null> => {
  const getCarUseCase = new GetCarUseCase();
  return getCarUseCase.handle({ id: carId });
};

export const toggleCarActive = async (carId: number) => {
  const toggleCategoryActive = new ToggleCarActiveUseCase();
  const car = await toggleCategoryActive.handle({ carId });

  const referer = headers().get("referer");
  revalidatePath(referer as string);

  return car;
};

export const deleteCar = async (carId: number) => {
  const deleteCarUseCase = new DeleteCarUseCase();
  const categoryToDelete = await getCar(carId);

  if (!categoryToDelete) return;

  if (categoryToDelete.image) {
    await del(categoryToDelete.image);
  }

  const car = await deleteCarUseCase.handle({ id: carId });

  const referer = headers().get("referer");
  revalidatePath(referer as string);

  return car;
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

  const file = await data.image.arrayBuffer();
  const fileType = data.image.name.split(".").pop();
  const filePath = `car-images/${Date.now()}.${fileType}`;

  const { url } = await put(filePath, file, { access: "public" });

  const car = await createCarUseCase.handle({
    categoryId: data.categoryId,
    seats: data.seats,
    name: data.name,
    active: true,
    image: url,
  });

  const referer = headers().get("referer");
  revalidatePath(referer as string);

  return car;
};

export const updateCar = async (carId: number, formData: FormData) => {
  const car = await getCar(carId);

  if (!car) return null;

  const updateCarUseCase = new UpdateCarUseCase();
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

  let url: string | undefined = undefined;

  if (data.image && data.image !== "null") {
    const file = await image.arrayBuffer();
    const fileType = image.name.split(".").pop();
    const filePath = `car-images/${Date.now()}.${fileType}`;

    const result = await put(filePath, file, { access: "public" });

    await del(car.image);

    url = result.url;
  }

  const updatedCar = await updateCarUseCase.handle(carId, {
    categoryId: data.categoryId,
    seats: data.seats,
    name: data.name,
    image: url,
  });

  const referer = headers().get("referer");
  revalidatePath(referer as string);

  return updatedCar;
};
