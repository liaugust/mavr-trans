import { BaseUseCaseInput } from "../../../../use-cases/base.use-case-input";

export class DeleteCategoryUseCaseInput extends BaseUseCaseInput {
  id: number;

  constructor(props: DeleteCategoryUseCaseInput) {
    super(props);

    this.id = props.id;
  }
}
