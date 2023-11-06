import { CarSchema } from "@/app/_storage/modules/cars/core";

export const initialValues: CarSchema = {
  categoryId: null as unknown as number,
  seats: null as unknown as number,
  image: null as unknown as File,
  name: "",
};
