import { BaseUseCase } from "../../../../use-cases/base.use-case";
import { CategoryAdapter } from "../../infra/category.adapter";

import type { CategoryEntity } from "../../core";
import { DeleteCategoryUseCaseInput } from "./delete-category.input";

export class DeleteCategoryUseCase extends BaseUseCase {
  adapter: CategoryAdapter;

  constructor() {
    super();

    this.adapter = new CategoryAdapter();
  }

  async handle(input: DeleteCategoryUseCaseInput): Promise<CategoryEntity> {
    return this.adapter.deleteCategory(input);
  }
}
