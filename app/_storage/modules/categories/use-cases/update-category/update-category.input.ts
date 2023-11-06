import { BaseUseCaseInput } from "../../../../use-cases/base.use-case-input";

export class UpdateCategoryUseCaseInput extends BaseUseCaseInput {
  name: string;
  coefficient: number;

  constructor(props: UpdateCategoryUseCaseInput) {
    super(props);

    this.name = props.name;
    this.coefficient = props.coefficient;
  }
}
