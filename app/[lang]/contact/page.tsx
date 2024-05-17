import Navigation from "@/components/Navigation"
import { DiscordLogo, GithubLogo, Mailbox } from "@phosphor-icons/react/dist/ssr"
import { useTranslations } from "next-intl"
import Link from "next/link"

export default function Work() {
    const t = useTranslations()
    return (
        <div className="min-h-screen flex flex-col items-center bg-[#e1e1e1] dark:bg-[#171717]">
            <Navigation locale={t("locale")} land={t("app.work.land")} work={[t("app.work.title"), t("app.work.secondtitle"), t("app.work.thirdtitle"), t("app.work.fourttitle")]} />
            <div className="w-full p-5 sm:p-0 sm:w-[400px] md:w-[500px] lg:w-[700px] flex flex-col space-y-16 mt-16">
                <div>
                    <h2>{t("contact.title")}</h2>
                    <p>{t("contact.content")}</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
                    <Link className="flex items-center" href={"https://git.new/henri"} target="_blank">
                        <GithubLogo className="mr-2"/> i-am-henri
                    </Link>
                    <Link className="flex items-center" href={"https://discordapp.com/users/830760615789854742"} target="_blank">
                        <DiscordLogo className="mr-2"/> @henri.web
                    </Link>
                    <Link className="flex items-center" href={"mailto:me@henri.gg"} target="_blank">
                        <Mailbox className="mr-2"/> me@henri.gg
                    </Link>
                </div>

            </div>
        </div>
    )
}
