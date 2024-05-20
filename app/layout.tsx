import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import pick from 'lodash/pick';
import Theme from "@/components/ThemeProvider";
import { PHProvider } from "@/components/PostHoqProvider";
import PostHogPageView from "@/components/PostHoqPageView";
import { Suspense } from "react";
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
      <Suspense>
        <PHProvider>
          <body className={inter.className}>
            <PostHogPageView />
            <Theme>
              {children}
            </Theme></body>
        </PHProvider>
      </Suspense>
    </html>
  );
}
