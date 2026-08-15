import type { Metadata } from "next";
import ContactPage from "@/components/sections/ContactPage";

export const metadata: Metadata = {
  title: "Contact & Support",
  description:
    "Get in touch with Q-RETIX AI. Whether you are a researcher, pharmaceutical partner, or need support — we are here to help.",
  alternates: {
    canonical: "https://qretix.ai/contact",
  },
  openGraph: {
    title: "Contact & Support | Q-RETIX AI",
    description:
      "Get in touch with Q-RETIX AI for research collaborations, partnerships, or support.",
    url: "https://qretix.ai/contact",
    type: "website",
  },
};

export default function Contact() {
  return <ContactPage />;
}
