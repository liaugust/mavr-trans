import { BaseUseCaseInput } from "../../../../use-cases/base.use-case-input";

export class GetUserRidesUseCaseInput extends BaseUseCaseInput {
  email: string;

  constructor(props: GetUserRidesUseCaseInput) {
    super(props);

    this.email = props.email;
  }
}
