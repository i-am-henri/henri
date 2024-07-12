import Navigation from "@/components/Navigation"
import { useTranslations } from "next-intl"
import Link from "next/link"

export default function Work() {
    const t = useTranslations()
    return (
        <>
            <div>
                <h2>{t("lab.title")}</h2>
                <p>{t("lab.description")}</p>
            </div>
            <h2>File Tree</h2>
        </>

    )
}
