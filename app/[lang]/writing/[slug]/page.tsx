import { MDXRemote } from "next-mdx-remote/rsc";
import { getPost } from "./server";
import { notFound } from "next/navigation";

export default async function Post({params}: {params: {slug: string}}) {
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
