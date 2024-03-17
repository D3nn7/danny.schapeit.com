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
  title: "69mm videoclub",
  description:
    "69mm (sixty|nine millimeter) videoclub is a collective of different people who create video projects of various kinds in their freetime.",
  keywords:
    "video production, danny schapeit, 69, 69mm, 69mm videoclub, videoclub",
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

        <div className="flex justify-center flex-col h-screen max-h-screen text-gray-300">
          <Link href="/69mm">
            <Image
              src={"/69mm-banner.png"}
              width={1920}
              height={1080}
              alt="banner"
              className="self-center"
            />
          </Link>

          <div className="overflow-scroll flex-1 flex flex-col items-center my-auto px-6 lg:px-5 xl:px-36 2xl:px-64">
            {children}
          </div>

          <Footer socials={false} />
        </div>
      </body>
    </html>
  );
}
