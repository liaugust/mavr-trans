import { BaseUseCase } from "../../../../use-cases/base.use-case";
import { OptionAdapter } from "../../infra/option.adapter";

import type { OptionEntity } from "../../core";
import { CreateOptionUseCaseInput } from "./create-option.input";

export class CreateOptionUseCase extends BaseUseCase {
  adapter: OptionAdapter;

  constructor() {
    super();

    this.adapter = new OptionAdapter();
  }

  async handle(input: CreateOptionUseCaseInput): Promise<OptionEntity> {
    return this.adapter.createOption(input);
  }
}
