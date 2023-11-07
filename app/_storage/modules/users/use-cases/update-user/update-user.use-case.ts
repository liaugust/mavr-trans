import { BaseUseCase } from "../../../../use-cases/base.use-case";
import { UserAdapter } from "../../infra/user.adapter";

import type { UserEntity } from "../../core";
import { UpdateUserUseCaseInput } from "./update-user.input";

export class UpdateUserUseCase extends BaseUseCase {
  adapter: UserAdapter;

  constructor() {
    super();

    this.adapter = new UserAdapter();
  }

  async handle(
    userId: string,
    input: UpdateUserUseCaseInput
  ): Promise<UserEntity> {
    return this.adapter.updateUser(userId, input);
  }
}
