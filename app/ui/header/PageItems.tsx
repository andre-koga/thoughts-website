"use client";

import { book } from "@/app/lib/definitions";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function PageItems({ book }: { book: book }) {
  const pathname = usePathname();
  return (
    <>
      {book.pages.map((page, i) => (
        <li
          key={i}
          className={clsx(
            "rounded-md bg-opacity-70 py-0.5 text-sm transition-all",
            {
              "order-1 bg-black px-4 text-light":
                page.slug.current == pathname.split("/")[2],
            },
            {
              "order-2 bg-white px-1.5 text-black":
                page.slug.current != pathname.split("/")[2],
            },
          )}
        >
          <Link href={`/${book.slug.current}/${page.slug.current}`} key={i}>
            {page.title}
          </Link>
        </li>
      ))}
    </>
  );
}
