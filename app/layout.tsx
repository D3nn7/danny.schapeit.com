import "./globals.css";
import type { Metadata, Viewport } from "next";
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
  robots: {
    index: true,
    follow: true,
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
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Danny Schapeit",
    description:
      "Softwareentwickler aus Deutschland mit Fokus auf Android, Fullstack und wartbare Produktentwicklung.",
  },
};

export const viewport: Viewport = {
  themeColor: "#008080",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className={`${bodyFont.variable} ${pixelFont.variable}`}>
        {children}
      </body>
    </html>
  );
}
