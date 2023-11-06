import { z } from "zod";

export const submitRideSchema = z.object({
  carId: z.number().positive().min(1),
  departurePoint: z.number(),
  destinationPoint: z.number(),
  passengers: z.number().positive().min(1),
  distance: z.number().positive().min(1),
  optionIds: z.array(z.number().positive().min(1)),
});
