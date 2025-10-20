import { fileURLToPath } from "url";
import { dirname, join } from "path";
import sharp from "sharp";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const projectsRoot = join(__dirname, "..");

const targets = [
  {
    name: "desktop",
    path: join(projectsRoot, "src/assets/logo_dark.png"),
  },
  {
    name: "mobile",
    path: join(projectsRoot, "src/assets/mobile_logo_dark.png"),
  },
];

async function trimLogo({ name, path }) {
  const input = sharp(path);
  const metadata = await input.metadata();

  const trimmedBuffer = await input
    .trim() // remove surrounding transparent padding
    .png()
    .toBuffer();

  const outputMeta = await sharp(trimmedBuffer).metadata();

  await sharp(trimmedBuffer).toFile(path);

  return {
    name,
    before: { width: metadata.width, height: metadata.height },
    after: { width: outputMeta.width, height: outputMeta.height },
  };
}

async function run() {
  try {
    const results = [];
    for (const target of targets) {
      results.push(await trimLogo(target));
    }

    for (const { name, before, after } of results) {
      console.log(
        `${name}: ${before.width}x${before.height} -> ${after.width}x${after.height}`,
      );
    }
  } catch (error) {
    console.error("Failed trimming logos:", error);
    process.exitCode = 1;
  }
}

run();
