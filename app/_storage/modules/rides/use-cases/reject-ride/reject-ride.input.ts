import { BaseUseCaseInput } from "../../../../use-cases/base.use-case-input";

export class RejectRideUseCaseInput extends BaseUseCaseInput {
  rideId: number;

  constructor(props: RejectRideUseCaseInput) {
    super(props);

    this.rideId = props.rideId;
  }
}
