import Footer from "@/components/footer";
import Header from "@/components/header";
import { TooltipProvider } from "@/components/ui/tooltip";
import "@/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import { ThemeProvider } from "next-themes"
import { Gabarito, Newsreader } from 'next/font/google'

// If loading a variable font, you don't need to specify the font weight
const gobarito = Gabarito({
  subsets: ['latin'],
  style: "normal"
})


export const metadata: Metadata = {
  title: "henri",
  description: "I'm a young webdeveloper, based in germany, with a passion for nextjs.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={gobarito.className}>
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark" disableTransitionOnChange>
          <TooltipProvider>
            <div className="min-h-screen w-full flex flex-col items-center space-y-12 py-12">
              <Header />
              {children}
              <Footer />
            </div>
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
