import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import pick from 'lodash/pick';
import Theme from "@/components/ThemeProvider";
import dynamic from "next/dynamic";
import { PHProvider } from "@/components/PostHogProvider";

const PostHogPageView = dynamic(() => import('@/components/PostHogPageView'), {
  ssr: false,
})
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
    <html lang="en">
      <PHProvider>
        <body>
          <PostHogPageView />
          <Theme>
            {children}
          </Theme>
        </body>
      </PHProvider>
    </html>
  );
}
