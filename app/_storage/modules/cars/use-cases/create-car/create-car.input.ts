import { BaseUseCaseInput } from "../../../../use-cases/base.use-case-input";

export class CreateCarUseCaseInput extends BaseUseCaseInput {
  name: string;
  image: string;
  seats: number;
  active: boolean;
  categoryId: number;

  constructor(props: CreateCarUseCaseInput) {
    super(props);

    this.name = props.name;
    this.seats = props.seats;
    this.image = props.image;
    this.active = props.active;
    this.categoryId = props.categoryId;
  }
}
