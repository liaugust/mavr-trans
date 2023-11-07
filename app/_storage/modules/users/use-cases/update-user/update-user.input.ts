import { BaseUseCaseInput } from "../../../../use-cases/base.use-case-input";

export class UpdateUserUseCaseInput extends BaseUseCaseInput {
  phoneNumber: string;

  constructor(props: UpdateUserUseCaseInput) {
    super(props);

    this.phoneNumber = props.phoneNumber;
  }
}
