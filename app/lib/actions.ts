import { book, bookCover, page } from "@/app/lib/definitions";
import { client } from "@/app/lib/utils";

export async function GetAllBookCovers(): Promise<bookCover[]> {
  const query = `*[_type == "book"] | order(status desc, date desc) {
    title, slug, image, status
  }`;
  const books: book[] = await client.fetch(query, { cache: "no-store" });

  return books;
}

export async function GetAllBooks(): Promise<book[]> {
  const query = `*[_type == "book"]`;
  const books: book[] = await client.fetch(query, { cache: "no-store" });

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
  const book = await client.fetch(query, { cache: "no-store" });

  return book[0];
}

export async function GetPageData(slug: string): Promise<page> {
  const query = `*[_type == "page" && slug.current == "${slug}"]`;
  const page = await client.fetch(query, { cache: "no-store" });

  return page[0];
}

export async function GetRecentPost(): Promise<string[]> {
  const query = `*[_type == "page"] | order(date desc)[0]{
    title, slug, _id
  }`;
  const page = await client.fetch(query, { cache: "no-store" });

  const booksQuery = `*[_type == "book" && references("${page._id}")][0]{
    slug
  }`;
  const books = await client.fetch(booksQuery, { cache: "no-store" });

  return [page.title, page.slug.current, books.slug.current];
}
