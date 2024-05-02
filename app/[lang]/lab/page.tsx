import Navigation from "@/components/Navigation"
import { useTranslations } from "next-intl"
import Link from "next/link"

export default function Work() {
    const t = useTranslations()
    return (
        <div className="min-h-screen flex flex-col items-center bg-[#e1e1e1] dark:bg-[#171717]">
            <Navigation locale={t("locale")} land={t("app.work.land")} work={t("app.work.title")} />
            <div className="w-full p-5 sm:p-0 sm:w-[400px] md:w-[500px] lg:w-[700px] flex flex-col space-y-16 mt-16">
                <div>
                    <h2>{t("lab.title")}</h2>
                    <p>{t("lab.description")}</p>
                </div>
                <p className="text-[#c1c1c1] dark:text-[#343434]">nothing here... for now!</p>

            </div>
        </div>
    )
}