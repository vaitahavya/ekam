import type { Metadata, Viewport } from "next";
import { Outfit, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { StickyCTA } from "@/components/StickyCTA";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
};

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-cormorant",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Decade Street Ekam — Hyderabad | Structured Hospitality Investment",
  description:
    "Own a managed resort asset that generates monthly income. Decade Street Ekam is a structured hospitality development in Hyderabad. Only 18 units in Phase 1.",
  keywords:
    "Decade Street Ekam, Hyderabad hospitality investment, cottage investment, Valora Vista, structured hospitality",
  openGraph: {
    title: "Decade Street Ekam — Structured Hospitality Investment | Hyderabad",
    description:
      "Pre-launch: 18 cottages, 2 acres. Own a built asset. Generate income. Exit with clarity.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${cormorant.variable}`}>
      <body className="font-sans">
        <Header />
        {children}
        <StickyCTA />
        <WhatsAppButton />
      </body>
    </html>
  );
}
