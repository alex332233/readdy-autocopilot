const env = import.meta.env;

export const sanityEnv = {
  projectId: env.VITE_SANITY_PROJECT_ID || "",
  dataset: env.VITE_SANITY_DATASET || "",
  apiVersion: env.VITE_SANITY_API_VERSION || "2025-01-01",
  useCdn: env.VITE_SANITY_USE_CDN !== "false",
  enableVisualEditing: env.VITE_ENABLE_VISUAL_EDITING === "true",
  studioUrl: env.VITE_SANITY_STUDIO_URL || "/studio",
};

export const hasSanityConfig = Boolean(sanityEnv.projectId && sanityEnv.dataset);
