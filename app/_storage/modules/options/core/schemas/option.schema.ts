import { z } from "zod";

export const optionSchema = z.object({
  name: z.string().min(1),
});
export type OptionSchema = z.infer<typeof optionSchema>;
