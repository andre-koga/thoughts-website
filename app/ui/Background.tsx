import { Color } from "@/app/lib/definitions";
import { GetHex } from "@/app/lib/actions";

export default function Background({ colors }: { colors: Color[] }) {
  return (
    <div className="noise absolute left-0 top-0 -z-30 h-screen w-screen rounded-2xl border-4 border-white sm:rounded-[2rem] sm:border-8">
      <div className="fade-in-out absolute -z-10 h-screen w-screen bg-light" />
      <div
        className="absolute -z-30 h-screen w-screen"
        style={{ backgroundColor: GetHex(colors[1]) }}
      />
      <div
        className="top-scircle absolute -left-16 -top-16 -z-20 aspect-square rounded-br-full blur-[100px]"
        style={{ backgroundColor: GetHex(colors[0]) }}
      />
      <div
        className="bottom-scircle absolute -bottom-16 -right-16 -z-20 aspect-square rounded-tl-full blur-[100px]"
        style={{ backgroundColor: GetHex(colors[2]) }}
      />
    </div>
  );
}
