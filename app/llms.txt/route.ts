import { SITE_URL } from "@/lib/site";

export const dynamic = "force-static";

// llms.txt (https://llmstxt.org): LLM 크롤러용 사이트 요약. 카피 변경 시 함께 갱신.
export function GET() {
  const body = `# Quest Keeper

> Quest Keeper is a fully offline pixel RPG to-do app for iOS, coming soon to the App Store. Procrastinated tasks grow into monsters — finish before the deadline and your hero slays them in one strike. No accounts, no servers, no ads, no tracking; all data stays on the device, qualifying as "Data Not Collected" under Apple's App Privacy standards.

Korean is the primary language (canonical pages live under /ko); English versions are at the same paths under /en. Published by donminzzi lab.

## Pages

- [Landing (Korean)](${SITE_URL}/ko): product overview, how monsters grow, daily dungeon loop, features, FAQ
- [Landing (English)](${SITE_URL}/en): same content in English
- [Privacy Policy (Korean)](${SITE_URL}/ko/privacy): the Korean original prevails
- [Privacy Policy (English)](${SITE_URL}/en/privacy): convenience translation
- [Terms of Service (Korean)](${SITE_URL}/ko/terms): the Korean original prevails
- [Terms of Service (English)](${SITE_URL}/en/terms): convenience translation
`;
  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
