import type { Metadata } from "next";
import DesktopPortfolio from "@/components/desktopPortfolio";
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
  const pathname = `/${locale}`;

  return {
    title: "Danny Schapeit",
    description: isEnglish
      ? "Portfolio of Danny Schapeit, software engineer focused on Android, full-stack architecture, and maintainable product development."
      : "Portfolio von Danny Schapeit, Softwareentwickler mit Fokus auf Android, Fullstack, Architektur und moderne Produktentwicklung.",
    alternates: {
      canonical: pathname,
      languages: {
        de: "/de",
        en: "/en",
        "x-default": "/de",
      },
    },
    openGraph: {
      title: "Danny Schapeit",
      description: isEnglish
        ? "Software engineer from Germany with a focus on Android, full-stack, and maintainable product development."
        : "Softwareentwickler aus Deutschland mit Fokus auf Android, Fullstack und wartbare Produktentwicklung.",
      url: pathname,
      locale: isEnglish ? "en_US" : "de_DE",
      alternateLocale: isEnglish ? ["de_DE"] : ["en_US"],
      type: "website",
      images: [
        {
          url: "/background.jpg",
          width: 1200,
          height: 630,
          alt: "Danny Schapeit Portfolio",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Danny Schapeit",
      description: isEnglish
        ? "Software engineer from Germany with a focus on Android, full-stack, and maintainable product development."
        : "Softwareentwickler aus Deutschland mit Fokus auf Android, Fullstack und wartbare Produktentwicklung.",
      images: ["/background.jpg"],
    },
  };
}

export default async function LocalizedHome({ params }: PageProps) {
  const locale = resolveLocale((await params).locale);
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Danny Schapeit",
    url: `https://danny.schapeit.com/${locale}`,
    email: "mailto:danny@schapeit.com",
    jobTitle: locale === "en" ? "Software Engineer" : "Softwareentwickler",
    sameAs: [
      "https://github.com/d3nn7",
      "https://www.linkedin.com/in/danny-schapeit-a23b5a232",
      "https://dev.to/d3nn7",
      "https://instagram.com/glaubedanny",
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Danny Schapeit",
    url: `https://danny.schapeit.com/${locale}`,
    inLanguage: locale,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <DesktopPortfolio locale={locale} initialWindow="about" />
    </>
  );
}
