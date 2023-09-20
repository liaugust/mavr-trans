import { z } from "zod";

export const createCarSchema = z.object({
  name: z.string().nonempty(),
});
