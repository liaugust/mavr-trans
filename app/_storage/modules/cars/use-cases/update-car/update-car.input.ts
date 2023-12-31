import { BaseUseCaseInput } from "../../../../use-cases/base.use-case-input";

export class UpdateCarUseCaseInput extends BaseUseCaseInput {
  name?: string;
  image?: string;
  seats?: number;
  categoryId?: number;

  constructor(props: UpdateCarUseCaseInput) {
    super(props);

    this.name = props.name;
    this.image = props.image;
    this.seats = props.seats;
    this.categoryId = props.categoryId;
  }
}
