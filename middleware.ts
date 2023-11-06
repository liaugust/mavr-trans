import { NextRequestWithAuth, withAuth } from "next-auth/middleware";
import { NextFetchEvent, NextResponse } from "next/server";
import { getToken } from "./app/_state/helper";

export default async function middleware(
  request: NextRequestWithAuth,
  event: NextFetchEvent
) {
  const { pathname } = request.nextUrl;
  const token = await getToken();

  if (pathname.startsWith("/admin") && !token?.isAdmin) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  const authMiddleware = await withAuth({
    pages: {
      signIn: "/?modal=login",
    },
    secret: process.env.NEXTAUTH_SECRET,
  });

  return authMiddleware(request, event);
}

export const config = {
  matcher: [
    "/profile",
    "/trip",
    "/admin/settings",
    "/admin/dashboard/leads",
    "/admin/dashboard/clients",
  ],
};
