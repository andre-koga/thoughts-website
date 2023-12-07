"use client";

import { page } from "@/app/lib/definitions";
import clsx from "clsx";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const amountPerPage = 5;

export default function PageItems({
  pages,
  currentPage,
  slug,
}: {
  pages: page[];
  currentPage: number;
  slug: { current: string };
}) {
  // console.log(currentPage);

  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const cutPages = pages.slice(
    currentPage * amountPerPage,
    Math.min((currentPage + 1) * amountPerPage, pages.length),
  );

  const goBack = () => {
    const params = new URLSearchParams(searchParams);
    if (currentPage > 1) {
      params.set("page", (currentPage - 1).toString());
    } else params.delete("page");

    replace(`${pathname}?${params.toString()}`);
  };

  const goNext = () => {
    const params = new URLSearchParams(searchParams);
    if (currentPage + 1 < pages.length / amountPerPage)
      params.set("page", (currentPage + 1).toString());
    else params.delete("page");

    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <>
      <div className="mx-2 mb-2 mr-auto flex gap-1 rounded-md bg-white bg-opacity-70 p-1 text-black sm:mx-6 sm:mb-4 sm:mr-auto">
        {currentPage > 0 && (
          <button
            onClick={() => {
              goBack();
            }}
            className="rounded-md bg-white bg-opacity-70 px-3 py-0.5 text-sm font-bold text-black transition-all hover:scale-90 active:scale-75"
          >
            {"<"}
          </button>
        )}
        {currentPage == 0 && (
          <button
            onClick={() => {
              goBack();
            }}
            className="rounded-md bg-black bg-opacity-70 px-3 py-0.5 text-sm font-bold text-black text-mid"
            disabled
          >
            {"<"}
          </button>
        )}
        <div className="rounded-md bg-opacity-70 px-2 py-0.5 text-center text-sm">
          Page {currentPage + 1}
        </div>
        {currentPage < pages.length / amountPerPage - 1 && (
          <button
            onClick={() => {
              goNext();
            }}
            className="rounded-md bg-white bg-opacity-70 px-3 py-0.5 text-sm font-bold text-black transition-all hover:scale-90 active:scale-75"
          >
            {">"}
          </button>
        )}
        {currentPage >= pages.length / amountPerPage - 1 && (
          <button
            onClick={() => {
              goNext();
            }}
            className="rounded-md bg-black bg-opacity-70 px-3 py-0.5 text-sm font-bold text-black text-mid"
            disabled
          >
            {">"}
          </button>
        )}
      </div>
      <ul className="mx-2 mb-2 flex flex-wrap content-start gap-2 sm:mx-6 sm:mb-4">
        {cutPages.map((page, i) => (
          <Link
            className="flex-grow sm:flex-grow-0"
            href={`/${slug.current}/${page.slug.current}?${searchParams}`}
            key={i}
          >
            <li
              key={i}
              className={clsx(
                "rounded-md bg-opacity-70 px-2 py-0.5 text-center text-sm transition-all hover:scale-95 active:scale-90",
                {
                  "bg-black text-light":
                    page.slug.current == pathname.split("/")[2],
                },
                {
                  "bg-white text-black":
                    page.slug.current != pathname.split("/")[2],
                },
              )}
            >
              {page.title}
            </li>
          </Link>
        ))}
      </ul>
    </>
  );
}
