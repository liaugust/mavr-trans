import { BasePrismaAdapter } from "../../../infra/base-prisma.adapter";

import { CarMapper } from "./car.mapper";

import type { CarEntity } from "../core";
import type {
  CreateCarUseCaseInput,
  DeleteCarUseCaseInput,
  GetCarUseCaseInput,
  ToggleCarActiveUseCaseInput,
  UpdateCarUseCaseInput,
} from "../use-cases";
import { prisma } from "@/prisma";

export class CarAdapter extends BasePrismaAdapter {
  constructor() {
    super(prisma);
  }

  async createCar(data: CreateCarUseCaseInput): Promise<CarEntity> {
    const car = await this.prisma.car.create({
      data,
      include: { category: true },
    });
    return CarMapper.toCarEntity(car);
  }

  async toggleCarActive(data: ToggleCarActiveUseCaseInput): Promise<CarEntity> {
    const carToToggle = await this.prisma.car.findUniqueOrThrow({
      where: { id: data.carId },
    });

    const car = await this.prisma.car.update({
      where: { id: data.carId },
      include: { category: true },
      data: { active: !carToToggle.active },
    });

    return CarMapper.toCarEntity(car);
  }

  async updateCar(id: number, data: UpdateCarUseCaseInput): Promise<CarEntity> {
    const car = await this.prisma.car.update({
      data,
      where: { id },
      include: { category: true },
    });
    return CarMapper.toCarEntity(car);
  }

  async getCars(): Promise<CarEntity[]> {
    const cars = await this.prisma.car.findMany({
      include: { category: true },
    });
    return cars.map(CarMapper.toCarEntity);
  }

  async getCar(input: GetCarUseCaseInput): Promise<CarEntity | null> {
    const car = await this.prisma.car.findUnique({
      where: { id: input.id },
      include: { category: true },
    });

    if (!car) {
      return null;
    }

    return CarMapper.toCarEntity(car);
  }

  async deleteCar(data: DeleteCarUseCaseInput): Promise<CarEntity> {
    const car = await this.prisma.car.delete({
      where: { id: data.id },
      include: { category: true },
    });
    return CarMapper.toCarEntity(car);
  }
}
