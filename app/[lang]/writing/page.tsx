import { getPosts } from "./[slug]/server"
import { LangLink } from "@/components/LangLink"

export default async function Blog() {
    const posts = await getPosts()
    return <div>
        {posts.length !== 0 && posts.map((post) => (
            <LangLink href={`writing/${post.link}`} key={post.title} className="flex flex-col">
                {post.title}
                {post.description}
            </LangLink>
        )) || <p>There are no posts right now.</p>}
    </div>
}