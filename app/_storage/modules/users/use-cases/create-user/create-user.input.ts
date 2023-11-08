import { BaseUseCaseInput } from "../../../../use-cases/base.use-case-input";

export class CreateUserUseCaseInput extends BaseUseCaseInput {
  name: string;
  email: string;
  password: string;
  phoneNumber: string;

  constructor(props: CreateUserUseCaseInput) {
    super(props);

    this.name = props.name;
    this.email = props.email;
    this.password = props.password;
    this.phoneNumber = props.phoneNumber;
  }
}
