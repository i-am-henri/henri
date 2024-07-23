import Link from "next/link"

export default function BlogPost({
    title,
    date,
    slug
}: {
    title: string,
    date: string,
    slug: string
}) {
    return (
        <Link href={`/blog/${slug}`} className="flex items-center justify-between w-full">
            <p>{title}</p>
            <p className="text-sm text-[#232323] dark:text-[#666666]">{date}</p>
        </Link>
    )
}