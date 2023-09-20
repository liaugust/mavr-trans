import { BasePrismaAdapter } from "../../../infra/base-prisma.adapter";

import { CarMapper } from "./car.mapper";

import type { CarEntity } from "../core";
import type { CreateCarUseCaseInput } from "../use-cases";
import { prisma } from "@/prisma";

export class CarAdapter extends BasePrismaAdapter {
  constructor() {
    super(prisma);
  }

  async createCar(data: CreateCarUseCaseInput): Promise<CarEntity> {
    const car = await this.prisma.car.create({ data });
    return CarMapper.toCarEntity(car);
  }

  async getCars(): Promise<CarEntity[]> {
    const cars = await this.prisma.car.findMany();
    return cars.map(CarMapper.toCarEntity);
  }
}
