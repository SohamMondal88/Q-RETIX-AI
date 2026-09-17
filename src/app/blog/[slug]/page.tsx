import BlogPost from "@/components/sections/BlogPost";
import { notFound } from "next/navigation";
import { getPostMeta } from "./blogData";
import { validSlugs } from "./validSlugs";
import type { Metadata } from "next";

const SITE_URL = "https://www.q-retix.app";

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

  const canonicalUrl = `${SITE_URL}/blog/${slug}`;
  const coverUrl = new URL(post.cover, SITE_URL).toString();

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
      publishedTime: post.publishedAt,
      authors: [post.author],
      images: [
        {
          url: coverUrl,
          width: post.coverWidth,
          height: post.coverHeight,
          alt: post.title,
        },
      ],
      tags: [post.category],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [coverUrl],
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
  const post = getPostMeta(slug);
  if (!post) {
    notFound();
  }

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.publishedAt,
    image: [new URL(post.cover, SITE_URL).toString()],
    mainEntityOfPage: `${SITE_URL}/blog/${slug}`,
    author: {
      "@type": "Organization",
      name: post.author,
    },
    publisher: {
      "@type": "Organization",
      name: "Q-RETIX AI",
      url: SITE_URL,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <BlogPost slug={slug} />
    </>
  );
}
