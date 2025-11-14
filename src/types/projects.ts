export type GalleryItem = {
  src: string;
  alt?: string;
  orientation?: "mobile" | "desktop" | string;
};

export type Project = {
  id: string;
  title: string;
  subtitleMain: string;
  subtitleAccent: string;
  type: string;
  status: string;
  objective?: string;
  descriptionShort?: string;
  descriptionLong?: string;
  techStack?: {
    primary?: string[];
    secondary?: string[];
  };
  links?: {
    website?: string | null;
    android?: string | null;
    ios?: string | null;
  };
  media?: {
    cover?: string;
    gallery?: { type: "single" | "multi"; items: GalleryItem[] };
  };
};

