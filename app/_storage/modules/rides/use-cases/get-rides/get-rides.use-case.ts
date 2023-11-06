import { BaseUseCase } from "../../../../use-cases/base.use-case";
import { RideAdapter } from "../../infra/ride.adapter";

import type { RideEntity } from "../../core";

export class GetRidesUseCase extends BaseUseCase {
  adapter: RideAdapter;

  constructor() {
    super();

    this.adapter = new RideAdapter();
  }

  async handle(): Promise<RideEntity[]> {
    return this.adapter.getRides();
  }
}
