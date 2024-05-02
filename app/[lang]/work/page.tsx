import Navigation from "@/components/Navigation"
import { useTranslations } from "next-intl"
import { cookies } from "next/headers"
import Link from "next/link"

export default function Work() {
    cookies()
    const t = useTranslations()
    return (
        <div className="min-h-screen flex flex-col items-center bg-[#e1e1e1] dark:bg-[#171717]">
            <Navigation locale={t("locale")} land={t("app.work.land")} work={t("app.work.title")} />
            <div className="w-full p-5 sm:p-0 sm:w-[400px] md:w-[500px] lg:w-[700px] flex flex-col space-y-16 mt-16">
                <Link href={t("work.cookie.link")} target="_blank">
                    <h2>{t("work.cookie.title")}</h2>
                    <p>{t("work.cookie.content")}</p>
                </Link>

            </div>
        </div>
    )
}