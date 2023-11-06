import { BaseUseCase } from "../../../../use-cases/base.use-case";
import { RideAdapter } from "../../infra/ride.adapter";

import type { RideEntity } from "../../core";
import { GetUserRidesUseCaseInput } from "..";

export class GetUserRidesUseCase extends BaseUseCase {
  adapter: RideAdapter;

  constructor() {
    super();

    this.adapter = new RideAdapter();
  }

  async handle(input: GetUserRidesUseCaseInput): Promise<RideEntity[]> {
    return this.adapter.getUserRides(input);
  }
}
