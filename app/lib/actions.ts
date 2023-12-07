import { book, bookCover, page } from "@/app/lib/definitions";
import { client } from "@/app/lib/utils";

export const dynamic = "force-dynamic";

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

export async function GetRecentPost(): Promise<string[]> {
  const query = `*[_type == "page"] | order(date desc)[0]{
    title, slug, _id
  }`;
  const page = await client.fetch(query);

  const booksQuery = `*[_type == "book" && references("${page._id}")][0]{
    slug
  }`;
  const books = await client.fetch(booksQuery);

  return [page.title, page.slug.current, books.slug.current];
  // return ["", "", ""];
}
