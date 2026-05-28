import linksDe from "@/data/links.de.json";
import linksEn from "@/data/links.en.json";
import { defaultLocale, type Locale } from "@/lib/i18n";

export type LinkAccent = "gold" | "blue" | "cyan" | "rose" | "violet" | "green";
export type LinkIcon = "mail" | "github" | "linkedin" | "devto" | "instagram" | "home";

export type LinksProfile = {
  name: string;
  tagline: string;
  status: string;
  location: string;
  email: string;
  homeUrl: string;
};

export type LinkEntry = {
  id: string;
  title: string;
  href: string;
  label: string;
  description: string;
  icon: LinkIcon;
  accent: LinkAccent;
  featured: boolean;
};

export type LinksPayload = {
  profile: LinksProfile;
  links: LinkEntry[];
};

const localizedLinks = {
  de: linksDe as LinksPayload,
  en: linksEn as LinksPayload,
} as const satisfies Record<Locale, LinksPayload>;

export function getLinksPayload(locale: Locale = defaultLocale): LinksPayload {
  return localizedLinks[locale];
}
