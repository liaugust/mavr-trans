import { BaseUseCase } from "../../../../use-cases/base.use-case";
import { RideAdapter } from "../../infra/ride.adapter";

import type { RideEntity } from "../../core";
import { RejectRideUseCaseInput } from "..";

export class RejectRideUseCase extends BaseUseCase {
  adapter: RideAdapter;

  constructor() {
    super();

    this.adapter = new RideAdapter();
  }

  async handle(data: RejectRideUseCaseInput): Promise<RideEntity> {
    return this.adapter.rejectRide(data);
  }
}
