import { NextRequestWithAuth } from "next-auth/middleware";
import { NextFetchEvent, NextResponse } from "next/server";
import acceptLanguage from "accept-language";
import { cookieName, fallbackLng, languages } from "./app/_i18n/settings";

acceptLanguage.languages(languages);

export default async function middleware(
  request: NextRequestWithAuth,
  event: NextFetchEvent
) {
  const { nextUrl, cookies, headers, url } = request;

  let lang;

  const i18nextCookie = cookies.get(cookieName);
  if (i18nextCookie) {
    lang = acceptLanguage.get(i18nextCookie.value);
  }
  if (!lang) {
    lang = acceptLanguage.get(headers.get("Accept-Language"));
  }
  if (!lang) {
    lang = fallbackLng;
  }

  const response = NextResponse.next();
  response.headers.set("x-language", lang);

  if (
    !languages.some((loc) => nextUrl.pathname.startsWith(`/${loc}`)) &&
    !nextUrl.pathname.startsWith("/_next")
  ) {
    return NextResponse.redirect(new URL(`/${lang}${nextUrl.pathname}`, url));
  }

  const refererCookie = headers.get("referer");
  if (refererCookie) {
    const refererUrl = new URL(refererCookie);
    const lngInReferer = languages.find((l) =>
      refererUrl.pathname.startsWith(`/${l}`)
    );

    if (lngInReferer) {
      response.cookies.set(cookieName, lngInReferer);
    }

    return response;
  }

  return response;
}

export const config = {
  matcher: "/((?!api|static|.*\\..*|_next).*)",
};
