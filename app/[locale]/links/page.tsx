import type { Metadata } from "next";
import LinksHub from "@/components/links-hub";
import { defaultLocale, isLocale, type Locale } from "@/lib/i18n";

type PageProps = {
  params: Promise<{ locale: string }>;
};

function resolveLocale(locale: string): Locale {
  return isLocale(locale) ? locale : defaultLocale;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const locale = resolveLocale((await params).locale);
  const isEnglish = locale === "en";
  const pathname = `/${locale}/links`;

  return {
    title: "Links",
    description: isEnglish
      ? "Link hub for Danny Schapeit with direct access to contact, GitHub, LinkedIn, and more."
      : "Link-Hub von Danny Schapeit mit direktem Zugriff auf Kontakt, GitHub, LinkedIn und weitere Kanäle.",
    alternates: {
      canonical: pathname,
      languages: {
        de: "/de/links",
        en: "/en/links",
        "x-default": "/de/links",
      },
    },
    openGraph: {
      title: "Links | Danny Schapeit",
      description: isEnglish
        ? "Link hub for Danny Schapeit with direct access to contact, GitHub, LinkedIn, and more."
        : "Link-Hub von Danny Schapeit mit direktem Zugriff auf Kontakt, GitHub, LinkedIn und weitere Kanäle.",
      url: pathname,
      locale: isEnglish ? "en_US" : "de_DE",
      alternateLocale: isEnglish ? ["de_DE"] : ["en_US"],
      type: "website",
      images: [
        {
          url: "/background.jpg",
          width: 1200,
          height: 630,
          alt: "Danny Schapeit Links",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Links | Danny Schapeit",
      description: isEnglish
        ? "Link hub for Danny Schapeit with direct access to contact, GitHub, LinkedIn, and more."
        : "Link-Hub von Danny Schapeit mit direktem Zugriff auf Kontakt, GitHub, LinkedIn und weitere Kanäle.",
      images: ["/background.jpg"],
    },
  };
}

export default async function LocalizedLinksPage({ params }: PageProps) {
  const locale = resolveLocale((await params).locale);
  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Danny Schapeit Links",
    url: `https://danny.schapeit.com/${locale}/links`,
    inLanguage: locale,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />
      <LinksHub locale={locale} />
    </>
  );
}
