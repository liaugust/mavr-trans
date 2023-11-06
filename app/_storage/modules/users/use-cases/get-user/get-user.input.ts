import { BaseUseCaseInput } from "../../../../use-cases/base.use-case-input";

export class GetUserUseCaseInput extends BaseUseCaseInput {
  email: string;

  constructor(props: GetUserUseCaseInput) {
    super(props);

    this.email = props.email;
  }
}
