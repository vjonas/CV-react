// server/pdf-export.js
// Usage: node pdf-export.js <url> <output.pdf>
// run like this: $ node ./server/pdf-export.mjs http://localhost:5173/ output.pdf

import { chromium } from "playwright";

async function exportToPDF(url, outputPath) {
  const browser = await chromium.launch({});
  const page = await browser.newPage();
  try {
    await page.goto(url, { waitUntil: "networkidle" });
    await page.pdf({
      path: outputPath,
      printBackground: true,
      width: "1240px",
      height: "2700px",
    });
    console.log(`PDF saved to ${outputPath}`);
  } catch (err) {
    console.error("Error exporting PDF:", err);
  } finally {
    await browser.close();
  }
}

// CLI usage
// if (import.meta.main === true) {
const [, , url, outputPath] = process.argv;
if (!url || !outputPath) {
  console.log("Usage: node pdf-export.js <url> <output.pdf>");
  process.exit(1);
}
exportToPDF(url, outputPath);
// }
