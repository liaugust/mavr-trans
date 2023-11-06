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

  const file = await data.image.arrayBuffer();
  const fileType = data.image.name.split(".").pop();
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

  return updateCarUseCase.handle(carId, {
    categoryId: data.categoryId,
    seats: data.seats,
    name: data.name,
    image: url,
  });
};
