import { Status } from "@prisma/client";

type Waypoint = {
  shortAddress: string;
  fullAddress: string;
  order: number;
  lat: number;
  lng: number;
};

export type RideEntity = {
  id: number;
  car: {
    image: string | null;
    id: number | null;
    name: string;
  };
  category: {
    image: string | null;
    id: number | null;
    name: string;
  };
  options: string[];
  total: number;
  status: Status;
  userId: string;
  distance: number;
  arrivalDate: Date;
  passengers: number;
  departureDate: Date;

  origin: Waypoint;
  destination: Waypoint;

  waypoints: Waypoint[];
  allWaypoints: Waypoint[];

  createdAt: Date;
  updatedAt: Date | null;
  confirmedAt: Date | null;
};
