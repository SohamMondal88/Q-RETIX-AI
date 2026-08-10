export type BlogPostData = {
  slug: string;
  title: string;
  description: string;
  excerpt?: string;
  category: string;
  readTime: string;
  date: string;
  author: string;
  image: string;
  featured: boolean;
};

export const allPosts: BlogPostData[] = [
  {
    slug: "unlocking-undruggable-aim2-inflammasome",
    title: "Q-RETIX.AI: Unlocking the \"Undruggable\" AIM2 Inflammasome",
    description:
      "How Structural AI Bypassed the Electrostatic Charge Trap to Reignite a Dormant Therapeutic Target.",
    excerpt:
      "How Structural AI Bypassed the Electrostatic Charge Trap to Reignite a Dormant Therapeutic Target.",
    category: "Research",
    readTime: "15 min read",
    date: "July 4, 2026",
    author: "Q-RETIX Research Team",
    image: "/images/blog/blog-1.jpg",
    featured: true,
  },
  {
    slug: "structural-ai-discovery-matrix",
    title: "Structural AI Discovery Matrix: Beyond Static Crystallography",
    description:
      "Why dynamic thermodynamic ensembles are the future of target identification and cryptic pocket discovery.",
    excerpt:
      "Why dynamic thermodynamic ensembles are the future of target identification and cryptic pocket discovery.",
    category: "AI Research",
    readTime: "12 min read",
    date: "June 28, 2026",
    author: "Q-RETIX Research Team",
    image: "/images/blog/blog-2.jpg",
    featured: false,
  },
  {
    slug: "allosteric-modulation-immunology",
    title: "Allosteric Modulation: The Next Frontier in Immunology",
    description:
      "Exploring how allosteric molecular wedges are reshaping autoimmune drug design and inflammasome inhibition.",
    excerpt:
      "Exploring how allosteric molecular wedges are reshaping autoimmune drug design and inflammasome inhibition.",
    category: "Drug Discovery",
    readTime: "10 min read",
    date: "June 20, 2026",
    author: "Q-RETIX Research Team",
    image: "/images/blog/blog-3.jpg",
    featured: false,
  },
  {
    slug: "aim2-therapeutic-pipeline",
    title: "From Charge Trap to Cure: The AIM2 Therapeutic Pipeline",
    description:
      "Mapping the multi-billion dollar market opportunity in SLE, psoriasis, and neurodegenerative disease.",
    excerpt:
      "Mapping the multi-billion dollar market opportunity in SLE, psoriasis, and neurodegenerative disease.",
    category: "Market Analysis",
    readTime: "8 min read",
    date: "June 15, 2026",
    author: "Q-RETIX Research Team",
    image: "/images/blog/blog-4.jpg",
    featured: false,
  },
];

export const categories = ["All", ...new Set(allPosts.map((p) => p.category))];

export function searchPosts(query: string): BlogPostData[] {
  const q = query.trim().toLowerCase();
  if (!q) return allPosts;
  return allPosts.filter((post) =>
    [post.title, post.description, post.excerpt ?? "", post.category, post.author]
      .join(" ")
      .toLowerCase()
      .includes(q)
  );
}
