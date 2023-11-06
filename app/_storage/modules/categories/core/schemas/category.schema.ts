import { z } from "zod";

const MAX_FILE_SIZE = 500000;
export const ACCEPTED_IMAGE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
];

export const categorySchema = z.object({
  name: z.string().min(1),
  image: z
    .any()
    .nullable()
    .optional()
    .refine((file) => {
      if (file && file !== "null") {
        return file?.size <= MAX_FILE_SIZE;
      }
      return true;
    }, `Max image size is 5MB.`)
    .refine((file) => {
      if (file && file !== "null") {
        return ACCEPTED_IMAGE_TYPES.includes(file?.type);
      }

      return true;
    }, "Only .jpg, .jpeg, .png and .webp formats are supported."),
  coefficient: z.coerce.number().min(0),
});

export type CategorySchema = z.infer<typeof categorySchema>;
