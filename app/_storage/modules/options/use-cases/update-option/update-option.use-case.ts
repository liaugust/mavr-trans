import { BaseUseCase } from "../../../../use-cases/base.use-case";
import { OptionAdapter } from "../../infra/option.adapter";

import type { OptionEntity } from "../../core";
import { UpdateOptionUseCaseInput } from "./update-option.input";

export class UpdateOptionUseCase extends BaseUseCase {
  adapter: OptionAdapter;

  constructor() {
    super();

    this.adapter = new OptionAdapter();
  }

  async handle(
    optionId: number,
    input: UpdateOptionUseCaseInput
  ): Promise<OptionEntity> {
    return this.adapter.updateOption(optionId, input);
  }
}
