import { headers } from "next/headers";
import Solitaire404 from "@/components/solitaire404";
import { defaultLocale, isLocale } from "@/lib/i18n";

export default async function NotFound() {
  const localeHeader = (await headers()).get("x-locale") ?? defaultLocale;
  const locale = isLocale(localeHeader) ? localeHeader : defaultLocale;

  return <Solitaire404 locale={locale} />;
}
