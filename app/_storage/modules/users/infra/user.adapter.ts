import { BasePrismaAdapter } from "../../../infra/base-prisma.adapter";

import { UserMapper } from "./user.mapper";

import type { UserEntity } from "../core";
import { prisma } from "@/prisma";
import {
  CreateUserUseCaseInput,
  GetUserUseCaseInput,
  ResetUserPasswordUseCaseInput,
  UpdateUserUseCaseInput,
} from "../use-cases";

export class UserAdapter extends BasePrismaAdapter {
  constructor() {
    super(prisma);
  }

  async createUser(input: CreateUserUseCaseInput): Promise<UserEntity> {
    const userExists = await this.prisma.user.findUnique({
      where: { email: input.email },
    });

    if (userExists) {
      throw new Error("User already exists");
    }

    const user = await this.prisma.user.create({
      data: input,
      include: {
        rides: { include: { waypoints: true, options: true } },
      },
    });

    return UserMapper.toUserEntity(user);
  }

  async updateUser(
    userId: string,
    input: UpdateUserUseCaseInput
  ): Promise<UserEntity> {
    const user = await this.prisma.user.update({
      where: { id: userId },
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
