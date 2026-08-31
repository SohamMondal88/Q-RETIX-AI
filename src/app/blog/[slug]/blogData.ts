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
      "How Structural AI Bypassed the Electrostatic Charge Trap to Reignite a Dormant Therapeutic Target.",
    category: "Research",
    date: "July 4, 2026",
    readTime: "15 min read",
    author: "Q-RETIX Research Team",
    authorRole: "Structural AI Drug Discovery, Q-RETIX.AI",
    cover: "/images/blog/blog-1.jpg",
    coverAspect: "aspect-video",
    tocSections: [
      { label: "Executive Summary", id: "executive-summary" },
      { label: "The AIM2 Paradox", id: "the-aim2-paradox" },
      { label: "Traditional Bottleneck", id: "the-traditional-bottleneck" },
      { label: "Q-RETIX.AI Solution", id: "enter-q-retixai" },
      { label: "Comparative Pharmacology", id: "comparative-pharmacology" },
      { label: "Market Opportunity", id: "reviving-a-dormant-market" },
      { label: "Conclusion", id: "conclusion" },
    ],
  },
  {
    slug: "structural-ai-discovery-matrix",
    title: "Structural AI Discovery Matrix: Beyond Static Crystallography",
    excerpt:
      "Why dynamic thermodynamic ensembles are the future of target identification and cryptic pocket discovery.",
    category: "AI Research",
    date: "June 28, 2026",
    readTime: "12 min read",
    author: "Q-RETIX Research Team",
    authorRole: "AI Research, Q-RETIX.AI",
    cover: "/images/blog/blog-2.jpg",
    coverAspect: "aspect-video",
    tocSections: [
      { label: "Introduction", id: "introduction" },
      { label: "Traditional Methods", id: "traditional-methods" },
      { label: "Dynamic Ensembles", id: "dynamic-ensembles" },
      { label: "Pocket Discovery", id: "pocket-discovery" },
      { label: "Future Implications", id: "future-implications" },
    ],
  },
  {
    slug: "allosteric-modulation-immunology",
    title: "Allosteric Modulation: The Next Frontier in Immunology",
    excerpt:
      "Exploring how allosteric molecular wedges are reshaping autoimmune drug design and inflammasome inhibition.",
    category: "Drug Discovery",
    date: "June 20, 2026",
    readTime: "10 min read",
    author: "Q-RETIX Research Team",
    authorRole: "Drug Discovery, Q-RETIX.AI",
    cover: "/images/blog/blog-3.jpg",
    coverAspect: "aspect-video",
    tocSections: [
      { label: "Overview", id: "overview" },
      { label: "Allosteric Mechanisms", id: "allosteric-mechanisms" },
      { label: "Drug Design", id: "drug-design" },
      { label: "Clinical Applications", id: "clinical-applications" },
    ],
  },
  {
    slug: "aim2-therapeutic-pipeline",
    title: "From Charge Trap to Cure: The AIM2 Therapeutic Pipeline",
    excerpt:
      "Mapping the multi-billion dollar market opportunity in SLE, psoriasis, and neurodegenerative disease.",
    category: "Market Analysis",
    date: "June 15, 2026",
    readTime: "8 min read",
    author: "Q-RETIX Research Team",
    authorRole: "Market Analysis, Q-RETIX.AI",
    cover: "/images/blog/blog-4.jpg",
    coverAspect: "aspect-video",
    tocSections: [
      { label: "Market Overview", id: "market-overview" },
      { label: "SLE Market", id: "sle-market" },
      { label: "Psoriasis Market", id: "psoriasis-market" },
      { label: "Neurodegenerative Diseases", id: "neurodegeneration" },
      { label: "Pipeline Strategy", id: "pipeline-strategy" },
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
    cover: "/images/blog/blog-2.jpg",
    coverAspect: "aspect-video",
    tocSections: [
      { label: "Executive Summary", id: "executive-summary" },
      { label: "The Diabetes Paradox", id: "the-diabetes-paradox" },
      { label: "Traditional Bottleneck", id: "the-traditional-bottleneck" },
      { label: "Q-RETIX AI Discovery", id: "enter-q-retix-ai" },
      { label: "Comparative Pharmacology", id: "comparative-pharmacology" },
      { label: "Target Validation", id: "target-validation" },
      { label: "Therapeutic Implications", id: "therapeutic-implications" },
      { label: "Discovery Framework", id: "discovery-framework" },
      { label: "Conclusion", id: "conclusion" },
    ],
  },
];

export function getPostMeta(slug: string): BlogPostMeta | undefined {
  return blogPostsMeta.find((p) => p.slug === slug);
}
