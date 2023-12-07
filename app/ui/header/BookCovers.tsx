"use client";

import { bookCover } from "@/app/lib/definitions";
import { urlFor } from "@/app/lib/utils";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function BookCovers({ value }: { value: bookCover[] }) {
  const pathname = usePathname();

  return (
    <nav className="mt-4 flex h-8 gap-2">
      {value.map((bookCover, i) => {
        return (
          <Link
            href={"/" + bookCover.slug.current}
            className={clsx(
              "text-shadow relative grid items-center overflow-hidden rounded-md text-white shadow-md transition-all hover:scale-90 active:scale-75",
              {
                "order-1 aspect-[3/1] text-lg":
                  pathname.split("/")[1] == bookCover.slug.current,
              },
              {
                "order-2 aspect-square text-[0px]":
                  pathname.split("/")[1] != bookCover.slug.current,
              },
            )}
            key={i}
          >
            <li className="absolute bottom-0 left-0 right-0 top-0 -z-10">
              <Image
                alt="Book cover"
                src={urlFor(bookCover.image).url()}
                fill={true}
                className="object-cover brightness-125 contrast-75"
              />
            </li>
            <h2 className="text-center lowercase">{bookCover.title}</h2>
          </Link>
        );
      })}
    </nav>
  );
}
