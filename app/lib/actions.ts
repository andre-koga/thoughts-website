import { book, page } from "@/app/lib/definitions";
import { client } from "@/app/lib/utils";

export async function GetAllBooks(): Promise<book[]> {
  const query = `*[_type == "book"]`;
  const books: book[] = await client.fetch(query);

  return books;
}

export async function GetBookData(slug: string): Promise<book> {
  const query = `*[_type == "book" && slug.current == "${slug}"]{
    title, slug, image, preface, status,
    "pages": pages[]->
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
