import { CategorySchema } from "@/app/_storage/modules/categories/core";

export const initialValues: CategorySchema = {
  coefficient: null as unknown as number,
  maximumSeats: null as unknown as number,
  image: null as unknown as File,
  name: "",
};
