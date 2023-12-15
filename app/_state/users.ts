"use server";

import {
  UserEntity,
  UserSchema,
  userSchema,
} from "../_storage/modules/users/core";
import {
  CreateUserUseCase,
  GetUserUseCase,
  ResetUserPasswordUseCase,
} from "../_storage";
import { compare, hash } from "bcrypt";
import { getToken } from "./helper";
import { ChangePasswordSchema } from "../_components/ChangePasswordModal/change-password-schema";

export const getUser = async (email: string): Promise<UserEntity | null> => {
  const getUserUseCase = new GetUserUseCase();
  return getUserUseCase.handle({ email });
};

export const createUser = async (values: UserSchema) => {
  const createUserUseCase = new CreateUserUseCase();

  const safeParsedBody = userSchema.safeParse(values);

  if (!safeParsedBody.success) {
    console.log(
      "safeParse failed",
      JSON.stringify(safeParsedBody.error, null, 4)
    );
    return null;
  }

  const { data } = safeParsedBody;

  const password = await hash(data.password, 10);

  return createUserUseCase.handle({
    password,
    email: data.email,
    phoneNumber: data.phoneNumber,
    name: `${data.firstName} ${data.lastName}`,
  });
};

export const resetPassword = async (values: ChangePasswordSchema) => {
  const token = await getToken();

  if (!token?.email) return;

  const getUserUseCase = new GetUserUseCase();
  const user = await getUserUseCase.handle({ email: token?.email });

  if (!user || !user.password) return;

  const passwordMatch = await compare(values.prevPassword, user.password);
  if (!passwordMatch) return;

  const newPassword = await hash(values.newPassword, 10);

  const resetUserPasswordUseCase = new ResetUserPasswordUseCase();
  return resetUserPasswordUseCase.handle(user.email, {
    password: newPassword,
  });
};
