import { resolveAssetUrl } from "./asset";

export function RealSizeImage({
  src,
  alt,
  className = "",
  maxW = "90vw",
  maxH = "75vh",
}: {
  src?: string;
  alt: string;
  className?: string;
  maxW?: string;
  maxH?: string;
}) {
  const url = resolveAssetUrl(src || "") || src || "";
  return (
    <img
      src={url}
      alt={alt}
      title={alt}
      className={className}
      style={{ maxWidth: maxW, maxHeight: maxH, width: "auto", height: "auto" }}
      loading="lazy"
    />
  );
}

