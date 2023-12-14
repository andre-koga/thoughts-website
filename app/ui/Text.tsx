import { PortableTextBlock } from "@sanity/types";
import { PortableText } from "@portabletext/react";
import { book, page } from "@/app/lib/definitions";
import Image from "next/image";
import { formatDate, urlFor } from "@/app/lib/utils";

export default function Text({ page, book }: { page?: page; book?: book }) {
  if (page) {
    return (
      <main className="m-2 mt-0 grid flex-grow items-center overflow-auto rounded-lg bg-black bg-opacity-70 p-4 sm:m-6 sm:mt-0">
        <article className="prose prose-slate prose-invert mx-auto py-4 sm:py-6 md:py-8">
          <h2>{page.title}</h2>
          <PortableText value={page.content} />
          <time className="text-xs text-mid">
            {formatDate(new Date(page.date))}
          </time>
        </article>
      </main>
    );
  }

  if (book) {
    return (
      <main className="m-2 mt-0 grid flex-grow flex-col place-content-between place-items-center justify-stretch overflow-auto rounded-lg bg-black bg-opacity-70 p-4 sm:m-6 sm:mt-0">
        <div className="relative h-20 w-full">
          <Image
            alt="Book cover"
            src={urlFor(book.image).url()}
            fill={true}
            className="overflow-hidden rounded-md object-cover object-center"
          />
        </div>
        <article className="prose prose-slate prose-invert mx-auto py-8 sm:py-12 md:py-16">
          <h2>Preface</h2>
          <PortableText value={book.preface} />
        </article>
        <div className="relative h-20 w-full">
          <Image
            alt="Book cover"
            src={urlFor(book.image).url()}
            fill={true}
            className="overflow-hidden rounded-md object-cover object-bottom"
          />
        </div>
      </main>
    );
  }
}
