import { BaseUseCase } from "../../../../use-cases/base.use-case";
import { CarAdapter } from "../../infra/car.adapter";

import type { CarEntity } from "../../core";
import { GetCarUseCaseInput } from "./get-car.input";

export class GetCarUseCase extends BaseUseCase {
  adapter: CarAdapter;

  constructor() {
    super();

    this.adapter = new CarAdapter();
  }

  async handle(input: GetCarUseCaseInput): Promise<CarEntity | null> {
    return this.adapter.getCar(input);
  }
}
