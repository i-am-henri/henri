import { Schema, z, ZodObject, ZodSchema, ZodString } from "zod"
import fs from "node:fs/promises"
import matter from "gray-matter"
import { title } from "node:process"
import ProjectCard from "../project"
import BlogPost from "./post"

export const runtime = "nodejs"

export default async function Blog() {
    const posts = await fetchAllPosts({
        folder: "./src/posts/",
        schema: {
            title: z.string(),
            date: z.string(),
        }
    })
    return (
        <div className="space-y-6 flex flex-col lg:w-[500px]">
            <p>I really like good articles... so I try making good one by myself.</p>
            {
                posts.map((post) => (
                    <BlogPost title={post.frontmatter.title} date={post.frontmatter.date} slug={post.meta.slug} key={post.meta.slug} />
                ))
            }
        </div>
    )
}
export async function fetchAllPosts({
    schema,
    folder
}: {
    schema: {
        [key: string]: ZodSchema<any>;
    }
    folder: string
}) {
    type InferSchema<T extends { [key: string]: ZodSchema<any> }> = {
        [K in keyof T]: z.infer<T[K]>;
      };
    const parseSchema = z.object({
        ...schema
    })

    let arr: {
        frontmatter: InferSchema<typeof schema>,
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
        const parse = await parseSchema.safeParseAsync({ ...data.data })
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