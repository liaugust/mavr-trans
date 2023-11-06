import { BaseUseCase } from "../../../../use-cases/base.use-case";
import { CategoryAdapter } from "../../infra/category.adapter";

import type { CategoryEntity } from "../../core";

export class GetCategoriesUseCase extends BaseUseCase {
  adapter: CategoryAdapter;

  constructor() {
    super();

    this.adapter = new CategoryAdapter();
  }

  async handle(): Promise<CategoryEntity[]> {
    return this.adapter.getCategories();
  }
}
