import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import { Image } from "@sanity/types";

export const client = createClient({
  projectId: "kcartf0h",
  dataset: "production",
  apiVersion: "2023-12-04",
  useCdn: false,
});

export const urlFor = (source: Image) => imageUrlBuilder(client).image(source);
