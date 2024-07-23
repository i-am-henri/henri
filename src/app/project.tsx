import { ChevronRight } from "lucide-react"
import Link from "next/link"
import Github from "./icons/github"

/**
 * Card for a project
 */
export default function ProjectCard({
    title,
    description,
    link,
    github
}: {
    title: string,
    description: string,
    link: string,
    github?: string
}) {
    return (
        <div className="w-full flex justify-between hover:bg-popover hover:border-[#666666c0] border border-[transparent] duration-75 rounded-md p-2">
            <div className="flex flex-col">
                <p>{title}</p>
                <p className="text-sm flex items-center">{description}{github && (
                    <>
                        {" "} - {" "} <Link className="ml-1" href={github}><Github /></Link>
                    </>
                )}</p>
            </div>
            <div className="flex items-center justify-center">
                <Link href={link}>
                    <ChevronRight />
                </Link>
            </div>
        </div>
    )
}