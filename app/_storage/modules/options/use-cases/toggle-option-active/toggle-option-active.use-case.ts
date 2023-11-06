import { BaseUseCase } from "../../../../use-cases/base.use-case";
import { OptionAdapter } from "../../infra/option.adapter";

import type { OptionEntity } from "../../core";
import { ToggleOptionActiveUseCaseInput } from "./toggle-option-active.input";

export class ToggleOptionActiveUseCase extends BaseUseCase {
  adapter: OptionAdapter;

  constructor() {
    super();

    this.adapter = new OptionAdapter();
  }

  async handle(input: ToggleOptionActiveUseCaseInput): Promise<OptionEntity> {
    return this.adapter.toggleOptionActive(input);
  }
}
