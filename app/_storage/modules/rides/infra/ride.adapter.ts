import { BasePrismaAdapter } from "../../../infra/base-prisma.adapter";

import { RideMapper } from "./ride.mapper";

import type { RideEntity } from "../core";
import type {
  ConfirmRideUseCaseInput,
  CreateRideUseCaseInput,
  GetUserRidesUseCaseInput,
  RejectRideUseCaseInput,
} from "../use-cases";
import { prisma } from "@/prisma";

export class RideAdapter extends BasePrismaAdapter {
  constructor() {
    super(prisma);
  }

  async confirmRide(data: ConfirmRideUseCaseInput): Promise<RideEntity> {
    const ride = await this.prisma.ride.update({
      where: { id: data.rideId },
      data: {
        confirmedAt: new Date(),
        status: "active",
      },
      include: {
        options: true,
        car: true,
        user: true,
        waypoints: { orderBy: { order: "asc" } },
      },
    });
    console.log("RIDE", ride);

    return RideMapper.toRideEntity(ride);
  }

  async rejectRide(data: RejectRideUseCaseInput): Promise<RideEntity> {
    const ride = await this.prisma.ride.update({
      where: { id: data.rideId },
      data: {
        status: "done",
      },
      include: {
        options: true,
        car: true,
        user: true,
        waypoints: { orderBy: { order: "asc" } },
      },
    });

    return RideMapper.toRideEntity(ride);
  }

  async createRide(data: CreateRideUseCaseInput): Promise<RideEntity> {
    const car = await this.prisma.car.findUniqueOrThrow({
      where: { id: data.carId },
      include: { category: true },
    });

    const options = await this.prisma.option.findMany({
      where: { id: { in: data.optionIds } },
    });

    const distance = data.distance / 1000;

    const total = distance * car.category.coefficient;

    const ride = await this.prisma.ride.create({
      data: {
        options: {
          connect: data.optionIds.map((id) => ({ id })),
        },
        total,
        distance,
        carId: car.id,
        carName: car.name,
        number: data.number,
        categoryId: car.category.id,
        departureAt: data.departureAt,
        categoryName: car.category.name,
        userId: data.userId,
        passengers: data.passengers,
        optionNames: options.map((option) => option.name),

        waypoints: {
          createMany: {
            data: data.waypoints,
          },
        },
      },
      include: {
        options: true,
        car: true,
        user: true,
        waypoints: { orderBy: { order: "asc" } },
      },
    });

    return RideMapper.toRideEntity(ride);
  }

  async getRides(): Promise<RideEntity[]> {
    const redes = await this.prisma.ride.findMany({
      include: {
        options: true,
        car: true,
        user: true,
        waypoints: { orderBy: { order: "asc" } },
      },
      orderBy: { createdAt: "desc" },
    });
    return redes.map(RideMapper.toRideEntity);
  }

  async getUserRides(input: GetUserRidesUseCaseInput): Promise<RideEntity[]> {
    const user = await this.prisma.user.findUnique({
      where: { email: input.email },
      select: {
        rides: {
          include: {
            options: true,
            car: true,
            user: true,
            waypoints: { orderBy: { order: "asc" } },
          },
          take: 10,
        },
      },
    });

    if (!user) {
      return [];
    }

    return user.rides.map(RideMapper.toRideEntity);
  }
}
