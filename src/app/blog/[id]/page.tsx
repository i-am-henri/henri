import { notFound } from "next/navigation"
import matter from "gray-matter"
import { allPosts } from "content-collections"
import { Newsreader, JetBrains_Mono } from "next/font/google";
import { Metadata } from "next";
import View from "./view";
import { cn } from "@/lib/utils";
export const runtime = "nodejs"

const newsreader = Newsreader({
    subsets: ["latin"],
    style: "italic"
})

const jMono = JetBrains_Mono({
    style: "normal",
    display: "swap",
    subsets: ["latin"]
})

export default function BlogPost({
    params
}: {
    params: {
        id: string
    }
}) {
    if (!params.id) notFound()
    const post = allPosts.find((post) => post._meta.fileName.startsWith(params.id))
    console.log(post)
    if (!post) notFound()

    return (
        <div className="flex flex-col space-y-6 w-[500px]">
            <h1 className="text-2xl font-medium">{post.title}</h1>
            <div className={cn("flex flex-col space-y-3", jMono.className)}>
                <View code={post.body} />
            </div>
        </div>
    )
}

export function generateMetadata({
    params
}: {
    params: {
        id: string
    }
}): Metadata {
    if (!params.id) notFound()
    const post = allPosts.find((post) => post._meta.fileName.startsWith(params.id))
    if (!post) notFound()

    return {
        title: post.title,
        description: post.description
    }
}