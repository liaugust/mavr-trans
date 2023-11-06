import { BaseUseCase } from "../../../../use-cases/base.use-case";
import { CategoryAdapter } from "../../infra/category.adapter";

import type { CategoryEntity } from "../../core";
import { ToggleCategoryActiveUseCaseInput } from "./toggle-category-active.input";

export class ToggleCategoryActiveUseCase extends BaseUseCase {
  adapter: CategoryAdapter;

  constructor() {
    super();

    this.adapter = new CategoryAdapter();
  }

  async handle(
    input: ToggleCategoryActiveUseCaseInput
  ): Promise<CategoryEntity> {
    return this.adapter.toggleCategoryActive(input);
  }
}
