import { Image, PortableTextBlock, Slug } from "@sanity/types";

export type book = {
  title: string;
  slug: Slug;
  image: Image;
  preface: PortableTextBlock[];
  status: "finished" | "ongoing" | "paused";
  pages: page[];
  _updatedAt: string;
  _createdAt: string;
  _rev: string;
  _type: string;
  _id: string;
};

export type page = {
  title: string;
  slug: Slug;
  date: string;
  content: PortableTextBlock[];
  _updatedAt: string;
  _createdAt: string;
  _rev: string;
  _type: string;
  _id: string;
};
