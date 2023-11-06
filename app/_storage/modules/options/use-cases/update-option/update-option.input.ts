import { BaseUseCaseInput } from "../../../../use-cases/base.use-case-input";

export class UpdateOptionUseCaseInput extends BaseUseCaseInput {
  name: string;

  constructor(props: UpdateOptionUseCaseInput) {
    super(props);

    this.name = props.name;
  }
}
