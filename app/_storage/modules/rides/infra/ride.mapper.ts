import type {
  Ride,
  Car,
  User,
  Option,
  Waypoint,
  Category,
} from "@prisma/client";
import type { RideEntity } from "../core";

type PrismaRide = Ride & {
  user: User;
  car?: Car | null;
  options: Option[];
  waypoints: Waypoint[];
  category?: Category | null;
};

export class RideMapper {
  public static toRideEntity(r: PrismaRide): RideEntity {
    const waypoints = [...r.waypoints];
    const origin = waypoints.shift()!;
    const destination = waypoints.pop()!;

    return {
      id: r.id,
      number: r.number,
      car: {
        id: r.carId,
        name: r.carName,
        image: r.car?.image ?? null,
      },
      arrivalAt: r.arrivalAt,
      departureAt: r.departureAt,
      category: {
        id: r.categoryId,
        name: r.categoryName,
        image: r.category?.image ?? null,
      },
      total: r.total,
      // status: isConfirmed ? (isActive ? "active" : "done") : "waiting",
      status: r.status,
      user: {
        id: r.user.id,
        name: r.user.name,
        phone: r.user.phoneNumber,
      },
      distance: r.distance,
      options: r.optionNames,
      passengers: r.passengers,

      origin,
      destination,
      waypoints: waypoints.map((w) => ({
        shortAddress: w.shortAddress,
        fullAddress: w.fullAddress,
        order: w.order,
        lat: w.lat,
        lng: w.lng,
      })),
      allWaypoints: r.waypoints.map((w) => ({
        shortAddress: w.shortAddress,
        fullAddress: w.fullAddress,
        order: w.order,
        lat: w.lat,
        lng: w.lng,
      })),

      updatedAt: r.updatedAt,
      createdAt: r.createdAt,
      confirmedAt: r.confirmedAt,
    };
  }
}
