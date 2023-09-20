import { BaseUseCaseInput } from "../../../../use-cases/base.use-case-input";

export class CreateCarUseCaseInput extends BaseUseCaseInput {
  name: string;
  image: string;

  constructor(props: CreateCarUseCaseInput) {
    super(props);

    this.name = props.name;
    this.image = props.image;
  }
}
