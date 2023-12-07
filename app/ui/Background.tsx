"use client";

import { Palette } from "color-thief-react";

export default function Background({ url }: { url: string }) {
  return (
    <Palette src={url} format="hex" colorCount={3} crossOrigin="">
      {({ data }) => (
        <div className="noise relative left-0 top-0 -z-30 h-full w-full rounded-2xl border-4 border-white sm:rounded-[2rem] sm:border-8">
          <div className="fade-in-out absolute -z-10 h-full w-full bg-light" />
          <div
            className="absolute -z-30 h-full w-full"
            style={{ backgroundColor: data ? data[1] : "#000000" }}
          />
          <div
            className="top-scircle absolute -left-16 -top-16 -z-20 aspect-square rounded-br-full blur-[100px]"
            style={{ backgroundColor: data ? data[0] : "#000000" }}
          />
          <div
            className="bottom-scircle absolute -bottom-16 -right-16 -z-20 aspect-square rounded-tl-full blur-[100px]"
            style={{ backgroundColor: data ? data[2] : "#000000" }}
          />
        </div>
      )}
    </Palette>
  );
}
