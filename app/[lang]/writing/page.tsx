import { getPosts } from "./[slug]/server"
import { LangLink } from "@/components/LangLink"
import Img from "next/image"
export default async function Blog() {
    const posts = await getPosts()
    return <div className="grid grid-cols-2 gap-4">
        {posts.length !== 0 && posts.map((post) => (
            <LangLink href={`writing/${post.link}`} key={post.title} className="flex flex-col">
                <Img src={post.image} alt="The hero image for this post." width={1000} height={1000} />
                <h2 className="m-0">{post.title}</h2>
                <p>
                    {post.description}
                </p>
            </LangLink>
        )) || <p>There are no posts right now.</p>}
    </div>
}