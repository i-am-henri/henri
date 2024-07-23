import { z, ZodObject, ZodSchema, ZodString } from "zod"
import fs from "node:fs/promises"
import matter from "gray-matter"
import { title } from "node:process"
export const runtime = "nodejs"


export default async function Blog() {
    const posts = await fetchAllPosts({
        folder: "./src/posts/",
        schema: z.object({
            title: z.string()
        })
    })
    return (
        <div className="space-y-12 flex flex-col lg:w-[500px]">
            {
                posts.map((post) => (
                    <div key={post.frontmatter.toString()}>
                        {post.content}
                    </div>
                ))
            }
        </div>
    )
}
export async function fetchAllPosts({
    schema,
    folder
}:{
    schema: ZodSchema<object>
    folder: string
}) {
    "use server"
    let arr: {
      frontmatter: {},
      content: string,
      meta: {
        file: string,
        slug: string,
        folder: string
      }

    }[] = []

    const dir = await fs.readdir(folder)

    for await (const file of dir) {
        const content = await fs.readFile(`${folder}/${file}`)
        const data = matter(content)

        // parsing the frontmatter
        const parse = await schema.safeParseAsync({...data.data})
        if (!parse.success) throw new Error(`Wrong frontmatter in file ${file} of the folder "${folder}`)
     
        arr.push({
            frontmatter: {
                ...data.data
            },
            meta: {
                file: file,
                slug: file.split(".")[0] as string,
                folder
            },
            content: data.content
        })
    }

    return arr
}