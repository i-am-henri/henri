"use client"
import Link from "next/link";
import { createContext, useContext } from "react";
const LangContext = createContext("en")
export function LangProvider({children, lang}: {children: React.ReactNode, lang: string}) {
    return (
        <LangContext.Provider value={lang}>
            {children}
        </LangContext.Provider>
    )
}

interface LinkProps extends React.HTMLAttributes<HTMLAnchorElement>{
    children: React.ReactNode,
    href: string
}
export function LangLink({href, children, ...props}: LinkProps) {
    const lang = useContext(LangContext)
    return (
        <Link href={`/${lang}/${href}`} className={props.className} {...props}>
            {children}
        </Link>
    )
}