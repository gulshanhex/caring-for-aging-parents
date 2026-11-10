import fs from "node:fs";
import path from "node:path";
import { execSync } from "node:child_process";

const root = process.cwd();
const offlineMarker = path.join(root, "node_modules", ".offline-vm");
const kleurPath = path.join(root, "node_modules", "kleur");

// In the offline VM sandbox, skip network install.
// On Cloudflare Pages / GitHub CI, if npm ci used a minimal lockfile and skipped transitive deps like 'kleur',
// run a full npm install --no-package-lock so all Astro + Vite + Tailwind v4 transitive packages are present.
if (!fs.existsSync(offlineMarker) && !fs.existsSync(kleurPath)) {
  console.log("[ensure-deps] Installing full transitive dependency tree for Astro build...");
  try {
    const lockPath = path.join(root, "package-lock.json");
    if (fs.existsSync(lockPath)) {
      fs.unlinkSync(lockPath);
    }
    execSync("npm install --no-package-lock --no-audit --no-fund", {
      stdio: "inherit",
      cwd: root,
    });
  } catch (err) {
    console.error("[ensure-deps] Warning during npm install:", err);
  }
}
