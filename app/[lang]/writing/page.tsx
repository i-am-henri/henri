import { notFound } from "next/navigation"
import { getPosts } from "./[slug]/server"

export default async function Blog() {
    const posts = await getPosts("en")
    if (posts.length == 0) {
        console.log("kein Inhalt")
    }
    return <div>
        {posts.map((post) => (
            <div key={post.title}>
                {post.title}
                {post.description}
            </div>
        ))}
    </div>
}