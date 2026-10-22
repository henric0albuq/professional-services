import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";

// The page is one big imported route, so read it as text and slice it into the
// top-level <section> blocks the page is built from.
function readSections(file: string) {
  const sections: { open: string; body: string }[] = [];
  let current: { open: string; body: string } | null = null;
  for (const line of readFileSync(resolve(process.cwd(), file), "utf8").split("\n")) {
    if (!current && line.includes("<section")) {
      current = { open: line, body: line };
    } else if (current) {
      current.body += `\n${line}`;
      if (line.includes("</section>")) {
        sections.push(current);
        current = null;
      }
    }
  }
  return sections;
}

describe("Pacotes section", () => {
  const sections = readSections("src/routes/index.tsx");
  const pacotes = sections.find((s) => s.open.includes('id="pacotes"'));

  it("exists", () => {
    expect(pacotes).toBeDefined();
  });

  it("shows no prices in the package cards or in the WhatsApp messages they send", () => {
    expect(pacotes!.body).not.toMatch(/R\$/);
    expect(pacotes!.body).not.toMatch(/R%24/);
    expect(pacotes!.body).not.toMatch(/Os valores apresentados/);
  });

  it("has no comparison section anywhere on the page", () => {
    expect(sections.some((s) => s.body.includes(">Comparação<"))).toBe(false);
    expect(sections.some((s) => s.body.includes("Serviço individual, dois serviços"))).toBe(false);
  });
});
