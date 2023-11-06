import { BaseUseCase } from "../../../../use-cases/base.use-case";
import { CategoryAdapter } from "../../infra/category.adapter";

import type { CategoryEntity } from "../../core";
import { UpdateCategoryUseCaseInput } from "./update-category.input";

export class UpdateCategoryUseCase extends BaseUseCase {
  adapter: CategoryAdapter;

  constructor() {
    super();

    this.adapter = new CategoryAdapter();
  }

  async handle(
    categoryId: number,
    input: UpdateCategoryUseCaseInput
  ): Promise<CategoryEntity> {
    return this.adapter.updateCategory(categoryId, input);
  }
}
