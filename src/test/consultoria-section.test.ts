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

describe("Consultoria section", () => {
  const sections = readSections("src/routes/index.tsx");
  const consultoria = sections.find((s) => s.open.includes('id="consultoria"'));

  it("exists and sits right after the pacotes section", () => {
    expect(consultoria).toBeDefined();
    const pacotesIndex = sections.findIndex((s) => s.open.includes('id="pacotes"'));
    const consultoriaIndex = sections.findIndex((s) => s.open.includes('id="consultoria"'));
    expect(consultoriaIndex).toBe(pacotesIndex + 1);
  });

  it("lists every consulting service the client described", () => {
    for (const title of [
      "Diagnóstico Empresarial",
      "Planejamento Estratégico",
      "Consultoria em Gestão Empresarial",
      "Gestão de Riscos",
      "Consultoria para o Agronegócio",
      "Estratégia Comercial e Desenvolvimento de Negócios",
    ]) {
      expect(consultoria!.body).toContain(title);
    }
  });

  it("keeps the closing pitch and the diagnosis call to action", () => {
    expect(consultoria!.body).toContain("Consultoria alinhada à realidade do seu negócio");
    expect(consultoria!.body).toContain("Vamos desenvolver o próximo passo do seu negócio?");
    expect(consultoria!.body).toContain("Solicite um diagnóstico inicial");
  });

  it("shows no prices, like the packages section", () => {
    expect(consultoria!.body).not.toMatch(/R\$/);
    expect(consultoria!.body).not.toMatch(/R%24/);
  });

  it("is reachable from the menu and the footer", () => {
    const source = readFileSync(resolve(process.cwd(), "src/routes/index.tsx"), "utf8");
    expect(source.match(/href="#consultoria"/g)).toHaveLength(3);
  });
});
