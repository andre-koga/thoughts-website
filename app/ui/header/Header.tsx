import { GetAllBookCovers } from "@/app/lib/actions";
import { dm_serif } from "@/app/lib/fonts";
import Link from "next/link";
import BookCovers from "@/app/ui/header/BookCovers";

export default async function Header() {
  const bookCovers = await GetAllBookCovers();

  return (
    <header>
      <section className="m-2 mb-4 sm:m-6 sm:mb-4">
        <Link href={"/"}>
          <h1
            className={`${dm_serif.className} text-shadow -mb-1 mt-4 text-4xl text-white sm:-mt-1 sm:mb-0 sm:text-5xl md:text-6xl lg:text-7xl`}
          >
            thoughts <span className="text-lg">by koga</span>
          </h1>
        </Link>
        <BookCovers value={bookCovers} />
      </section>
    </header>
  );
}
