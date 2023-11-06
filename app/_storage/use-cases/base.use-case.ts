import type { BaseUseCaseInput } from "./base.use-case-input";

export abstract class BaseUseCase {
  abstract handle(...rest: BaseUseCaseInput[]): Promise<unknown>;
}
