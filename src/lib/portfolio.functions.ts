import { createServerFn } from "@tanstack/react-start";
import { createClient } from "@supabase/supabase-js";
import type { Database } from "@/integrations/supabase/types";

export type PortfolioPhoto = { id: string; category: string; title: string; description: string; image_url: string };

export const listPortfolioPhotos = createServerFn({ method: "GET" }).handler(async (): Promise<PortfolioPhoto[]> => {
  const key = process.env["SUPABASE_PUBLISHABLE_KEY"]!;
  const client = createClient<Database>(process.env["SUPABASE_URL"]!, key, {
    auth: { storage: undefined, persistSession: false, autoRefreshToken: false },
    global: {
      fetch: (input, init) => {
        const h = new Headers(init?.headers);
        if (key.startsWith("sb_") && h.get("Authorization") === `Bearer ${key}`) h.delete("Authorization");
        h.set("apikey", key);
        return fetch(input, { ...init, headers: h });
      },
    },
  });
  const { data, error } = await client
    .from("portfolio_photos")
    .select("id, category, title, description, image_url")
    .order("sort_order")
    .order("created_at");
  if (error) {
    console.error(error);
    return [];
  }
  return data ?? [];
});
