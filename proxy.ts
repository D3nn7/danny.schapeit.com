import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { defaultLocale, getPreferredLocale, isLocale, locales, type Locale } from "@/lib/i18n";

function normalizeHost(host: string) {
  return host.split(":")[0].toLowerCase();
}

function matchesLinksSubdomain(host: string) {
  const normalizedHost = normalizeHost(host);
  const configuredDomain = process.env.APP_DOMAIN?.toLowerCase();
  const configuredSubdomain = process.env.LINKS_SUBDOMAIN?.toLowerCase() ?? "links";

  if (configuredDomain) {
    return normalizedHost === `${configuredSubdomain}.${configuredDomain}`;
  }

  return normalizedHost === `${configuredSubdomain}.localhost`;
}

function getLocaleFromPath(pathname: string): Locale | null {
  const segment = pathname.split("/")[1];
  return segment && isLocale(segment) ? segment : null;
}

function withLocaleHeader(request: NextRequest, locale: Locale) {
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-locale", locale);

  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
}

export function proxy(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const localeFromPath = getLocaleFromPath(pathname);
  const cookieLocale = request.cookies.get("NEXT_LOCALE")?.value;
  const preferredLocale = getPreferredLocale(cookieLocale ?? request.headers.get("accept-language"));

  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/favicon") ||
    pathname === "/favicon.ico" ||
    pathname.includes(".")
  ) {
    return NextResponse.next();
  }

  if (matchesLinksSubdomain(request.headers.get("host") ?? "") && pathname === "/") {
    const url = request.nextUrl.clone();
    url.pathname = `/${preferredLocale}/links`;
    return NextResponse.rewrite(url);
  }

  if (!localeFromPath) {
    const url = request.nextUrl.clone();
    url.pathname = pathname === "/" ? `/${preferredLocale}` : `/${preferredLocale}${pathname}`;
    return NextResponse.redirect(url);
  }

  const response = withLocaleHeader(request, localeFromPath);
  response.cookies.set("NEXT_LOCALE", localeFromPath, {
    path: "/",
    sameSite: "lax",
  });
  return response;
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|robots.txt|sitemap.xml).*)"],
};
