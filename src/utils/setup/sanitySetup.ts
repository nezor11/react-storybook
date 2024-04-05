import { createClient } from "@sanity/client";

export const sanityAPI = createClient({
  projectId: "6zr8au58",
  dataset: "production",
  useCdn: true, // set to `false` to bypass the edge cache
  apiVersion: "2022-03-07", // use current date (YYYY-MM-DD) to target the latest API version
  perspective: "published", // 'raw' | 'published' | 'previewDrafts'
});
