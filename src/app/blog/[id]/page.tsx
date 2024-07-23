import { notFound } from "next/navigation"
import fs from "fs/promises"
import matter from "gray-matter"
import { MDXRemote } from "next-mdx-remote/rsc"
export const runtime = "nodejs"

export default async function BlogPost({
    params
}: {
    params: {
        id: string | undefined
    }
}) {

    if (!params.id) notFound()

    const post = await getPost<{
        title: string,
        date: string
    }>({
        folder: "./src/posts",
        id: params.id
    })

    return (
        <div className="flex flex-col space-y-6 w-[500px]">
            <h1>{post.frontMatter.title}</h1>
            <MDXRemote source={post.content} />
        </div>
    )
}


async function getPost<T extends {}>({
    folder,
    id
}:{
    folder: string,
    id: string
}) {
    const file = await fs.readFile(`${folder}/${id}.mdx`)

    if (!file) notFound()

    const data = matter(file)

    return {
        frontMatter: data.data as T,
        meta: {
            slug: id,
            file: `${id}.mdx`
        },
        content: data.content
    }
}