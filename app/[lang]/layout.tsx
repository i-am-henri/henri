import Navigation from "@/components/Navigation";
import { GithubLogo } from "@phosphor-icons/react/dist/ssr";
import { useTranslations } from "next-intl";
import Link from "next/link";


export default function LocaleLayout({
    children,
    params: { locale }
}: {
    children: React.ReactNode;
    params: { locale: string };
}) {
    const t = useTranslations()
    return (
        <html lang={locale}>
            <body>
                <div className="min-h-screen flex flex-col items-center bg-[#e1e1e1] dark:bg-[#171717]">
                    <Navigation locale={t("locale")} land={t("app.work.land")} />
                    <div className="w-full p-5 sm:p-0 sm:w-[400px] md:w-[500px] lg:w-[700px] flex flex-col space-y-16 mt-16">
                        {children}
                        <footer>
                            <hr />
                            <div className="flex items-center justify-between">
                                <Link href={"https://github.com/i-am-henri/henri"}>made with 💝 by henri</Link>
                                {/* The links */}
                                <div className="flex">
                                    <GithubLogo />
                                </div>
                            </div>
                        </footer>
                    </div>
                </div>
            </body>
        </html>
    );
}