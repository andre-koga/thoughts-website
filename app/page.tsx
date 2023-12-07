import { GetAllBookCovers } from "@/app/lib/actions";
import { bookCover } from "@/app/lib/definitions";
import Image from "next/image";
import { urlFor } from "@/app/lib/utils";
import Link from "next/link";

export default async function Home() {
  const bookCovers: bookCover[] = await GetAllBookCovers();

  return (
    <main>
      <div className="noise absolute left-0 top-0 -z-30 h-screen w-screen rounded-2xl border-4 border-white sm:rounded-[2rem] sm:border-8">
        <div className="fade-in-out absolute -z-10 h-screen w-screen bg-light" />
        <div className="bg-noise absolute -z-30 h-screen w-screen" />
        <div className="top-circle absolute -left-16 -top-16 -z-20 aspect-square rounded-br-full blur-[100px]" />
        <div className="bottom-circle absolute -bottom-16 -right-16 -z-20 aspect-square rounded-tl-full blur-[100px]" />
      </div>
      <ul className="grid grid-cols-2 gap-4">
        {bookCovers.map((bookCover, i) => {
          return (
            <Link
              href={"/" + bookCover.slug.current}
              className="text-shadow relative grid aspect-square items-center overflow-hidden rounded-md text-white shadow-lg transition-all hover:scale-95 active:scale-90"
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
