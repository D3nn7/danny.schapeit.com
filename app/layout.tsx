import "./globals.css";
import type { Metadata, Viewport } from "next";
import { headers } from "next/headers";
import { IBM_Plex_Sans, VT323 } from "next/font/google";

const bodyFont = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-body",
});

const pixelFont = VT323({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-pixel",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://danny.schapeit.com"),
  title: {
    default: "Danny Schapeit",
    template: "%s | Danny Schapeit",
  },
  description:
    "Portfolio von Danny Schapeit, Softwareentwickler mit Fokus auf Android, Fullstack, Architektur und moderne Produktentwicklung.",
  keywords: [
    "Danny Schapeit",
    "Softwareentwickler",
    "Android",
    "Fullstack",
    "Next.js",
    "Kotlin",
    "Portfolio",
  ],
  authors: [{ name: "Danny-Tobias Schapeit", url: "https://danny.schapeit.com" }],
  creator: "Danny-Tobias Schapeit",
  applicationName: "Danny Schapeit Portfolio",
  category: "technology",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon/favicon.ico", sizes: "any" },
      { url: "/favicon/favicon-32x32.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon/favicon-16x16.png", type: "image/png", sizes: "16x16" },
    ],
    apple: [{ url: "/favicon/apple-touch-icon.png", sizes: "180x180" }],
  },
  manifest: "/favicon/site.webmanifest",
  openGraph: {
    title: "Danny Schapeit",
    description:
      "Softwareentwickler aus Deutschland mit Fokus auf Android, Fullstack und wartbare Produktentwicklung.",
    url: "https://danny.schapeit.com",
    siteName: "Danny Schapeit",
    locale: "de_DE",
    alternateLocale: ["en_US"],
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
    description:
      "Softwareentwickler aus Deutschland mit Fokus auf Android, Fullstack und wartbare Produktentwicklung.",
    images: ["/background.jpg"],
  },
};

export const viewport: Viewport = {
  themeColor: "#008080",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = (await headers()).get("x-locale") ?? "de";

  return (
    <html lang={locale}>
      <body className={`${bodyFont.variable} ${pixelFont.variable}`}>
        {children}
      </body>
    </html>
  );
}
