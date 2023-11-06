import { getToken as getAuthToken } from "next-auth/jwt";
import { cookies, headers } from "next/headers";

export const getToken = async () => {
  return getAuthToken({
    req: {
      // @ts-ignore
      cookies: cookies(),
      headers: headers(),
    },
    raw: false,
  });
};
