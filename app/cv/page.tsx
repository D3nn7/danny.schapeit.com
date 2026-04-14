import { Metadata } from "next";
import DesktopPortfolio from "@/components/desktopPortfolio";

export const metadata: Metadata = {
  title: "CV",
};

export default function CV() {
  return <DesktopPortfolio initialWindow="cv" />;
}
