import Navigation from "@/components/Navigation";
import { useTranslations } from "next-intl";


export default function LocaleLayout({
    children,
    params: { locale }
}: {
    children: React.ReactNode;
    params: { locale: string };
}) {
    const t = useTranslations()
    return (
       <div>
        {children}
       </div>
    );
}