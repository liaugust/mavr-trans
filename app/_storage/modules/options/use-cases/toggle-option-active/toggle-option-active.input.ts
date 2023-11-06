import { BaseUseCaseInput } from "../../../../use-cases/base.use-case-input";

export class ToggleOptionActiveUseCaseInput extends BaseUseCaseInput {
  optionId: number;

  constructor(props: ToggleOptionActiveUseCaseInput) {
    super(props);

    this.optionId = props.optionId;
  }
}
