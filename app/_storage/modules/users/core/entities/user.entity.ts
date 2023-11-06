import { RideEntity } from "../../../rides/core";

export type UserEntity = {
  id: string;
  name: string;
  email: string;
  isAdmin: boolean;
  password: string | null;
  phoneNumber: string | null;

  successfulRides: number;
  activeRides: RideEntity[];
  inactiveRides: RideEntity[];

  createdAt: Date;
  updatedAt: Date | null;
};
