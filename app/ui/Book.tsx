import { PortableText } from "@portabletext/react";
import Image from "next/image";
import { urlFor } from "@/app/lib/utils";
import { book } from "@/app/lib/definitions";

export default function Book({ book }: { book: book }) {
  return (
    <section className="overflow-hidden bg-lighty rounded-xl p-3 grid gap-4 grid-cols-4">
      <div className="relative aspect-[1/1.414] rounded-lg overflow-hidden">
        <Image
          src={urlFor(book.image).url()}
          alt="Book cover"
          fill={true}
          className="object-cover"
        />
      </div>
      <div className="col-span-3">
        <PortableText value={book.preface}></PortableText>
      </div>
    </section>
  );
}
