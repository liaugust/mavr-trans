import { BaseUseCase } from "../../../../use-cases/base.use-case";
import { OptionAdapter } from "../../infra/option.adapter";

import type { OptionEntity } from "../../core";
import { DeleteOptionUseCaseInput } from "./delete-option.input";

export class DeleteOptionUseCase extends BaseUseCase {
  adapter: OptionAdapter;

  constructor() {
    super();

    this.adapter = new OptionAdapter();
  }

  async handle(input: DeleteOptionUseCaseInput): Promise<OptionEntity> {
    return this.adapter.deleteOption(input);
  }
}
