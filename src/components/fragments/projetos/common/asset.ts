export function resolveAssetUrl(path: string | undefined): string | null {
  if (!path) return null;
  const clean = path.replace(/^\uFEFF/, "").trim();
  if (clean.startsWith("/images/projects/")) return clean.replace(/^\/images\//, "/");
  if (clean.startsWith("/")) return clean;
  if (clean.startsWith("src/assets/projects/")) {
    return "/projects/" + clean.replace(/^src\/assets\/projects\//, "");
  }
  return null;
}

