import { BaseUseCaseInput } from "../../../../use-cases/base.use-case-input";

export class GetCarUseCaseInput extends BaseUseCaseInput {
  id: number;

  constructor(props: GetCarUseCaseInput) {
    super(props);

    this.id = props.id;
  }
}
