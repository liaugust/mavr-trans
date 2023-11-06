import { BaseUseCaseInput } from "../../../../use-cases/base.use-case-input";

export class ResetUserPasswordUseCaseInput extends BaseUseCaseInput {
  password: string;

  constructor(props: ResetUserPasswordUseCaseInput) {
    super(props);

    this.password = props.password;
  }
}
