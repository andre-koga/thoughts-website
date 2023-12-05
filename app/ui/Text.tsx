import { PortableTextBlock } from "@sanity/types";
import { PortableText } from "@portabletext/react";

export default function Text({ text }: { text: PortableTextBlock[] }) {
  return (
    <main className="grid flex-grow items-center overflow-auto rounded-lg bg-black bg-opacity-70 p-4">
      <article className="prose prose-invert mx-auto py-4 sm:py-6 md:py-8">
        <PortableText value={text} />
      </article>
    </main>
  );
}
