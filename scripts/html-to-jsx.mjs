#!/usr/bin/env node
/**
 * Extract marketing page bodies from static HTML and emit JSX fragments.
 */
import fs from "node:fs";
import path from "node:path";

const root = path.resolve(import.meta.dirname, "..");

function htmlToJsx(html) {
  let s = html;
  // Strip HTML comments
  s = s.replace(/<!--[\s\S]*?-->/g, "");
  // Links: .html -> clean paths
  s = s.replace(/href="\/features\.html/g, 'href="/features');
  s = s.replace(/href="\/pricing\.html/g, 'href="/pricing');
  s = s.replace(/href="\/comparison\.html/g, 'href="/comparison');
  s = s.replace(/href="\/about\.html/g, 'href="/about');
  // Attributes
  s = s.replace(/\bclass=/g, "className=");
  s = s.replace(/\bfor=/g, "htmlFor=");
  s = s.replace(/\bstroke-width=/g, "strokeWidth=");
  s = s.replace(/\bstroke-linecap=/g, "strokeLinecap=");
  s = s.replace(/\bstroke-linejoin=/g, "strokeLinejoin=");
  s = s.replace(/\bfill-rule=/g, "fillRule=");
  s = s.replace(/\bclip-rule=/g, "clipRule=");
  s = s.replace(/\bclip-path=/g, "clipPath=");
  s = s.replace(/\bstroke-dasharray=/g, "strokeDasharray=");
  s = s.replace(/\bstroke-opacity=/g, "strokeOpacity=");
  s = s.replace(/\bfill-opacity=/g, "fillOpacity=");
  s = s.replace(/\btabindex=/g, "tabIndex=");
  s = s.replace(/\bcolspan=/g, "colSpan=");
  s = s.replace(/\browspan=/g, "rowSpan=");
  s = s.replace(/\bdatetime=/g, "dateTime=");
  s = s.replace(/\bcrossorigin=/g, "crossOrigin=");
  // Self-closing void elements that may appear as <img ...>
  s = s.replace(/<(img|br|hr|input|meta|link|source|area|base|col|embed|wbr)(\s[^>]*?)(?<!\/)>/gi, "<$1$2 />");
  // Fix double spaces before />
  s = s.replace(/\s+\/>/g, " />");
  // Style attribute: style="a: b; c: d" -> style={{ a: "b", c: "d" }}
  s = s.replace(/style="([^"]*)"/g, (_, css) => {
    const entries = css
      .split(";")
      .map((x) => x.trim())
      .filter(Boolean)
      .map((decl) => {
        const i = decl.indexOf(":");
        if (i === -1) return null;
        let prop = decl.slice(0, i).trim();
        const val = decl.slice(i + 1).trim();
        prop = prop.replace(/-([a-z])/g, (_, c) => c.toUpperCase());
        // Keep CSS vars as-is in quotes
        const jsVal = /^-?\d+(\.\d+)?(px|em|rem|%|vh|vw)?$/.test(val) && !val.includes(" ")
          ? /^(-?\d+(\.\d+)?)$/.test(val)
            ? val
            : JSON.stringify(val)
          : JSON.stringify(val);
        return `${prop}: ${jsVal}`;
      })
      .filter(Boolean);
    return `style={{ ${entries.join(", ")} }}`;
  });
  // Escape lone braces in text? Rare in this site.
  return s.trim();
}

function extractBody(html) {
  // Between </header> and <footer
  const start = html.indexOf("</header>");
  const end = html.indexOf("<footer");
  if (start === -1 || end === -1) throw new Error("Could not find header/footer bounds");
  return html.slice(start + "</header>".length, end).trim();
}

const pages = [
  { file: "index.html", out: "components/pages/HomeBody.tsx", exportName: "HomeBody" },
  { file: "features.html", out: "components/pages/FeaturesBody.tsx", exportName: "FeaturesBody" },
  { file: "pricing.html", out: "components/pages/PricingBody.tsx", exportName: "PricingBody" },
  { file: "comparison.html", out: "components/pages/ComparisonBody.tsx", exportName: "ComparisonBody" },
  { file: "about.html", out: "components/pages/AboutBody.tsx", exportName: "AboutBody" },
];

fs.mkdirSync(path.join(root, "components/pages"), { recursive: true });

for (const page of pages) {
  const html = fs.readFileSync(path.join(root, page.file), "utf8");
  const body = extractBody(html);
  const jsx = htmlToJsx(body);
  const content = `export function ${page.exportName}() {\n  return (\n    <>\n${jsx
    .split("\n")
    .map((l) => (l ? `      ${l}` : ""))
    .join("\n")}\n    </>\n  );\n}\n`;
  fs.writeFileSync(path.join(root, page.out), content);
  console.log("wrote", page.out);
}
