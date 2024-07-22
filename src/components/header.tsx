import Link from "next/link";

export default function Header() {
    return (
        <header className="flex items-center lg:w-[500px] justify-between">
            <h2 className="font-medium">henri</h2>
            <nav className="space-x-2">
                <Link href={"/"}>home</Link>
                <Link href={"/blog"}>blog</Link>
                <Link href={"/work"}>work</Link>
            </nav>
        </header>
    )
}