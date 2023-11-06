import { BaseUseCaseInput } from "../../../../use-cases/base.use-case-input";

export class DeleteCarUseCaseInput extends BaseUseCaseInput {
  id: number;

  constructor(props: DeleteCarUseCaseInput) {
    super(props);

    this.id = props.id;
  }
}
