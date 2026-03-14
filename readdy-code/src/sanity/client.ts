import { createClient } from "@sanity/client";
import { hasSanityConfig, sanityEnv } from "./env";

export const sanityClient = hasSanityConfig
  ? createClient({
      projectId: sanityEnv.projectId,
      dataset: sanityEnv.dataset,
      apiVersion: sanityEnv.apiVersion,
      useCdn: sanityEnv.useCdn,
      perspective: "published",
      stega: {
        enabled: sanityEnv.enableVisualEditing,
        studioUrl: sanityEnv.studioUrl,
      },
    })
  : null;
