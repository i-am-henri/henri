import Header from "@/components/header";
import "@/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "henri",
  description: "I'm a young webdeveloper, based in germany, with a passion for nextjs.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body className="bg-[#121212] min-h-screen w-full flex flex-col items-center">
        <Header />
        {children}
      </body>
    </html>
  );
}
