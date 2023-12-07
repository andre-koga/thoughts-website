import { GetAllBookCovers, GetRecentPost } from "@/app/lib/actions";
import { bookCover } from "@/app/lib/definitions";
import Image from "next/image";
import { urlFor } from "@/app/lib/utils";
import Link from "next/link";

export default async function Home() {
  const bookCovers: bookCover[] = await GetAllBookCovers();
  const recent = await GetRecentPost();

  return (
    <main>
      <div className="noise relative left-0 top-0 -z-30 h-full w-full rounded-2xl border-4 border-white sm:rounded-[2rem] sm:border-8">
        <div className="fade-in-out absolute -z-10 h-full w-full bg-light" />
        <div className="bg-noise absolute -z-30 h-full w-full" />
        <div className="top-circle absolute -left-16 -top-16 -z-20 aspect-square rounded-br-full blur-[100px]" />
        <div className="bottom-circle absolute -bottom-16 -right-16 -z-20 aspect-square rounded-tl-full blur-[100px]" />
      </div>
      <Link href={`/${recent[2]}/${recent[1]}`}>
        <div className="mx-2 mb-4 rounded bg-white bg-opacity-70 px-2 py-1 text-sm text-black transition-all hover:scale-95 active:scale-90 sm:mx-6 sm:mb-4 sm:text-base">
          <p className="text-center">latest post: {recent[0]}</p>
        </div>
      </Link>
      <ul className="m-2 mt-0 grid grid-cols-3 gap-4 sm:m-6 sm:mt-0 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7">
        {bookCovers.map((bookCover, i) => {
          return (
            <Link
              href={"/" + bookCover.slug.current}
              className="text-shadow relative grid aspect-[1/1.414] items-center overflow-hidden rounded-md text-white shadow-lg transition-all hover:scale-95 active:scale-90"
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
      </ul>
    </main>
  );
}
