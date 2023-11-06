import { BaseUseCase } from "../../../../use-cases/base.use-case";
import { OptionAdapter } from "../../infra/option.adapter";

import type { OptionEntity } from "../../core";

export class GetOptionsUseCase extends BaseUseCase {
  adapter: OptionAdapter;

  constructor() {
    super();

    this.adapter = new OptionAdapter();
  }

  async handle(): Promise<OptionEntity[]> {
    return this.adapter.getOptions();
  }
}
