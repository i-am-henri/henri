import { Schema, z, ZodObject, ZodSchema, ZodString } from "zod"
import fs from "node:fs/promises"
import matter from "gray-matter"
import BlogPost from "./post"
import { allPosts } from "content-collections"

export const runtime = "nodejs"

export default function Blog() {
    console.log(allPosts)
    return (
        <div className="space-y-6 flex flex-col lg:w-[500px]">
            <p>I really like good articles... so I try making good one by myself.</p>
            {
                allPosts.map((post) => (
                    <BlogPost title={post.title} date={post.date} slug={post._meta.fileName} key={post._meta.fileName} />
                ))
            }
        </div>
    )
}