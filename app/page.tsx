import Book from "@/app/ui/Book";
import Link from "next/link";
import { GetAllBooks } from "./lib/actions";

export default async function Home() {
  const books = await GetAllBooks();

  //console.log(books);

  return (
    <main className="m-4">
      <ul className="grid gap-4">
        {books.map((book, i) => (
          <Link key={i} href={book.slug.current}>
            <Book book={book} />
          </Link>
        ))}
      </ul>
    </main>
  );
}
