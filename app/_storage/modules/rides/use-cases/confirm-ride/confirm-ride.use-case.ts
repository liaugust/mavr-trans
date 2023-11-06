import { BaseUseCase } from "../../../../use-cases/base.use-case";
import { RideAdapter } from "../../infra/ride.adapter";

import type { RideEntity } from "../../core";
import { ConfirmRideUseCaseInput } from "..";

export class ConfirmRideUseCase extends BaseUseCase {
  adapter: RideAdapter;

  constructor() {
    super();

    this.adapter = new RideAdapter();
  }

  async handle(data: ConfirmRideUseCaseInput): Promise<RideEntity> {
    return this.adapter.confirmRide(data);
  }
}
