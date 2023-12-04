import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "kcartf0h",
  dataset: "production",
  apiVersion: "2023-12-04",
  useCdn: true,
});
