import { GetAllBookCovers, GetRecentPost } from "@/app/lib/actions";
import { bookCover } from "@/app/lib/definitions";
import Image from "next/image";
import { urlFor } from "@/app/lib/utils";
import Link from "next/link";

export const revalidate = 0;

export default async function Home() {
  const bookCovers: bookCover[] = await GetAllBookCovers();
  const recent = await GetRecentPost();

  return (
    <main className="flex-grow">
      <div className="noise relative left-0 top-0 -z-30 h-full w-full rounded-2xl border-4 border-white sm:rounded-[2rem] sm:border-8">
        <div className="fade-in-out absolute -z-10 h-full w-full bg-light" />
        <div className="bg-noise absolute -z-30 h-full w-full" />
        <div className="top-circle absolute -left-16 -top-16 -z-20 aspect-square rounded-br-full blur-[100px]" />
        <div className="bottom-circle absolute -bottom-16 -right-16 -z-20 aspect-square rounded-tl-full blur-[100px]" />
      </div>
      <Link href={`/${recent[2]}/${recent[1]}`}>
        <div className="mx-2 mb-2 rounded bg-white bg-opacity-70 px-2 py-1 text-sm text-black transition-all hover:scale-95 active:scale-90 sm:mx-6 sm:mb-4 sm:text-base">
          <p className="text-center">latest post: {recent[0]}</p>
        </div>
      </Link>
      <ul className="m-2 mt-0 grid grid-cols-3 gap-2 sm:m-6 sm:mt-0 sm:grid-cols-4 sm:gap-4 md:grid-cols-5 lg:grid-cols-7">
        {bookCovers.map((bookCover, i) => {
          return (
            <Link
              href={"/" + bookCover.slug.current}
              className="text-shadow relative grid aspect-[1/1.414] items-center overflow-hidden rounded-md text-white shadow-lg transition-all hover:scale-95 active:scale-90"
              key={i}
            >
              {bookCover.status == "ongoing" && (
                <div className="absolute right-0 top-0 m-1 h-4 rounded bg-[#0007]">
                  <p className="px-1 text-xs text-lighty">
                    {bookCover.status}!
                  </p>
                </div>
              )}
              <li className="absolute bottom-0 left-0 right-0 top-0 -z-10">
                <Image
                  alt="Book cover"
                  src={urlFor(bookCover.image).url()}
                  fill={true}
                  className="object-cover blur-[1px] brightness-90 saturate-150"
                />
              </li>
              <h2 className="text-shadow text-center lowercase">
                {bookCover.title}
              </h2>
            </Link>
          );
        })}
      </ul>
    </main>
  );
}
