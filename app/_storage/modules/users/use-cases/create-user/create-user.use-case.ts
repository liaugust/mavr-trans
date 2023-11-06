import { BaseUseCase } from "../../../../use-cases/base.use-case";
import { UserAdapter } from "../../infra/user.adapter";

import type { UserEntity } from "../../core";
import { CreateUserUseCaseInput } from "./create-user.input";

export class CreateUserUseCase extends BaseUseCase {
  adapter: UserAdapter;

  constructor() {
    super();

    this.adapter = new UserAdapter();
  }

  async handle(input: CreateUserUseCaseInput): Promise<UserEntity> {
    return this.adapter.createUser(input);
  }
}
