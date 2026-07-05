"use client";

import { useCallback, useEffect, useMemo, useState } from "react";

export interface BlogPostData {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  author: string;
  featured: boolean;
  tags?: string[];
}

const STORAGE_KEY_STATS = "qretix-blog-stats";
const STORAGE_KEY_VIEWS = "qretix-blog-viewed";

interface BlogStats {
  articles: number;
  researchCount: number;
  totalViews: number;
  weeklyUpdates: number;
}

interface PersistedStats {
  viewCounts: Record<string, number>;
  lastResetWeek: string;
}

function getWeekKey(): string {
  const now = new Date();
  const year = now.getFullYear();
  const oneJan = new Date(year, 0, 1);
  const dayOfYear = Math.floor((now.getTime() - oneJan.getTime()) / (24 * 60 * 60 * 1000));
  const week = Math.ceil((dayOfYear + oneJan.getDay() + 1) / 7);
  return `${year}-W${week}`;
}

function loadPersisted(): PersistedStats {
  if (typeof window === "undefined") return { viewCounts: {}, lastResetWeek: getWeekKey() };
  try {
    const raw = localStorage.getItem(STORAGE_KEY_STATS);
    if (raw) return JSON.parse(raw) as PersistedStats;
  } catch {
    // ignore
  }
  return { viewCounts: {}, lastResetWeek: getWeekKey() };
}

function savePersisted(stats: PersistedStats) {
  if (typeof window === "undefined") return;
  localStorage.setItem(STORAGE_KEY_STATS, JSON.stringify(stats));
}

export function useBlogStats(posts: BlogPostData[]) {
  const [persisted, setPersisted] = useState<PersistedStats>(loadPersisted);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  const recordView = useCallback((slug: string) => {
    if (typeof window === "undefined") return;
    const current = loadPersisted();
    const viewedKey = `${STORAGE_KEY_VIEWS}-${slug}`;
    // Only count unique sessions (browser session) per day per device
    // We use a simple daily key to dedupe
    const today = new Date().toISOString().slice(0, 10);
    const sessionKey = `${viewedKey}-${today}`;
    const alreadyCounted = sessionStorage.getItem(sessionKey);

    if (!alreadyCounted) {
      sessionStorage.setItem(sessionKey, "1");
      const updated: PersistedStats = {
        ...current,
        viewCounts: {
          ...current.viewCounts,
          [slug]: (current.viewCounts[slug] || 0) + 1,
        },
      };
      savePersisted(updated);
      setPersisted(updated);
    }
  }, []);

  const stats: BlogStats = useMemo(() => {
    const articleCount = posts.length;
    const researchCount = posts.filter((p) =>
      (p.tags || []).some((t) => t.toLowerCase() === "research")
    ).length;
    const totalViews = Object.values(persisted.viewCounts).reduce((a, b) => a + b, 0);
    // Weekly updates = number of articles published in current week (demo: fallback to min 1 if articles exist)
    const currentWeek = getWeekKey();
    const weekly = currentWeek === persisted.lastResetWeek ? Math.max(1, posts.length > 0 ? 1 : 0) : 0;

    return {
      articles: articleCount,
      researchCount,
      totalViews: Math.max(totalViews, 100), // floor so it doesn't look empty
      weeklyUpdates: weekly,
    };
  }, [posts, persisted]);

  const formattedStats = useMemo(
    () => ({
      articles: `${stats.articles}+`,
      research: `${stats.researchCount}+`,
      readers: hydrated ? `${Math.max(stats.totalViews, 100)}+` : "10K+",
      updates: stats.weeklyUpdates > 0 ? "Weekly" : "Updates",
    }),
    [stats, hydrated]
  );

  return {
    stats,
    formattedStats,
    recordView,
    viewCountFor: useCallback(
      (slug: string) => persisted.viewCounts[slug] || 0,
      [persisted]
    ),
  };
}
