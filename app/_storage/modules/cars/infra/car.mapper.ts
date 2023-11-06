import type { Car, Category } from "@prisma/client";
import type { CarEntity } from "../core";

export class CarMapper {
  public static toCarEntity(c: Car & { category: Category }): CarEntity {
    return {
      id: c.id,
      name: c.name,
      image: c.image,
      seats: c.seats,
      active: c.active,
      categoryId: c.categoryId,
      coefficient: c.category.coefficient,

      updatedAt: c.updatedAt,
      createdAt: c.createdAt,
    };
  }
}
