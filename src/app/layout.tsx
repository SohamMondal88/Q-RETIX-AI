import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://qretix.ai"),
  title: {
    default: "Q-RETIX AI - AI-Powered Pharmaceutical Intelligence",
    template: "%s | Q-RETIX AI",
  },
  description:
    "Transforming Pharmaceutical Research Through Artificial Intelligence. Empowering drug discovery, clinical research, and healthcare intelligence.",
  keywords: [
    "pharmaceutical AI",
    "drug discovery",
    "clinical trials",
    "healthcare intelligence",
    "Q-RETIX AI",
    "research analytics",
  ],
  openGraph: {
    title: "Q-RETIX AI - AI-Powered Pharmaceutical Intelligence",
    description:
      "Transforming Pharmaceutical Research Through Artificial Intelligence.",
    type: "website",
    url: "https://qretix.ai",
    siteName: "Q-RETIX AI",
    locale: "en_US",
    images: [
      {
        url: "/images/blog/cover1.jpg",
        width: 1600,
        height: 941,
        alt: "Q-RETIX AI - Pharmaceutical Intelligence",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Q-RETIX AI - AI-Powered Pharmaceutical Intelligence",
    description:
      "Transforming Pharmaceutical Research Through Artificial Intelligence.",
    images: ["/images/blog/cover1.jpg"],
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
    canonical: "https://qretix.ai",
  },
  icons: {
    icon: "/favicon.ico",
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
      className={`${inter.variable} h-full antialiased`}
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
