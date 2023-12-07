import { PortableTextBlock } from "@sanity/types";
import { PortableText } from "@portabletext/react";
import { book, page } from "@/app/lib/definitions";
import Image from "next/image";
import { urlFor } from "../lib/utils";

export default function Text({ page, book }: { page?: page; book?: book }) {
  if (page) {
    return (
      <main className="grid flex-grow items-center overflow-auto rounded-lg bg-black bg-opacity-70 p-4">
        <article className="prose prose-slate prose-invert mx-auto py-4 sm:py-6 md:py-8">
          <h2>{page.title}</h2>
          <PortableText value={page.content} />
        </article>
      </main>
    );
  }

  if (book) {
    return (
      <main className="grid flex-grow items-center overflow-auto rounded-lg bg-black bg-opacity-70 p-4">
        <article className="prose prose-slate prose-invert mx-auto -mt-16 py-4 sm:py-6 md:py-8">
          <div className="relative h-20 w-full">
            <Image
              alt="Book cover"
              src={urlFor(book.image).url()}
              fill={true}
              className="overflow-hidden rounded-md object-cover"
            />
          </div>
          <h2>Preface</h2>
          <PortableText value={book.preface} />
        </article>
      </main>
    );
  }
}
