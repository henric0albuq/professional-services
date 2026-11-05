import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";

const PAGE = "src/routes/index.tsx";
const CSS = "src/styles/import-repairs.css";

const read = (path: string) => readFileSync(resolve(process.cwd(), path), "utf8");

describe("Contact preview shown as a phone screen", () => {
  it("renders the pre-filled message inside a phone mockup of a conversation with TRIA+", () => {
    const source = read(PAGE);
    expect(source).toContain('className="wa-phone"');
    expect(source).toContain('className="wa-screen"');
    expect(source).toContain('className="wa-chat"');
    expect(source).toContain("TRIA+ Soluções Digitais");
    expect(source).toContain('className="wa-bubble wa-bubble--out"');
  });

  it("no longer paints the preview with the neon green frame", () => {
    const source = read(PAGE);
    const start = source.indexOf('className="wa-phone"');
    const end = source.indexOf("A mensagem é montada");
    expect(start).toBeGreaterThan(-1);
    expect(end).toBeGreaterThan(start);

    const preview = source.slice(start, end);
    expect(preview).not.toContain("bg-site-import-foreground");
    expect(preview).not.toContain("bg-site-import-primary");
    expect(preview).not.toContain("import-message");
  });

  it("keeps the screen soft white and the header a muted green", () => {
    const css = read(CSS);
    expect(css).toMatch(/\.wa-screen\s*\{[^}]*background:\s*#f7f8f7/);
    expect(css).toMatch(/\.wa-chat\s*\{[^}]*background-color:\s*#f3f5f3/);
    expect(css).toMatch(/\.wa-header\s*\{[^}]*background:\s*#12694f/);
    expect(css).toMatch(/\.wa-bubble--out\s*\{[^}]*background:\s*#d9fdd3/);
  });
});
