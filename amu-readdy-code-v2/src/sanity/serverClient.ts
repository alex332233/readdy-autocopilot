import { createClient } from "@sanity/client";
import { sanityEnv } from "./env";
import { getServerEnv } from "./serverEnv";

export function createSanityServerClient(perspective: "published" | "drafts" = "published") {
  return createClient({
    projectId: sanityEnv.projectId,
    dataset: sanityEnv.dataset,
    apiVersion: sanityEnv.apiVersion,
    useCdn: false,
    token: getServerEnv("SANITY_API_READ_TOKEN"),
    perspective,
  });
}
