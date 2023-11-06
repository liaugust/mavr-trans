import { BaseUseCase } from "../../../../use-cases/base.use-case";
import { UserAdapter } from "../../infra/user.adapter";

import type { UserEntity } from "../../core";
import { ResetUserPasswordUseCaseInput } from "./reset-user-password.input";

export class ResetUserPasswordUseCase extends BaseUseCase {
  adapter: UserAdapter;

  constructor() {
    super();

    this.adapter = new UserAdapter();
  }

  async handle(
    email: string,
    input: ResetUserPasswordUseCaseInput
  ): Promise<UserEntity> {
    return this.adapter.resetUserPassword(email, input);
  }
}
