import path from "node:path";
import { pathToFileURL } from "node:url";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const { chromium } = require("C:/Users/stani/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright");

const source = "C:/Users/stani/Desktop/projects/Pierwsze-Trze-we-Pokolenie/output/html/pierwsze-trzezwe-pokolenie-oferta-wspolpracy-v3.html";
const outputDir = "C:/Users/stani/Desktop/projects/Pierwsze-Trze-we-Pokolenie/tmp/pdfs/offer-v3-isolated";
const browser = await chromium.launch({
  headless: true,
  executablePath: "C:/Program Files/Google/Chrome/Application/chrome.exe",
});

for (let index = 1; index <= 3; index += 1) {
  const page = await browser.newPage({ viewport: { width: 794, height: 1123 }, deviceScaleFactor: 1 });
  await page.goto(pathToFileURL(path.resolve(source)).href, { waitUntil: "networkidle" });
  await page.emulateMedia({ media: "print" });
  await page.addStyleTag({ content: `
    @media print {
      .document { display: block !important; padding: 0 !important; }
      .page { display: none !important; }
      .page:nth-child(${index}) {
        display: block !important;
        position: relative !important;
        width: 210mm !important;
        height: 297mm !important;
        min-height: 0 !important;
        margin: 0 !important;
        break-before: auto !important;
        break-after: auto !important;
        break-inside: avoid !important;
        box-shadow: none !important;
      }
    }
  ` });
  await page.evaluate(() => document.fonts?.ready);
  const layout = index === 1 ? null : await page.evaluate((n) => {
    const slide = document.querySelector(`.page:nth-child(${n})`);
    const pick = (selector) => {
      const el = slide.querySelector(selector);
      const r = el.getBoundingClientRect();
      const s = getComputedStyle(el);
      return { top: r.top, bottom: r.bottom, height: r.height, display: s.display, paddingTop: s.paddingTop };
    };
    const r = slide.getBoundingClientRect();
    return { slide: { top: r.top, bottom: r.bottom, height: r.height }, header: pick('.header'), inner: pick('.page-inner'), content: pick('.content'), kicker: pick('.kicker'), footer: pick('.footer') };
  }, index);
  console.log(JSON.stringify({ index, layout }));
  await page.pdf({
    path: `${outputDir}/page-${index}.pdf`,
    format: "A4",
    printBackground: true,
    displayHeaderFooter: false,
    preferCSSPageSize: true,
    margin: { top: "0", right: "0", bottom: "0", left: "0" },
    pageRanges: "1",
  });
  await page.close();
}

await browser.close();
