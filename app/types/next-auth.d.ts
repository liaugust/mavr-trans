import { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface User {
    username: string;
    successfulRides: number;
    activeRides: RideEntity[];
    phoneNumber: string | null;
    inactiveRides: RideEntity[];
  }

  interface Session {
    user: User & {
      username: string;
      successfulRides: number;
      activeRides: RideEntity[];
      phoneNumber: string | null;
      inactiveRides: RideEntity[];
    };
    token: {
      username: string;
      successfulRides: number;
      activeRides: RideEntity[];
      phoneNumber: string | null;
      inactiveRides: RideEntity[];
    };
  }
}
