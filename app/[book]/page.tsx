import { GetBookData } from "@/app/lib/actions";
import Link from "next/link";

export default async function Page({ params }: { params: { book: string } }) {
  const book = await GetBookData(params.book);

  //console.log(book);

  if (!book.pages) return <div>Book not found</div>;

  return (
    <main>
      <ul>
        {book.pages.map((page, i) => {
          return (
            <Link href={`${params.book}/${page.slug.current}`} key={i}>
              {page.title}
            </Link>
          );
        })}
      </ul>
    </main>
  );
}
