import { BaseUseCase } from "../../../../use-cases/base.use-case";
import { UserAdapter } from "../../infra/user.adapter";

import type { UserEntity } from "../../core";

export class GetUsersUseCase extends BaseUseCase {
  adapter: UserAdapter;

  constructor() {
    super();

    this.adapter = new UserAdapter();
  }

  async handle(): Promise<UserEntity[]> {
    return this.adapter.getUsers();
  }
}
