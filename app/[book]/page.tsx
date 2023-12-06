import { GetBookData } from "@/app/lib/actions";
import { book } from "@/app/lib/definitions";
import { PortableText } from "@portabletext/react";
import Text from "@/app/ui/Text";

export default async function Page({ params }: { params: { book: string } }) {
  const book: book = await GetBookData(params.book);

  return <Text book={book} />;
}
