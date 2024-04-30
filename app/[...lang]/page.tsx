import { Link } from "next-view-transitions";
import { getTranslations } from 'next-intl/server';
import { useTranslations } from "next-intl";
import ThemeSwitch from "@/components/ThemeSwitch";
import { AnimatedText } from "@/components/TextAnimation";
import Navigation from "@/components/Navigation";

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
    const t = await getTranslations({ locale, namespace: 'Metadata' });

    return {
        title: t('title')
    };
}
export default function Home() {
    const t = useTranslations()
    return (
        <div className="min-h-screen flex flex-col items-center  ">
            <Navigation />
            <div className="lg:w-[700px] flex flex-col space-y-16">
               
                <AnimatedText>hey, ich heiße Henri</AnimatedText>
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

            </div>
        </div>
    )
}