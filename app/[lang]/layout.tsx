
import { LangProvider } from "@/components/LangLink";
import Navigation from "@/components/Navigation";
import { GithubLogo } from "@phosphor-icons/react/dist/ssr";
import { Palette } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import React from "react";

export default function LocaleLayout({
    children,
    params: { locale }
}: {
    children: React.ReactNode;
    params: { locale: string };
}) {
    const t = useTranslations()
    return (
        <div className="flex flex-col items-center bg-[#e1e1e1] dark:bg-[#171717]">
            <Navigation locale={t("locale")} land={t("app.work.land")} />
            <div className="w-full p-5 sm:p-0 sm:w-[400px] md:w-[500px] lg:w-[650px] flex flex-col space-y-16 mt-16">
                <div className="min-h-[calc(100vh-300px)] py-5 w-full sm:py-0 sm:w-[400px] md:w-[500px] lg:w-[650px] flex flex-col space-y-16">
                    <LangProvider lang={t("locale")}>
                        {children}
                    </LangProvider>
                </div>
                {/* The footer */}
                <footer>
                    <hr />
                    <div className="flex items-center justify-between">
                        <Link href={"https://github.com/i-am-henri/henri"}>made with 💝 by henri</Link>
                        {/* The links */}
                        <div className="flex">
                            <Link href={"https://git.new/henri"}>
                                <GithubLogo className="h-4 w-4" />
                            </Link>
                            <Link href="https://layers.to/henrii">
                                <Palette className="h-4 w-4" />
                            </Link>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    );
}