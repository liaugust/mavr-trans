import { BaseUseCase } from "../../../../use-cases/base.use-case";
import { CategoryAdapter } from "../../infra/category.adapter";

import type { CategoryEntity } from "../../core";
import { GetCategoryUseCaseInput } from "./get-category.input";

export class GetCategoryUseCase extends BaseUseCase {
  adapter: CategoryAdapter;

  constructor() {
    super();

    this.adapter = new CategoryAdapter();
  }

  async handle(input: GetCategoryUseCaseInput): Promise<CategoryEntity | null> {
    return this.adapter.getCategory(input);
  }
}
