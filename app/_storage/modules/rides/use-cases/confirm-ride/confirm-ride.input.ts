import { BaseUseCaseInput } from "../../../../use-cases/base.use-case-input";

export class ConfirmRideUseCaseInput extends BaseUseCaseInput {
  rideId: number;
  arrivalAt: Date;
  departureAt: Date;

  constructor(props: ConfirmRideUseCaseInput) {
    super(props);

    this.rideId = props.rideId;
    this.arrivalAt = props.arrivalAt;
    this.departureAt = props.departureAt;
  }
}
