import { Link } from "next-view-transitions";
import { getTranslations } from 'next-intl/server';
import { useTranslations } from "next-intl";
import ThemeSwitch from "@/components/ThemeSwitch";
import Navigation from "@/components/Navigation";
import Head from "next/head";
import { Metadata } from "next";
import { GithubLogo } from "@phosphor-icons/react/dist/ssr";

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
            <div className="lg:w-[700px] flex flex-col space-y-16 mt-16">
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
                <hr className="border-t dark:border-t-[#343434] w-full" />

                <footer className="dark:text-[#343434] flex justify-between">
                    <div>
                        <p className="hover:dark:text-[#ffffffc0] transition duration-300">handmade by henri</p>
                    </div>
                    <div className="flex">
                        <Link href={"https://github.com/i-am-henri"} className="border dark:border-[#343434] p-2 transition duration-300 hover:dark:text-[#ffffffc0] hover:dark:border-[#ffffffc0] rounded-full h-min" target="_blank"><GithubLogo /></Link>
                    </div>
                </footer>
            </div>
            <button className="group relative inline-flex h-12 w-12 items-center justify-center overflow-hidden rounded-full bg-neutral-950 font-medium text-neutral-200 transition-all duration-300 hover:w-32"><div className="inline-flex whitespace-nowrap opacity-0 transition-all duration-200 group-hover:-translate-x-3 group-hover:opacity-100">Hover me</div><div className="absolute right-3.5"><svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5"><path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg></div></button>
        </div>
    )
}