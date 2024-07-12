import Navigation from "@/components/Navigation"
import { useTranslations } from "next-intl"
import Link from "next/link"

export default function Work() {
    const t = useTranslations()
    return (
        <div>
            <Link href={t("work.cookie.link")} target="_blank" className="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{t("work.cookie.title")}</h2>
                <p className="font-normal text-gray-700 dark:text-gray-400">{t("work.cookie.content")}</p>
            </Link>
            <Link href={t("work.newProject.link")} target="_blank" className="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{t("work.newProject.title")}heyy</h2>
                <p className="font-normal text-gray-700 dark:text-gray-400">{t("work.newProject.content")}hallp</p>
            </Link>
        </div>
    )
}
