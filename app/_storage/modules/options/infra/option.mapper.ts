import type { Option } from "@prisma/client";
import type { OptionEntity } from "../core";

export class OptionMapper {
  public static toOptionEntity(o: Option): OptionEntity {
    return {
      id: o.id,
      name: o.name,
      active: o.active,
      updatedAt: o.updatedAt,
      createdAt: o.createdAt,
    };
  }
}
