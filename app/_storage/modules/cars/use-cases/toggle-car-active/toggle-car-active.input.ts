import { BaseUseCaseInput } from "../../../../use-cases/base.use-case-input";

export class ToggleCarActiveUseCaseInput extends BaseUseCaseInput {
  carId: number;

  constructor(props: ToggleCarActiveUseCaseInput) {
    super(props);

    this.carId = props.carId;
  }
}
