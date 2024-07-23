"use client"
import { notFound } from "next/navigation"
import matter from "gray-matter"
import { MDXContent } from "@content-collections/mdx/react";
import {allPosts} from "content-collections"

export const runtime = "nodejs"

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
            <h1>{post.title}</h1>
            <MDXContent code={post.body} />
        </div>
    )
}