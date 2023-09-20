import type { Car } from "@prisma/client";
import type { CarEntity } from "../core";

export class CarMapper {
  public static toCarEntity(c: Car): CarEntity {
    return {
      id: c.id,
      name: c.name,
      image: c.image,
      updatedAt: c.updatedAt,
      createdAt: c.createdAt,
    };
  }
}
