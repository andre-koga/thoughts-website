import { GetBookData, GetPageData } from "@/app/lib/actions";
import { book, page } from "@/app/lib/definitions";
import Text from "@/app/ui/Text";
import PageItems from "@/app/ui/header/PageItems";

export const revalidate = 0;

export default async function Page({
  params,
  searchParams,
}: {
  params: { book: string; post: string };
  searchParams?: { page?: string };
}) {
  const currentPage = Number(searchParams?.page) || 0;
  const book: book = await GetBookData(params.book);
  const page: page = await GetPageData(params.post);

  return (
    <>
      <PageItems
        pages={book.pages}
        currentPage={currentPage}
        slug={book.slug}
      />
      <Text page={page} />
    </>
  );
}
