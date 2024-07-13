import matter from "gray-matter";
import fs from "node:fs/promises"
import {z} from "zod"
interface WorkPostMetadata {
    title: string,
    category: string,
    description: string,
    date: string,
}
const WorkPostMetadataSchema = z.object({
    title: z.string(),
    category: z.string(),
    description: z.string(),
    date: z.string()
})
export async function getAllWorkPosts(): Promise<WorkPostMetadata[]> {
    const files = await fs.readdir("content/project")
    const metadataArray: WorkPostMetadata[] = []
    for await (const file of files) {
        if (!file.endsWith(".mdx") || !file.endsWith(".md")) break
        const raw = await fs.readFile(`content/project/${file}`)
        const metadata = matter(raw).data as WorkPostMetadata
        const parse = await WorkPostMetadataSchema.safeParseAsync({
            ...metadata
        })
        if (parse.success) throw new Error(`Wrong format! You have the wrong types in your metadata. Please check this file: 'content/project/${file}'`)
        metadataArray.push(metadata)
    }
    return metadataArray
}