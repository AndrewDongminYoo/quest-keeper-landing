import { readFile } from "node:fs/promises";
import path from "node:path";
import { marked } from "marked";
import type { Locale } from "./site";

export type LegalDoc = "privacy" | "terms";

/** content/legal/<doc>.<locale>.md 를 HTML로 렌더링한다. 한국어 원문이 source of truth. */
export async function legalHtml(doc: LegalDoc, locale: Locale): Promise<string> {
  const file = path.join(process.cwd(), "content", "legal", `${doc}.${locale}.md`);
  const md = await readFile(file, "utf8");
  return marked.parse(md, { async: false });
}
