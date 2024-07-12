import Navigation from "@/components/Navigation"
import { DiscordLogo, GithubLogo, Mailbox } from "@phosphor-icons/react/dist/ssr"
import { useTranslations } from "next-intl"
import Link from "next/link"

export default function Work() {
    const t = useTranslations()
    return (
        <>
            <div>
                <h2>{t("contact.title")}</h2>
                <p>{t("contact.content")}</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
                <Link className="flex items-center" href={"https://git.new/henri"} target="_blank">
                    <GithubLogo className="mr-2" /> i-am-henri
                </Link>
                <Link className="flex items-center" href={"https://discordapp.com/users/830760615789854742"} target="_blank">
                    <DiscordLogo className="mr-2" /> @henri.web
                </Link>
                <Link className="flex items-center" href={"mailto:me@henri.gg"} target="_blank">
                    <Mailbox className="mr-2" /> me@henri.gg
                </Link>
            </div>
        </>

    )
}
