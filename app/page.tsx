"use client";

import Image from "next/image";
import { client } from "@/app/lib/utils";

export default async function Home() {
  const query = `*[_type == "post"]`;
  const posts = await client.fetch(query);

  console.log(posts[0]);

  return <main></main>;
}
