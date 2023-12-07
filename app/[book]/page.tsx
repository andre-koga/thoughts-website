import { GetBookData } from "@/app/lib/actions";
import { book } from "@/app/lib/definitions";
import Text from "@/app/ui/Text";
import PageItems from "@/app/ui/header/PageItems";

export const revalidate = 0;

export default async function Page({
  params,
  searchParams,
}: {
  params: { book: string };
  searchParams?: { page?: string };
}) {
  const currentPage = Number(searchParams?.page) || 0;
  const book: book = await GetBookData(params.book);

  return (
    <>
      <PageItems
        pages={book.pages}
        currentPage={currentPage}
        slug={book.slug}
      />

      <Text book={book} />
    </>
  );
}
