import { NextResponse } from "next/server";
import { defaultLocale, getPreferredLocale, isLocale } from "@/lib/i18n";
import { getLinksPayload } from "@/lib/links-data";

export function GET(request: Request) {
  const url = new URL(request.url);
  const requestedLocale = url.searchParams.get("locale");
  const locale = requestedLocale && isLocale(requestedLocale)
    ? requestedLocale
    : getPreferredLocale(url.searchParams.get("lang")) || defaultLocale;

  return NextResponse.json(getLinksPayload(locale), {
    headers: {
      "cache-control": "public, max-age=300, s-maxage=300, stale-while-revalidate=600",
    },
  });
}
