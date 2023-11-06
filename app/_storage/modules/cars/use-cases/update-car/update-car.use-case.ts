import { BaseUseCase } from "../../../../use-cases/base.use-case";
import { CarAdapter } from "../../infra/car.adapter";

import type { CarEntity } from "../../core";
import { UpdateCarUseCaseInput } from "./update-car.input";

export class UpdateCarUseCase extends BaseUseCase {
  adapter: CarAdapter;

  constructor() {
    super();

    this.adapter = new CarAdapter();
  }

  async handle(id: number, input: UpdateCarUseCaseInput): Promise<CarEntity> {
    return this.adapter.updateCar(id, input);
  }
}
