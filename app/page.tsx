import { GetAllBookCovers } from "@/app/lib/actions";
import { dm_serif } from "@/app/lib/fonts";
import Image from "next/image";
import { urlFor } from "./lib/utils";
import Link from "next/link";

export default async function Home() {
  const bookCovers = await GetAllBookCovers();

  return (
    <main>
      <div className="noise -z-10 h-screen w-screen">
        <div className="top-circle absolute -right-8 -top-8 aspect-square rounded-bl-full blur-[200px]" />
        <div className="bottom-circle absolute -bottom-8 -left-8 aspect-square rounded-tr-full blur-[200px]" />
      </div>
      <section className="p-6">
        <h1
          className={`${dm_serif.className} text-shadow -mt-1 mb-6 text-right text-4xl text-white sm:text-5xl md:text-6xl lg:text-7xl`}
        >
          thoughts?
        </h1>
        <ul className="flex h-10 justify-end gap-2">
          {bookCovers.map((bookCover, i) => {
            return (
              <Link
                href={bookCover.slug.current}
                className="text-shadow relative grid aspect-[1/2] items-center overflow-hidden rounded-md text-transparent shadow-md transition-all focus:aspect-[2.5/1] focus:text-white"
                key={i}
              >
                <div className="absolute bottom-0 left-0 right-0 top-0 -z-10">
                  <Image
                    alt="Book cover"
                    src={urlFor(bookCover.image).url()}
                    fill={true}
                    className="object-cover"
                  />
                </div>
                <h2 className="text-center lowercase">{bookCover.title}</h2>
              </Link>
            );
          })}
        </ul>
      </section>
    </main>
  );
}
