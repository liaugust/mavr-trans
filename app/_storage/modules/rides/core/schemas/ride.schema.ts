import { z } from "zod";

export const rideSchema = z.object({
  departureAt: z.coerce.date().refine((data) => data > new Date(), {
    message: "Start date must be in the future",
  }),
  arrivalAt: z.coerce.date().refine((data) => data > new Date(), {
    message: "End date must be in the future",
  }),
});

export type RideSchema = z.infer<typeof rideSchema>;
