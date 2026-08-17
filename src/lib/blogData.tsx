// Blog Post Data Type Definition
export type BlogPostData = {
  slug: string;
  title: string;
  description: string;
  excerpt?: string;
  category: string;
  readTime: string;
  date: string;
  author: string;
  authorRole?: string;
  image: string;
  cover: string;
  coverAspect?: string;
  featured: boolean;
  tocSections?: Array<{ id: string; title: string }>;
  content?: string;
  body?: string;
};

// Main Blog Posts Array - Primary Export
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
    authorRole: "AI Research",
    image: "/images/blog/blog-1.jpg",
    cover: "/images/blog/blog-1.jpg",
    coverAspect: "aspect-video",
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
    authorRole: "AI Research",
    image: "/images/blog/blog-2.jpg",
    cover: "/images/blog/blog-2.jpg",
    coverAspect: "aspect-video",
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
    authorRole: "Drug Discovery",
    image: "/images/blog/blog-3.jpg",
    cover: "/images/blog/blog-3.jpg",
    coverAspect: "aspect-video",
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
    authorRole: "Market Analysis",
    image: "/images/blog/blog-4.jpg",
    cover: "/images/blog/blog-4.jpg",
    coverAspect: "aspect-video",
    featured: false,
  },
];

// Categories List - Derived from Posts
export const categories = ["All", ...new Set(allPosts.map((p) => p.category))];

// Search Utility Function
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

// Get Post by Slug
export function getPostBySlug(slug: string): BlogPostData | undefined {
  return allPosts.find((post) => post.slug === slug);
}

// Backwards Compatibility Exports
export const blogPosts = allPosts;
export default allPosts;
