import { BaseUseCaseInput } from "../../../../use-cases/base.use-case-input";

export class ToggleCategoryActiveUseCaseInput extends BaseUseCaseInput {
  categoryId: number;

  constructor(props: ToggleCategoryActiveUseCaseInput) {
    super(props);

    this.categoryId = props.categoryId;
  }
}
