import { BaseUseCase } from "../../../../use-cases/base.use-case";
import { CarAdapter } from "../../infra/car.adapter";

import type { CarEntity } from "../../core";
import { DeleteCarUseCaseInput } from "./delete-car.input";

export class DeleteCarUseCase extends BaseUseCase {
  adapter: CarAdapter;

  constructor() {
    super();

    this.adapter = new CarAdapter();
  }

  async handle(input: DeleteCarUseCaseInput): Promise<CarEntity> {
    return this.adapter.deleteCar(input);
  }
}
