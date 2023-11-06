import { HideEntity } from "../HideEntity";
import { DeleteEntity } from "../DeleteEntity";
import { Text } from "../Typography";
import { UpdateCategory } from "../UpdateCategory";
import { UpdateCar } from "../UpdateCar";
import { UpdateOption } from "../UpdateOption";
import { CategoryEntity } from "@/app/_storage/modules/categories/core";
import { OptionEntity } from "@/app/_storage/modules/options/core";
import { CarEntity } from "@/app/_storage/modules/cars/core";

interface Option {
  id: number;
  name: string;
  image?: string;
  active?: boolean;
}

interface EntityListProps<T> {
  entities: T[];
  kind: "cars" | "categories" | "options";
  onHideEntity: (entityId: number) => Promise<void>;
  onDeleteEntity: (entityId: number) => Promise<void>;
}

export const EntityList = <T extends Option>({
  kind,
  entities,
  onHideEntity,
  onDeleteEntity,
}: EntityListProps<T>) => {
  const isCategories = kind === "categories";
  const isOptions = kind === "options";
  const isCars = kind === "cars";

  return (
    <ul className="">
      {entities.map((entity) => (
        <li className="grid grid-cols-2" key={entity.id}>
          <div className="flex min-h-[70px]">
            {entity.image && (
              <img
                src={entity.image}
                alt={entity.name}
                width={90}
                height={70}
              />
            )}
            <Text
              className="flex items-center justify-center uppercase w-full"
              weight="2"
            >
              {entity.name}
            </Text>
          </div>
          <div className="grid grid-cols-3">
            {isCategories && (
              <UpdateCategory category={entity as unknown as CategoryEntity} />
            )}
            {isOptions && (
              <UpdateOption option={entity as unknown as OptionEntity} />
            )}
            {isCars && <UpdateCar car={entity as unknown as CarEntity} />}

            <DeleteEntity
              deleteEntityCb={onDeleteEntity}
              entityId={entity.id}
            />
            {typeof entity.active === "boolean" && (
              <HideEntity
                hideEntityCb={onHideEntity}
                active={entity.active}
                entityId={entity.id}
              />
            )}
          </div>
        </li>
      ))}
    </ul>
  );
};
