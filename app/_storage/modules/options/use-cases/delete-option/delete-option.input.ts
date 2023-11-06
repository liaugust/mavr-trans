import { BaseUseCaseInput } from "../../../../use-cases/base.use-case-input";

export class DeleteOptionUseCaseInput extends BaseUseCaseInput {
  id: number;

  constructor(props: DeleteOptionUseCaseInput) {
    super(props);

    this.id = props.id;
  }
}
