how to export the pdf
1. launch frontend: npm run dev
2. run the server pdf export: `node ./server/pdf-export.mjs http://localhost:5173 output2.pdf`

The output is paginated A4. Page size, margins, print font size and the
page-break rules live in the `@media print` block of `src/index.css`; the
export script only asks Chrome to honour them (`preferCSSPageSize: true`).

The export drives the Google Chrome that is already installed on the machine
(`channel: "chrome"`), so `npx playwright install` is not needed. That command
downloads Chromium 125 MiB to 100% and then hangs on extraction with
playwright 1.52 on Node 26, which is why it is no longer part of the steps.
If Chrome is ever missing, the script falls back to Playwright's own browser,
and only then does `npx playwright install` become relevant.

