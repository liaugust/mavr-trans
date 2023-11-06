import { BaseUseCaseInput } from "../../../../use-cases/base.use-case-input";

export class CreateUserUseCaseInput extends BaseUseCaseInput {
  name: string;
  phone: string;
  email: string;
  password: string;

  constructor(props: CreateUserUseCaseInput) {
    super(props);

    this.name = props.name;
    this.email = props.email;
    this.phone = props.phone;
    this.password = props.password;
  }
}
