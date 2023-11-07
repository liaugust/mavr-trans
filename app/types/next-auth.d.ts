import { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface User {
    username: string;
    isAdmin: boolean;
    successfulRides: number;
    activeRides: RideEntity[];
    phoneNumber: string | null;
    inactiveRides: RideEntity[];
    provider: "google" | "credentials";
  }

  interface Session {
    user: User & {
      username: string;
      isAdmin: boolean;
      successfulRides: number;
      activeRides: RideEntity[];
      phoneNumber: string | null;
      inactiveRides: RideEntity[];
      provider: "google" | "credentials";
    };
    token: {
      username: string;
      isAdmin: boolean;
      successfulRides: number;
      activeRides: RideEntity[];
      phoneNumber: string | null;
      inactiveRides: RideEntity[];
      provider: "google" | "credentials";
    };
  }
}
