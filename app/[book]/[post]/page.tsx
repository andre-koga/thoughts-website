import { GetPageData } from "@/app/lib/actions";
import { page } from "@/app/lib/definitions";
import Text from "@/app/ui/Text";
import { PortableText } from "@portabletext/react";

export default async function Page({
  params,
}: {
  params: { book: string; post: string };
}) {
  const page: page = await GetPageData(params.post);

  return <Text text={page.content} />;
}
