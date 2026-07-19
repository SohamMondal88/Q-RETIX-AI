import BlogPost from "@/components/sections/BlogPost";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return [
    { slug: "unlocking-undruggable-aim2-inflammasome" },
    { slug: "decoding-diabetes-srebf1-gene-discovery" },
  ];
}

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const validSlugs = [
    "unlocking-undruggable-aim2-inflammasome",
    "decoding-diabetes-srebf1-gene-discovery",
  ];
  if (!validSlugs.includes(slug)) {
    notFound();
  }
  return <BlogPost slug={slug} />;
}
