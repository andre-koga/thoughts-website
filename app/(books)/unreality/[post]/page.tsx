import { GetPageData } from "@/app/lib/actions";
import { page } from "@/app/lib/definitions";
import { PortableText } from "@portabletext/react";

export default async function Page({
  params,
}: {
  params: { book: string; post: string };
}) {
  const page: page = await GetPageData(params.post);

  return (
    <main>
      <article className="prose prose-slate mx-auto">
        <PortableText value={page.content} />
      </article>
    </main>
  );
}
