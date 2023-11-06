import { getToken } from "next-auth/jwt";

import type { NextRequest, NextResponse } from "next/server";
import { GetUserUseCase } from "../_storage/modules/users/use-cases";
import { UserEntity } from "../_storage/modules/users/core";

type Opts = { params: Record<string, string> };
type Cb = (req: NextRequestWithUser, opts: Opts) => Promise<NextResponse>;

export type NextRequestWithUser = NextRequest & { user: UserEntity };

export const userEntityMiddleware = (cb: Cb): Cb => {
  return async (req: NextRequest, opts: Opts) => {
    const getUserByEmailUseCase = new GetUserUseCase();
    const token = await getToken({ req });

    if (!token?.email) {
      throw new Error("User not found");
    }

    const user = await getUserByEmailUseCase.handle({
      email: token.email,
    });

    if (!user) {
      throw new Error("User not found");
    }

    const requestWithUser = Object.assign(req, { user });

    return cb(requestWithUser, opts);
  };
};
