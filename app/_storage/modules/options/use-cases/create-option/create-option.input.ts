import { BaseUseCaseInput } from "../../../../use-cases/base.use-case-input";

export class CreateOptionUseCaseInput extends BaseUseCaseInput {
  name: string;

  constructor(props: CreateOptionUseCaseInput) {
    super(props);

    this.name = props.name;
  }
}
