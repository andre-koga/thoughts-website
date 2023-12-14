import type { Metadata } from "next";
import "./globals.scss";
import { noto_serif } from "@/app/lib/fonts";
import Header from "@/app/ui/header/Header";
import Footer from "@/app/ui/footer/Footer";

export const metadata: Metadata = {
  title: "Thoughts by Koga",
  description: "A collection of thoughts by Koga",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${noto_serif.className} relative flex min-h-screen select-none flex-col bg-white text-dark`}
      >
        <Header />
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
