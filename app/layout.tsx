import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Theme from "@/components/ThemeProvider";
import Script from "next/script";
import { GeistSans } from "geist/font/sans";



export const metadata: Metadata = {
  title: "henri",
  description: "Hey, I'm Henri a webdeveloper based in germany.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script data-website-id="51e2e9d7-e096-4156-92bf-89ae969b8637" defer src="/umami" />
      </head>
      <body className={GeistSans.className}>
        <Theme>
          {children}
        </Theme>
      </body>
    </html>
  );
}
