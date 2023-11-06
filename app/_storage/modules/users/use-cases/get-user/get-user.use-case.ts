import { BaseUseCase } from "../../../../use-cases/base.use-case";
import { UserAdapter } from "../../infra/user.adapter";

import type { UserEntity } from "../../core";
import { GetUserUseCaseInput } from "./get-user.input";

export class GetUserUseCase extends BaseUseCase {
  adapter: UserAdapter;

  constructor() {
    super();

    this.adapter = new UserAdapter();
  }

  async handle(input: GetUserUseCaseInput): Promise<UserEntity | null> {
    return this.adapter.getUser(input);
  }
}
