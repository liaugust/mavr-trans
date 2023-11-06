import { BasePrismaAdapter } from "../../../infra/base-prisma.adapter";

import { UserMapper } from "./user.mapper";

import type { UserEntity } from "../core";
import { prisma } from "@/prisma";
import {
  CreateUserUseCaseInput,
  GetUserUseCaseInput,
  ResetUserPasswordUseCaseInput,
} from "../use-cases";

export class UserAdapter extends BasePrismaAdapter {
  constructor() {
    super(prisma);
  }

  async createUser(input: CreateUserUseCaseInput): Promise<UserEntity> {
    const user = await this.prisma.user.create({
      data: input,
      include: {
        rides: { include: { waypoints: true, options: true } },
      },
    });

    return UserMapper.toUserEntity(user);
  }

  async resetUserPassword(
    email: string,
    input: ResetUserPasswordUseCaseInput
  ): Promise<UserEntity> {
    const user = await this.prisma.user.update({
      where: { email },
      data: { password: input.password },
      include: { rides: { include: { waypoints: true, options: true } } },
    });

    return UserMapper.toUserEntity(user);
  }

  async getUsers(): Promise<UserEntity[]> {
    const users = await this.prisma.user.findMany({
      include: { rides: { include: { waypoints: true, options: true } } },
    });
    return users.map(UserMapper.toUserEntity);
  }

  async getUser(input: GetUserUseCaseInput): Promise<UserEntity | null> {
    const user = await this.prisma.user.findUnique({
      where: { email: input.email },
      include: { rides: { include: { waypoints: true, options: true } } },
    });

    if (!user) {
      return null;
    }

    return UserMapper.toUserEntity(user);
  }
}
