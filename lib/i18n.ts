export const locales = ["de", "en"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "de";

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function getPreferredLocale(input?: string | null): Locale {
  if (!input) {
    return defaultLocale;
  }

  const normalized = input.toLowerCase();

  if (normalized.startsWith("de")) {
    return "de";
  }

  if (normalized.startsWith("en")) {
    return "en";
  }

  return defaultLocale;
}

export function getAlternateLocale(locale: Locale): Locale {
  return locale === "de" ? "en" : "de";
}
