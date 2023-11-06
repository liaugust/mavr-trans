import { BaseUseCase } from "../../../../use-cases/base.use-case";
import { CategoryAdapter } from "../../infra/category.adapter";

import type { CategoryEntity } from "../../core";
import { CreateCategoryUseCaseInput } from "./create-category.input";

export class CreateCategoryUseCase extends BaseUseCase {
  adapter: CategoryAdapter;

  constructor() {
    super();

    this.adapter = new CategoryAdapter();
  }

  async handle(input: CreateCategoryUseCaseInput): Promise<CategoryEntity> {
    return this.adapter.createCategory(input);
  }
}
