import Link from "next/link";

export default function Header() {
    return (
        <header className="flex items-center lg:w-[500px] justify-between">
            <h2>henri</h2>
            <nav>
                <Link href={"/"}>home</Link>
                <Link href={"/blog"}>blog</Link>
                <Link href={"/work"}>work</Link>
            </nav>
        </header>
    )
}