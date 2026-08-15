import { validSlugs } from "./validSlugs";

export interface BlogPostMeta {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  author: string;
  authorRole: string;
  cover: string;
  coverAspect: string;
  tocSections: { label: string; id: string }[];
}

export const blogPostsMeta: BlogPostMeta[] = [
  {
    slug: "unlocking-undruggable-aim2-inflammasome",
    title: 'Q-RETIX.AI: Unlocking the "Undruggable" AIM2 Inflammasome',
    excerpt:
      "How Structural AI Bypassed the Electrostatic Charge Trap to Reignite a Dormant Therapeutic Target",
    category: "Research",
    date: "July 4, 2026",
    readTime: "15 min read",
    author: "Q-RETIX Research Team",
    authorRole: "Structural AI Drug Discovery, Q-RETIX.AI",
    cover: "/images/blog/cover1.jpg",
    coverAspect: "aspect-[21/9] sm:aspect-[3/1] lg:aspect-[4/1]",
    tocSections: [
      { label: "Executive Summary", id: "executive-summary" },
      { label: "The AIM2 Paradox: A Critical Node in Innate Immunity", id: "the-aim2-paradox" },
      { label: "The Traditional Bottleneck: The Electrostatic Charge Trap", id: "the-traditional-bottleneck" },
      { label: "Enter Q-RETIX.AI: Redefining Target Discovery", id: "enter-q-retixai" },
      { label: "Comparative Pharmacology: A Paradigm Shift in Drug Design", id: "comparative-pharmacology" },
      { label: "Reviving a Dormant Multi-Billion Dollar Market", id: "reviving-a-dormant-market" },
      { label: "Conclusion: The Power of AI in Structural Biology", id: "conclusion" },
    ],
  },
  {
    slug: "decoding-diabetes-srebf1-gene-discovery",
    title: "Decoding Diabetes: AI's Breakthrough in Gene Discovery",
    excerpt:
      "How Q-RETIX AI Identified SREBF1 as a Systems-Level Therapeutic Target for Type 2 Diabetes",
    category: "Research",
    date: "July 19, 2026",
    readTime: "12 min read",
    author: "Q-RETIX Research Team",
    authorRole: "Metabolic AI Drug Discovery, Q-RETIX.AI",
    cover: "/images/blog/cover2.jpg",
    coverAspect: "aspect-[16/9] sm:aspect-[2/1] lg:aspect-[21/9]",
    tocSections: [
      { label: "Executive Summary", id: "executive-summary" },
      { label: "The Diabetes Paradox", id: "the-diabetes-paradox" },
      { label: "The Traditional Bottleneck: Downstream Thinking", id: "the-traditional-bottleneck" },
      { label: "Enter Q-RETIX AI: Redefining Target Discovery", id: "enter-q-retix-ai" },
      { label: "Comparative Pharmacology", id: "comparative-pharmacology" },
      { label: "Target Validation and Mechanistic Logic", id: "target-validation" },
      { label: "Therapeutic Implications", id: "therapeutic-implications" },
      { label: "The Q-RETIX AI Discovery Framework", id: "discovery-framework" },
      { label: "Conclusion: AI Beyond Prediction", id: "conclusion" },
    ],
  },
];

export function getPostMeta(slug: string): BlogPostMeta | undefined {
  return blogPostsMeta.find((p) => p.slug === slug);
}
