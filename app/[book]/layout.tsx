import { GetBookData, GetColors } from "@/app/lib/actions";
import { urlFor } from "@/app/lib/utils";
import PageItems from "@/app/ui/header/PageItems";

export default async function Layout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { book: string };
}) {
  const book = await GetBookData(params.book);
  const url = urlFor(book.image).url();

  const colors = await GetColors(url);

  return (
    <>
      <ul className="mb-4 flex flex-wrap content-start items-start gap-2">
        <PageItems book={book} />
      </ul>
      {children}
    </>
  );
}
