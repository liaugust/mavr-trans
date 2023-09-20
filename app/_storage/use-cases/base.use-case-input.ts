export abstract class BaseUseCaseInput {
  constructor(props: unknown) {
    if (!props) {
      throw new Error("Query props should not be empty");
    }
  }
}
