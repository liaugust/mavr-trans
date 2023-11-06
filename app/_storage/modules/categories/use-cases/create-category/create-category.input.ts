import { BaseUseCaseInput } from "../../../../use-cases/base.use-case-input";

export class CreateCategoryUseCaseInput extends BaseUseCaseInput {
  name: string;
  image: string;
  active: boolean;
  coefficient: number;

  constructor(props: CreateCategoryUseCaseInput) {
    super(props);

    this.name = props.name;
    this.image = props.image;
    this.active = props.active;
    this.coefficient = props.coefficient;
  }
}
