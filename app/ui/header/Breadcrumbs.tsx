"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Breadcrumbs() {
  const pathname = usePathname();
  const paths: string[] = pathname.split("/").slice(1);

  return (
    <nav>
      <ul className="flex gap-2">
        <li className="bg-lighty rounded px-2">
          <Link href="/">thoughts</Link>
        </li>
        {pathname != "/" &&
          paths.map((path, i) => {
            const href = `/${paths.slice(0, i + 1).join("/")}`;

            return (
              <li key={i} className="bg-lighty rounded px-2">
                <Link href={href}>{path}</Link>
              </li>
            );
          })}
      </ul>
    </nav>
  );
}
