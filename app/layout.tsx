import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import pick from 'lodash/pick';
import Theme from "@/components/ThemeProvider";
import { PHProvider } from "@/components/PostHoqProvider";
import PostHogPageView from "@/components/PostHoqPageView";
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
    <PHProvider>
      <html>
        <body className={inter.className}>
          <PostHogPageView />
          <Theme>
            {children}
            </Theme></body>
      </html>
    </PHProvider>
  );
}
