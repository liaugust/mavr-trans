import { BaseUseCaseInput } from "../../../../use-cases/base.use-case-input";

export class UpdateCategoryUseCaseInput extends BaseUseCaseInput {
  name?: string;
  image?: string;
  coefficient?: number;
  maximumSeats?: number;

  constructor(props: UpdateCategoryUseCaseInput) {
    super(props);

    this.name = props.name;
    this.image = props.image;
    this.coefficient = props.coefficient;
    this.maximumSeats = props.maximumSeats;
  }
}
