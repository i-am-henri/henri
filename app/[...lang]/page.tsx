import { Link } from "next-view-transitions";
import { getTranslations } from 'next-intl/server';
import { useTranslations } from "next-intl";
import ThemeSwitch from "@/components/ThemeSwitch";
import { AnimatedText } from "@/components/TextAnimation";
import Navigation from "@/components/Navigation";
import Head from "next/head";
import { Metadata } from "next";

export const metadata: Metadata = {
    openGraph: {
      title: 'Next.js',
      description: 'The React Framework for the Web',
      url: 'https://henri.gg',
      siteName: 'Next.js',
      images: [
        {
          url: 'http://localhost:3000/api/og',
          width: 800,
          height: 600,
        },
        {
          url: 'http://localhost:3000/api/og',
          width: 1800,
          height: 1600,
          alt: 'My custom alt',
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
  };
export default function Home() {
    const t = useTranslations()
    return (
        <div className="min-h-screen flex flex-col items-center bg-[#e1e1e1] dark:bg-[#171717]">
            
            <Navigation land={t("app.work.land")} work={t("app.work.title")} />
            <div className="lg:w-[700px] flex flex-col space-y-16 mt-16">
                <img src="/api/og" />
                <AnimatedText>hey, ich heiße Henri</AnimatedText>
                <div>
                    <h2>{t("app.history.title")}</h2>
                    <p>{t("app.history.content")}</p>
                </div>
                <div>
                    <h2>{t("app.today.title")}</h2>
                    <p>{t("app.today.content")}</p>
                </div>

                <div>
                    <h2>Skills</h2>
                    <p>I have 3 years of experience in the webdevelopment space.</p>
                </div>

            </div>
        </div>
    )
}