import { NextRequestWithAuth, withAuth } from "next-auth/middleware";
import { NextFetchEvent } from "next/server";
import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";
import { headers } from "next/headers";

let locales = ["en", "es"];
export let defaultLocale = "en";

function getLocale(): string {
  const headersList = headers();
  const acceptLanguage = headersList.get("accept-language");

  // if (acceptLanguage) {
  //   headersList.set("accept-language", acceptLanguage.replaceAll("_", "-"));
  // }

  const headersObject = Object.fromEntries(headersList.entries());
  const languages = new Negotiator({ headers: headersObject }).languages();
  return match(languages, locales, defaultLocale);
}

export default async function middleware(
  request: NextRequestWithAuth,
  event: NextFetchEvent
) {
  const { pathname } = request.nextUrl;
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

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
    // "/((?!_next|favicon.ico).*)",
  ],
};
