import path from "node:path";
import fs from "node:fs";
import type { Plugin } from "vite";

/**
 * After the client build, generates a static index.html in dist/client
 * so the app can be served as a static site without a server.
 */
export function generateStaticHtmlPlugin(): Plugin {
  return {
    name: "generate-static-html",
    writeBundle(options) {
      // Only run for the client environment build output
      const outDir = options.dir ?? "";
      if (!outDir.includes("client")) return;

      const assetsDir = path.join(outDir, "assets");
      if (!fs.existsSync(assetsDir)) return;

      const files = fs.readdirSync(assetsDir);
      const cssFiles = files
        .filter((f) => f.endsWith(".css"))
        .map((f) => `assets/${f}`);
      const jsFiles = files
        .filter((f) => f.endsWith(".js"))
        .map((f) => `assets/${f}`);

      const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>BySolana — Premium Potato Ecosystem from Burundi</title>
<meta name="description" content="BySolana crafts premium potato-based brands: Slays chips, Kontry fast-food, Solana Cosmetics and Bio-Agro. Made in Burundi.">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@500;700;800&family=Inter:wght@400;500;600;700&display=swap">
${cssFiles.map((f) => `<link rel="stylesheet" href="${f}">`).join("\n")}
</head>
<body>
<div id="app"></div>
${jsFiles.map((f) => `<script type="module" src="${f}"></script>`).join("\n")}
</body>
</html>`;

      fs.writeFileSync(path.join(outDir, "index.html"), html, "utf-8");
      console.log("[generate-static-html] Created dist/client/index.html");
    },
  };
}
