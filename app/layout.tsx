import type { Metadata } from "next";
import "./globals.css";
import Theme from "@/components/ThemeProvider";
import Script from "next/script";
import { GeistSans } from "geist/font/sans";



export const metadata: Metadata = {
  title: "henri",
  description: "Hey, I'm Henri a webdeveloper based in germany. I'm 14 years old and I'm coding for now 3 years. I found my passion in the full-stack web development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* For the analytics */}
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
