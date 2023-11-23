import type { Option, Ride, User, Waypoint } from "@prisma/client";
import type { UserEntity } from "../core";
import { RideMapper } from "../../rides/infra/ride.mapper";

type PrismaUser = User & {
  rides: Array<
    Ride & {
      options: Option[];
      waypoints: Waypoint[];
    }
  >;
};

export class UserMapper {
  public static toUserEntity(u: PrismaUser): UserEntity {
    const rides = u.rides.map((r) =>
      RideMapper.toRideEntity({ ...r, user: u, userId: u.id })
    );

    const sortedRides = rides.reduce(
      (acc, ride) => {
        const arr = {
          done: acc.done,
          active: acc.active,
          waiting: acc.active,
        };

        arr[ride.status].push(ride);

        return acc;
      },
      { active: [], done: [], waiting: [] } as any
    );

    return {
      id: u.id,
      name: u.name,
      email: u.email,
      isAdmin: u.isAdmin,
      password: u.password ?? null,
      phoneNumber: u.phoneNumber || null,

      activeRides: sortedRides.active,
      inactiveRides: sortedRides.inactive,
      successfulRides: sortedRides.done.length,

      updatedAt: u.updatedAt,
      createdAt: u.createdAt,
    };
  }
}
