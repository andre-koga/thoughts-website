"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { dm_serif } from "@/app/lib/fonts";

export default function Breadcrumbs() {
  const pathname = usePathname();
  const paths: string[] = pathname.split("/").slice(1);

  return (
    <nav>
      <ul className="flex items-center gap-2">
        <li className={`${dm_serif.className} text-2xl font-bold text-dark`}>
          <Link href="/">thoughts</Link>
        </li>
        {pathname != "/" &&
          paths.map((path, i) => {
            const href = `/${paths.slice(0, i + 1).join("/")}`;

            return (
              <li key={i} className="rounded bg-lighty px-2">
                <Link href={href}>{path}</Link>
              </li>
            );
          })}
      </ul>
    </nav>
  );
}
