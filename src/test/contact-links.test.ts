import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";

const PAGES = ["src/routes/index.tsx", "src/routes/portfolio.tsx"];
const CORRECT = "https://www.instagram.com/triadigitalsolucoes";
const WA_NUMBER = "5561996038347";
const WA_DISPLAY = "(61) 99603-8347";

describe("WhatsApp contact", () => {
  it.each(PAGES)("%s sends every WhatsApp link to %s", (page) => {
    const source = readFileSync(resolve(process.cwd(), page), "utf8");
    const links = source.match(/https:\/\/wa\.me\/\d+/g) ?? [];
    expect(links.length).toBeGreaterThan(0);
    expect([...new Set(links)]).toEqual([`https://wa.me/${WA_NUMBER}`]);
  });

  it.each(PAGES)("%s shows the phone number as %s", (page) => {
    const source = readFileSync(resolve(process.cwd(), page), "utf8");
    expect(source).toContain(WA_DISPLAY);
    expect(source).not.toMatch(/99231-6112|98278-1806/);
  });
});

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
