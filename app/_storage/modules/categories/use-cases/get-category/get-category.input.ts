import { BaseUseCaseInput } from "../../../../use-cases/base.use-case-input";

export class GetCategoryUseCaseInput extends BaseUseCaseInput {
  id: number;

  constructor(props: GetCategoryUseCaseInput) {
    super(props);

    this.id = props.id;
  }
}
