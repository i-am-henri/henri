import { Link } from "next-view-transitions";
import { getTranslations } from 'next-intl/server';
import { useTranslations } from "next-intl";
import ThemeSwitch from "@/components/ThemeSwitch";
import Navigation from "@/components/Navigation";
import Head from "next/head";
import { Metadata } from "next";
import { GithubLogo } from "@phosphor-icons/react/dist/ssr";
import Script from "next/script";

export const metadata: Metadata = {
    keywords: ['Next.js', 'React', 'JavaScript'],
    description: "I'm Henri, a german developer, mostly active in the frontend path.",
    title: "henri",
    creator: "henri <henri.gg>",
    alternates: {
        canonical: '/',
        languages: {
            'de-DE': '/de',
            'en-US': '/en',
        },
    },
    openGraph: {
        title: 'henri',
        description: "I'm Henri, a german developer, mostly active in the frontend path.",
        url: 'https://henri.gg',
        siteName: 'henri',
        images: [
            {
                url: 'http://localhost:3000/api/og',
                width: 800,
                height: 600,
                alt: "henri"
            },
        ],
        locale: "en-US",

        type: 'website',
    },
};
export default function Home() {
    const t = useTranslations()
    return (
        <div className="min-h-screen flex flex-col items-center bg-[#e1e1e1] dark:bg-[#171717]">
            <Navigation locale={t("locale")} land={t("app.work.land")} work={t("app.work.title")} />
            <div className="w-full p-5 sm:p-0 sm:w-[400px] md:w-[500px] lg:w-[700px] flex flex-col space-y-16 mt-16">
                <div>
                    <h2>{t("app.history.title")}</h2>
                    <p>{t("app.history.content")}</p>
                </div>
                <div>
                    <h2>{t("app.today.title")}</h2>
                    <p>{t("app.today.content")}</p>
                </div>

                <div>
                    <h2>{t("app.skills.title")}</h2>
                    <p>{t("app.skills.content")}</p>
                </div>
                <hr className="border-t border-t-[#c1c1c1] dark:border-t-[#343434] w-full" />

                <footer className="text-[#c1c1c1] dark:text-[#343434] flex justify-between">
                    <div>
                        <p className="text-[#c1c1c1] dark:text-[#343434] hover:dark:text-[#ffffffc0] transition duration-300">handmade by henri</p>
                    </div>
                    <div className="flex">
                        <Link href={"https://github.com/i-am-henri/henri"} className="border border-[#c1c1c1] dark:border-[#343434] p-2 transition duration-300 hover:dark:text-[#ffffffc0] hover:dark:border-[#ffffffc0] rounded-full h-min" target="_blank"><GithubLogo  /></Link>
                    </div>
                </footer>
            </div>
        </div>
    )
}
