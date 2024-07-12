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
        <>
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

            <div>
                <h2>{t("app.design.title")}</h2>
                <p>{t("app.design.content")}</p>
            </div>
        </>
    )
}
