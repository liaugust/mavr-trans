import { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface User {
    username: string;
    isAdmin: boolean;
    successfulRides: number;
    activeRides: RideEntity[];
    phoneNumber: string | null;
    inactiveRides: RideEntity[];
  }

  interface Session {
    user: User & {
      username: string;
      isAdmin: boolean;
      successfulRides: number;
      activeRides: RideEntity[];
      phoneNumber: string | null;
      inactiveRides: RideEntity[];
    };
    token: {
      username: string;
      isAdmin: boolean;
      successfulRides: number;
      activeRides: RideEntity[];
      phoneNumber: string | null;
      inactiveRides: RideEntity[];
    };
  }
}
