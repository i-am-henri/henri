import { MDXRemote } from "next-mdx-remote/rsc";
import { getPost } from "./server";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

export default async function Post({ params }: { params: { slug: string } }) {
    const post = await getPost(params.slug)

    if (!post) {
        notFound()
    }

    return (
        <div>
            <MDXRemote source={post.content} components={post.components} />
        </div>
    )
}
export async function generateMetadata({ params }: { params: { slug: string }}) {
    const post = await getPost(params.slug)

    if (!post) {
        notFound()
    }
    return {
        title: `${post.title} | ${post.description}`,
        description: post.description,
    } satisfies Metadata
}