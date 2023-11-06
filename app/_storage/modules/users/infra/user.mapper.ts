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
          done: acc.active,
          active: acc.active,
          waiting: acc.active,
        };

        arr[ride.status].push(ride);

        return acc;
      },
      { active: [], done: [] } as any
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
      successfulRides: sortedRides.active.length,

      updatedAt: u.updatedAt,
      createdAt: u.createdAt,
    };
  }
}
