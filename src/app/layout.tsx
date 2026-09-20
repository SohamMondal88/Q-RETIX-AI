import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.q-retix.app"),
  title: {
    default: "Q-RETIX AI — Evidence-Aware Therapeutic Research",
    template: "%s | Q-RETIX AI",
  },
  description:
    "Evidence-aware AI research for therapeutic target discovery, biological reasoning, and testable scientific hypotheses.",
  keywords: [
    "pharmaceutical AI",
    "drug discovery",
    "therapeutic target discovery",
    "biological reasoning",
    "Q-RETIX AI",
    "research analytics",
  ],
  openGraph: {
    title: "Q-RETIX AI — Evidence-Aware Therapeutic Research",
    description:
      "Evidence-aware AI research for therapeutic target discovery and biological reasoning.",
    type: "website",
    url: "https://www.q-retix.app",
    siteName: "Q-RETIX AI",
    locale: "en_US",
    images: [
      {
        url: "/molecular-structure.png",
        width: 587,
        height: 425,
        alt: "Q-RETIX AI computational biology research",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Q-RETIX AI — Evidence-Aware Therapeutic Research",
    description:
      "Evidence-aware AI research for therapeutic target discovery and biological reasoning.",
    images: ["/molecular-structure.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://www.q-retix.app",
  },
  icons: {
    icon: [
      { url: "/icon.png", type: "image/png", sizes: "500x500" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#2C4D78",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-white text-[#33415C]">
        <SmoothScroll />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
