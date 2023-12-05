import { Noto_Serif, DM_Serif_Text } from "next/font/google";

export const noto_serif = Noto_Serif({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
});
export const dm_serif = DM_Serif_Text({
  subsets: ["latin"],
  weight: ["400"],
});
