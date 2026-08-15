import BlogPost from "@/components/sections/BlogPost";
import { notFound } from "next/navigation";
import { getPostMeta } from "./blogData";
import { validSlugs } from "./validSlugs";
import type { Metadata } from "next";

export async function generateStaticParams() {
  return validSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostMeta(slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  const canonicalUrl = `https://qretix.ai/blog/${slug}`;

  return {
    title: post.title,
    description: post.excerpt,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: canonicalUrl,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      images: [
        {
          url: post.cover,
          width: 1600,
          height: 941,
          alt: post.title,
        },
      ],
      tags: [post.category],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.cover],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  if (!validSlugs.includes(slug)) {
    notFound();
  }
  return <BlogPost slug={slug} />;
}
