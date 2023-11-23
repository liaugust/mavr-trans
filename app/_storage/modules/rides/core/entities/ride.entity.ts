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
  user: {
    id: string;
    name: string;
    phone: string | null;
  };
  options: string[];
  total: number;
  status: Status;
  distance: number;
  passengers: number;

  departureAt: Date | null;
  arrivalAt: Date | null;

  origin: Waypoint;
  destination: Waypoint;

  waypoints: Waypoint[];
  allWaypoints: Waypoint[];

  createdAt: Date;
  updatedAt: Date | null;
  confirmedAt: Date | null;
};
