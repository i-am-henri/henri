import Card from "@/components/Card"
import { getPosts } from "./[slug]/server"
import { LangLink } from "@/components/LangLink"
import Img from "next/image"
export default async function Blog() {
    const posts = await getPosts()
    return <div className="grid grid-cols-2 gap-4">
        {posts.length !== 0 && posts.map((post) => (
            <Card alt={post.alt} description={post.description} image={post.image} ready={post.ready} title={post.title} key={post.title} />
        )) || <p>There are no posts right now.</p>}
    </div>
}