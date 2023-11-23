import { RideSchema } from "@/app/_storage/modules/rides/core";

export const initialValues: RideSchema = {
  departureAt: new Date(),
  arrivalAt: new Date(),
};
