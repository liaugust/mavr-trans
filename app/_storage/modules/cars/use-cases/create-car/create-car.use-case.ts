import { BaseUseCase } from "../../../../use-cases/base.use-case";
import { CarAdapter } from "../../infra/car.adapter";

import type { CarEntity } from "../../core";
import { CreateCarUseCaseInput } from "./create-car.input";

export class CreateCarUseCase extends BaseUseCase {
  adapter: CarAdapter;

  constructor() {
    super();

    this.adapter = new CarAdapter();
  }

  async handle(input: CreateCarUseCaseInput): Promise<CarEntity> {
    return this.adapter.createCar(input);
  }
}
