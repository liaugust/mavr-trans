import { BaseUseCase } from "../../../../use-cases/base.use-case";
import { RideAdapter } from "../../infra/ride.adapter";

import type { RideEntity } from "../../core";
import { CreateRideUseCaseInput } from "./create-ride.input";

export class CreateRideUseCase extends BaseUseCase {
  adapter: RideAdapter;

  constructor() {
    super();

    this.adapter = new RideAdapter();
  }

  async handle(input: CreateRideUseCaseInput): Promise<RideEntity> {
    return this.adapter.createRide(input);
  }
}
