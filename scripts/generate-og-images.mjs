import fs from "node:fs";
import path from "node:path";
import { execFileSync } from "node:child_process";

const root = process.cwd();
const outputDir = path.join(root, "public/og/pages");
const workDir = path.join(root, ".og-work");
const logoPath = path.join(root, "public/images/brand/logo-1024.png");
const logoData = fs.readFileSync(logoPath).toString("base64");

const pages = [
  ["home", "Caring for Aging Parents | Printable Checklists & Planners", "Large-print, fill-in-by-hand printable PDF sheets that help families stay organized.", "Home", "#B96038"],
  ["about", "About Our Printable Sheets | Caring for Aging Parents", "Why we make calm, large-print, fill-in-by-hand sheets for everyday family caregiving.", "About", "#81977A"],
  ["contact", "Contact Us | Caring for Aging Parents", "Questions about downloading, printing, or using your family caregiving sheets?", "Contact", "#E89B69"],
  ["disclaimer", "Organizational Tools Disclaimer | Caring for Aging Parents", "Plain-paper organizational tools—not medical, legal, or financial advice.", "Important information", "#52332A"],
  ["faq", "Frequently Asked Questions | Caring for Aging Parents", "Plain answers about printable PDFs, printing, Gumroad checkout, and family use.", "FAQ", "#B96038"],
  ["free-sample", "Free Sample Printable Page | Caring for Aging Parents", "Try a large-print caregiving sample sheet before you buy a full pack.", "Free sample", "#81977A"],
  ["guides", "Family Organization Guides | Caring for Aging Parents", "Practical, plain-English guides for printing, sharing care, and organizing safely.", "Guides", "#015A67"],
  ["guides-how-to-print-large-print-sheets", "Printing Large-Print Sheets | Caring for Aging Parents", "Printer settings, paper choices, and the 30-second arm's-length readability test.", "Guide · Printing", "#015A67"],
  ["guides-sibling-care-handover-routine", "Sibling Care Handover Routine | Caring for Aging Parents", "A shared kitchen sheet for everyday updates without endless group texts.", "Guide · Family care", "#B96038"],
  ["guides-where-things-are-without-passwords", "Where Things Are Guide | Caring for Aging Parents", "A safe pointer map for keys, folders, and utilities—without writing down passwords.", "Guide · Safety", "#81977A"],
  ["how-to-print", "How to Print Large-Print PDFs | Caring for Aging Parents", "How to print at 100% scale on US Letter or A4 paper, in clear black and white.", "How to print", "#E89B69"],
  ["privacy", "Privacy Policy | Caring for Aging Parents", "A plain-language privacy policy for a calm, low-tracking printable website.", "Privacy", "#52332A"],
  ["shop", "Printable Caregiving Sheets | Caring for Aging Parents", "Browse large-print printable PDFs for handovers, phone lists, and household pointers.", "Shop", "#B96038"],
  ["shop-caregiver-handover-sheet", "Caregiver Handover Sheet | Caring for Aging Parents", "A clear daily and weekly sheet so family helpers can pass the baton.", "Printable · 8 pages", "#015A67"],
  ["shop-who-to-call-sheet", "Who-to-Call Sheet | Caring for Aging Parents", "A large-print phone directory for the fridge or telephone table.", "Printable · 6 pages", "#81977A"],
  ["shop-where-everything-is-organizer", "Where-Everything-Is Organizer | Caring for Aging Parents", "Record where household items and folders live—without passwords or account numbers.", "Printable · 12 pages", "#B96038"],
];

function escapeHtml(value) {
  return value.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;").replaceAll("'", "&#39;");
}

fs.mkdirSync(outputDir, { recursive: true });
fs.mkdirSync(workDir, { recursive: true });

for (const [slug, title, description, label, accent] of pages) {
  const htmlPath = path.join(workDir, `${slug}.html`);
  const pngPath = path.join(workDir, `${slug}.png`);
  const jpgPath = path.join(outputDir, `${slug}.jpg`);
  const html = `<!doctype html>
<html><head><meta charset="utf-8"><style>
*{box-sizing:border-box}html,body{margin:0;width:1200px;height:630px;overflow:hidden}body{background:#FAF8EC;color:#111;font-family:Arial,sans-serif}.card{position:relative;width:1200px;height:630px;padding:58px 68px;overflow:hidden}.wash{position:absolute;inset:0;background:linear-gradient(125deg,#FAF8EC 0%,#FAF8EC 62%,#F1EEDB 62%,#F1EEDB 100%)}.shape-a{position:absolute;width:430px;height:430px;right:-86px;top:-108px;border-radius:50%;background:${accent};opacity:.18}.shape-b{position:absolute;width:310px;height:310px;right:178px;bottom:-184px;border-radius:50%;background:#015A67;opacity:.14}.content{position:relative;z-index:2;width:720px}.brand{display:flex;align-items:center;gap:15px;color:#015A67;font-size:23px;font-weight:700;letter-spacing:.2px}.brand img{width:55px;height:55px;border:1px solid #D8D5C5;border-radius:50%;padding:3px;background:#fff;object-fit:contain}.rule{width:90px;height:7px;margin:36px 0 22px;border-radius:8px;background:${accent}}.label{color:#015A67;font-size:20px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase}.title{margin:14px 0 18px;color:#015A67;font-family:Georgia,serif;font-size:48px;line-height:1.08;letter-spacing:-1px}.description{max-width:680px;color:#333;font-size:24px;line-height:1.35}.footer{position:absolute;z-index:2;left:68px;bottom:42px;color:#52332A;font-size:18px;font-weight:700}.paper{position:absolute;z-index:2;right:92px;top:164px;width:295px;height:350px;padding:25px 23px;border-radius:8px;background:#fff;box-shadow:0 20px 42px rgba(82,51,42,.18);transform:rotate(5deg)}.paper:before{content:"";position:absolute;left:23px;right:23px;top:28px;height:12px;border-radius:8px;background:${accent};opacity:.8}.paper:after{content:"";position:absolute;left:23px;right:44px;top:72px;height:155px;background:repeating-linear-gradient(to bottom,#D8D5C5 0 3px,transparent 3px 29px);opacity:.85}.paper-dot{position:absolute;right:25px;bottom:28px;width:52px;height:52px;border-radius:50%;background:#E89B69;opacity:.72}.mini{position:absolute;z-index:3;right:82px;bottom:72px;width:150px;height:100px;padding:18px;border-radius:7px;background:#81977A;box-shadow:0 12px 25px rgba(82,51,42,.14);transform:rotate(-8deg)}.mini span{display:block;height:8px;margin:8px 0;border-radius:8px;background:#FAF8EC;opacity:.9}
</style></head><body><main class="card"><div class="wash"></div><div class="shape-a"></div><div class="shape-b"></div><div class="content"><div class="brand"><img src="data:image/png;base64,${logoData}" alt=""> <span>Caring for Aging Parents</span></div><div class="rule"></div><div class="label">${escapeHtml(label)}</div><div class="title">${escapeHtml(title)}</div><div class="description">${escapeHtml(description)}</div></div><div class="paper"><div class="paper-dot"></div></div><div class="mini"><span></span><span></span><span></span></div><div class="footer">Large-print tools for calmer family caregiving</div></main></body></html>`;
  fs.writeFileSync(htmlPath, html);
  execFileSync("chromium", ["--headless", "--no-sandbox", "--disable-gpu", "--hide-scrollbars", "--force-device-scale-factor=1", "--window-size=1200,630", `--screenshot=${pngPath}`, `file://${htmlPath}`], { stdio: "ignore" });
  execFileSync("python3", ["-c", `from PIL import Image; Image.open(r'''${pngPath}''').convert('RGB').save(r'''${jpgPath}''', quality=92, optimize=True)`]);
}

console.log(`Generated ${pages.length} unique OG JPEGs in ${path.relative(root, outputDir)}`);
