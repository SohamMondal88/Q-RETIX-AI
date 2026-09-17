import type { Metadata } from "next";
import BlogPage from "@/components/sections/BlogPage";

export const metadata: Metadata = {
  title: "Blog - Research & Insights",
  description:
    "Explore breakthroughs in AI-powered healthcare, pharmaceutical research, and medical innovation from Q-RETIX AI.",
  alternates: {
    canonical: "https://www.q-retix.app/blog",
  },
  openGraph: {
    title: "Q-RETIX AI Blog - Research & Insights",
    description:
      "Explore breakthroughs in AI-powered healthcare, pharmaceutical research, and medical innovation.",
    url: "https://www.q-retix.app/blog",
    type: "website",
    images: [
      {
        url: "https://www.q-retix.app/images/blog/cover-1.jpg",
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
