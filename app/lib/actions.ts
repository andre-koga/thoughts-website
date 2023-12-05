import { Color, book, bookCover, page } from "@/app/lib/definitions";
import { client } from "@/app/lib/utils";
const { getPaletteFromURL } = require("color-thief-node");

export async function GetColors(url: string): Promise<Color[]> {
  const colorPallete = await getPaletteFromURL(url, 2);
  return colorPallete;
}

export async function GetAllBookCovers(): Promise<bookCover[]> {
  const query = `*[_type == "book"]{
    title, slug, image
  }`;
  const books: book[] = await client.fetch(query);

  return books;
}

export async function GetAllBooks(): Promise<book[]> {
  const query = `*[_type == "book"]`;
  const books: book[] = await client.fetch(query);

  return books;
}

export async function GetBookData(slug: string): Promise<book> {
  const query = `*[_type == "book" && slug.current == "${slug}"]{
    title, slug, image, preface, status,
    pages[]->{
      title, slug
    }
  }
  `;
  const book = await client.fetch(query);

  return book[0];
}

export async function GetPageData(slug: string): Promise<page> {
  const query = `*[_type == "page" && slug.current == "${slug}"]`;
  const page = await client.fetch(query);

  return page[0];
}
