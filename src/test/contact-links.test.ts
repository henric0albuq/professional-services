import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";

const PAGES = ["src/routes/index.tsx", "src/routes/portfolio.tsx"];
const CORRECT = "https://www.instagram.com/triadigitalsolucoes";

describe("Instagram contact", () => {
  it.each(PAGES)("%s links only to the correct Instagram page", (page) => {
    const source = readFileSync(resolve(process.cwd(), page), "utf8");
    expect(source).toContain(CORRECT);
    expect(source).not.toMatch(/instagram\.com\/triadigital(?!solucoes)/);
    expect(source).not.toContain("@triadigital<");
  });

  it.each(PAGES)("%s floats an Instagram button above the WhatsApp one", (page) => {
    const source = readFileSync(resolve(process.cwd(), page), "utf8");
    const ig = source.indexOf('aria-label="Instagram @triadigitalsolucoes"');
    const wa = source.indexOf('aria-label="Falar pelo WhatsApp');
    expect(ig).toBeGreaterThan(-1);
    expect(wa).toBeGreaterThan(-1);
    // the Instagram anchor is emitted before the WhatsApp anchor, so it stacks on top
    expect(ig).toBeLessThan(wa);
  });
});
