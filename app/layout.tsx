import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import pick from 'lodash/pick';
import Theme from "@/components/ThemeProvider";
import { PHProvider } from "@/components/PostHoqProvider";
const PostHogPageView = dynamic(() => import('@/components/PostHoqPageView'), {
  ssr: false,
})
import { Suspense } from "react";
import dynamic from "next/dynamic";
const inter = Inter({ subsets: ["latin"] });

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
    <html>
      <PHProvider>
        <body className={inter.className}>
          <PostHogPageView />
          <Theme>
            {children}
          </Theme></body>
      </PHProvider>
    </html>
  );
}
