import { GetAllBookCovers } from "@/app/lib/actions";
import { dm_serif } from "@/app/lib/fonts";
import Link from "next/link";
import BookCovers from "@/app/ui/header/BookCovers";

export default async function Header() {
  const bookCovers = await GetAllBookCovers();

  return (
    <header>
      <section className="m-2 -mb-1 mt-4 flex flex-col items-start sm:mx-6 sm:mb-0 sm:mt-6">
        <Link
          className="transition-all hover:scale-95 active:scale-90"
          href={"/"}
        >
          <h1
            className={`${dm_serif.className} text-shadow text-4xl text-white sm:text-5xl md:text-6xl lg:text-7xl`}
          >
            thoughts <span className="text-lg">by koga</span>
          </h1>
        </Link>
      </section>
      <section className="m-2 mb-4 sm:mx-6 sm:mb-4">
        <BookCovers value={bookCovers} />
      </section>
    </header>
  );
}
