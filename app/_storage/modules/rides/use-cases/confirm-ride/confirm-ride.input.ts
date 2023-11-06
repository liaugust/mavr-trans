import { BaseUseCaseInput } from "../../../../use-cases/base.use-case-input";

export class ConfirmRideUseCaseInput extends BaseUseCaseInput {
  rideId: number;

  constructor(props: ConfirmRideUseCaseInput) {
    super(props);

    this.rideId = props.rideId;
  }
}
