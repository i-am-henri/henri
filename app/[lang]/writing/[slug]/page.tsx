import { MDXRemote } from "next-mdx-remote/rsc";
import { getPost } from "./server";
import { notFound } from "next/navigation";

export default async function Post({params}: {params: {slug: string}}) {
    const post = await getPost(params.slug + ".mdx", "en")

    if (!post) {
        notFound()
    }


    return (
        <MDXRemote source={post.content} />
    )
}
