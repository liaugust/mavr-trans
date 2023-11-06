import { z } from "zod";

const waypoint = z.object({
  lat: z.number().min(0),
  lng: z.number().min(0),
  fullAddress: z.string(),
  shortAddress: z.string(),
});

export const schema = z.object({
  passengers: z.number().positive().min(1),
  option: z.number().positive().nullable(),
  category: z.number().positive().min(1),
  car: z.number().positive().min(1),
  userInfo: z
    .object({
      email: z.string().email(),
      firstName: z.string(),
      lastName: z.string(),
      phone: z.string(),
    })
    .required(),

  waypoints: z.array(waypoint.required()).min(2).nonempty(),
});

export type FormFields = z.infer<typeof schema>;
