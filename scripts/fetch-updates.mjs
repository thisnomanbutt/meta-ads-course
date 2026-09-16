/* Fetches official announcement feeds and writes data/feed.js.
 *
 * This runs on GitHub's servers, not in the reader's browser. A browser cannot
 * read another company's website directly, so the fetching has to happen here.
 *
 * No dependencies: Node's built-in fetch, and a small tolerant feed parser.
 * Run locally with:  node scripts/fetch-updates.mjs
 */

import { writeFileSync, mkdirSync } from "node:fs";

/* Add or remove sources here. Anything that fails is skipped and reported,
   so one dead feed never stops the others. */
const FEEDS = [
  { source: "Meta Newsroom",        url: "https://about.fb.com/news/feed/" },
  { source: "Meta Developers blog", url: "https://developers.facebook.com/blog/rss/" },
  { source: "Meta Engineering",     url: "https://engineering.fb.com/feed/" }
];

const KEEP = 40;          // most recent items to store
const TIMEOUT = 20000;    // give a slow feed 20 seconds, then move on

/* ---------- a small, forgiving RSS and Atom parser ---------- */

function tag(block, name) {
  const m = block.match(new RegExp(`<${name}[^>]*>([\\s\\S]*?)</${name}>`, "i"));
  return m ? clean(m[1]) : "";
}

function link(block) {
  const rss = block.match(/<link[^>]*>([\s\S]*?)<\/link>/i);
  if (rss && rss[1].trim()) return clean(rss[1]);
  const atom = block.match(/<link[^>]*href="([^"]+)"/i);   // Atom puts it in an attribute
  return atom ? atom[1] : "";
}

function clean(s) {
  return s
    .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, "$1")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#8217;|&#39;|&rsquo;/g, "'")
    .replace(/&#8220;|&#8221;|&ldquo;|&rdquo;/g, '"')
    .replace(/&#8211;|&ndash;/g, "-")
    .replace(/&[a-z]+;/gi, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function isoDate(s) {
  const d = new Date(s);
  return isNaN(d) ? "" : d.toISOString().slice(0, 10);
}

function parse(xml, source) {
  const blocks = xml.match(/<(item|entry)[\s>][\s\S]*?<\/\1>/gi) || [];
  return blocks.map(b => {
    const summary = tag(b, "description") || tag(b, "summary") || tag(b, "content");
    return {
      source,
      title: tag(b, "title"),
      url: link(b),
      date: isoDate(tag(b, "pubDate") || tag(b, "updated") || tag(b, "published")),
      summary: summary.length > 260 ? summary.slice(0, 257).trimEnd() + "..." : summary
    };
  }).filter(i => i.title && i.url);
}

/* ---------- fetch every source ---------- */

async function grab(feed) {
  const stop = AbortSignal.timeout(TIMEOUT);
  const res = await fetch(feed.url, {
    signal: stop,
    headers: { "User-Agent": "meta-ads-mastery-course/1.0 (+update checker)" }
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const items = parse(await res.text(), feed.source);
  if (!items.length) throw new Error("no items found in the feed");
  return items;
}

const items = [];
const report = [];

for (const feed of FEEDS) {
  try {
    const got = await grab(feed);
    items.push(...got);
    report.push(`  ok      ${feed.source} — ${got.length} items`);
  } catch (err) {
    report.push(`  FAILED  ${feed.source} — ${err.message}`);
  }
}

items.sort((a, b) => (b.date || "").localeCompare(a.date || ""));
const kept = items.slice(0, KEEP);

mkdirSync("data", { recursive: true });
writeFileSync(
  "data/feed.js",
  "/* Written automatically by scripts/fetch-updates.mjs. Do not edit by hand:\n" +
  "   your changes will be overwritten the next time the job runs.\n" +
  "   Entries you write yourself belong in data/updates.js. */\n" +
  "window.UPDATE_FEED = " +
  JSON.stringify({ generated: new Date().toISOString(), items: kept }, null, 2) +
  ";\n",
  "utf8"
);

console.log("\nSources:");
console.log(report.join("\n"));
console.log(`\nWrote data/feed.js with ${kept.length} items.\n`);

if (!kept.length) {
  console.error("Every source failed. The feed addresses in FEEDS probably need updating.");
  process.exit(1);
}
