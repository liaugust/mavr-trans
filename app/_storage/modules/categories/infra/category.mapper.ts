import type { Category } from "@prisma/client";
import type { CategoryEntity } from "../core";

export class CategoryMapper {
  public static toCategoryEntity(c: Category): CategoryEntity {
    return {
      id: c.id,
      name: c.name,
      image: c.image,
      active: c.active,
      coefficient: c.coefficient,
      maximumSeats: c.maximumSeats,

      updatedAt: c.updatedAt,
      createdAt: c.createdAt,
    };
  }
}
