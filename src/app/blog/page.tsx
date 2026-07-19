import type { Metadata } from "next";
import BlogPage from "@/components/sections/BlogPage";

export const metadata: Metadata = {
  title: "Blog - Research & Insights",
  description:
    "Explore breakthroughs in AI-powered healthcare, pharmaceutical research, and medical innovation from Q-RETIX AI.",
  alternates: {
    canonical: "https://qretix.ai/blog",
  },
  openGraph: {
    title: "Q-RETIX AI Blog - Research & Insights",
    description:
      "Explore breakthroughs in AI-powered healthcare, pharmaceutical research, and medical innovation.",
    url: "https://qretix.ai/blog",
    type: "website",
    images: [
      {
        url: "/images/blog/cover1.jpg",
        width: 1600,
        height: 941,
        alt: "Q-RETIX AI Blog",
      },
    ],
  },
};

export default function BlogHomePage() {
  return <BlogPage />;
}
