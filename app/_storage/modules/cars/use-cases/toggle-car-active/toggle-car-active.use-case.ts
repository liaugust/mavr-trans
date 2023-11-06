import { BaseUseCase } from "../../../../use-cases/base.use-case";
import { CarAdapter } from "../../infra/car.adapter";

import type { CarEntity } from "../../core";
import { ToggleCarActiveUseCaseInput } from "./toggle-car-active.input";

export class ToggleCarActiveUseCase extends BaseUseCase {
  adapter: CarAdapter;

  constructor() {
    super();

    this.adapter = new CarAdapter();
  }

  async handle(input: ToggleCarActiveUseCaseInput): Promise<CarEntity> {
    return this.adapter.toggleCarActive(input);
  }
}
