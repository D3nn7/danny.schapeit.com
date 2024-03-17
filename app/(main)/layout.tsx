import EasterEgg from "@/components/easterEgg";
import "../globals.css";
import type { Metadata, Viewport } from "next";
import { Roboto } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/footer";

const roboto = Roboto({
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["100", "300", "400", "700"],
  variable: "--font-roboto",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 1,
  viewportFit: "cover",
  themeColor: "#131313",
};

export const metadata: Metadata = {
  title: "Danny Schapeit",
  description: "Hey, I'm Danny :)",
  keywords:
    "developer, software engineer, open source, open source developer, privacy-focused, german developer, video production, d3nn7, slynite, danny schapeit, danny-tobias schapeit",
  robots: "index, follow",
  authors: { name: "Danny-Tobias Schapeit", url: "https://danny.schapeit.com" },
  referrer: "origin",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${roboto.className}`}>
        <EasterEgg />
        <Image
          src={"/background.png"}
          alt="background"
          fill
          className="fixed -z-10 top-0 left-0 w-full h-sreen object-cover"
        />
        <div className="flex justify-center flex-col h-screen max-h-screen text-gray-300">
          <Link href="/">
            <Image
              src={"/danny-banner-slim-2.png"}
              width={1920}
              height={1080}
              alt="banner"
              className="self-center"
            />
          </Link>

          <div className="overflow-scroll flex-1 flex flex-col items-center my-auto px-6 lg:px-5 xl:px-36 2xl:px-64">
            {children}
          </div>

          <Footer />
        </div>
      </body>
    </html>
  );
}
