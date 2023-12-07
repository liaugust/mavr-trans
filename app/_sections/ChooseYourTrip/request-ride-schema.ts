import { z } from "zod";

const waypoint = z.object({
  lat: z.number().min(0),
  lng: z.number().min(0),
  fullAddress: z.string(),
  shortAddress: z.string(),
});

export const schema = z.object({
  passengers: z.number().positive().min(1),
  option: z
    .object({
      id: z.number().positive().min(1),
      name: z.string(),
    })
    .nullable(),
  category: z.object({
    maximumSeats: z.number().positive(),
    coefficient: z.number().positive(),
    id: z.number().positive().min(1),
    name: z.string(),
  }),
  car: z.object({
    id: z.number().positive().min(1),
    name: z.string(),
  }),
  number: z.string().optional(),
  distance: z.number().min(0),
  phone: z.string().min(1),

  departureAt: z.coerce.date().refine((data) => data > new Date(), {
    message: "Departure date must be in the future",
  }),

  waypoints: z.array(waypoint.required()).min(2).nonempty(),
});

export type FormFields = z.infer<typeof schema>;
