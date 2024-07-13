import { getAllWorkPosts } from "./work"
import Img from "next/image"
import contentio from "../../../content/project/contentio.png"
export default async function Work() {
    const posts = await getAllWorkPosts()
    return (
        <div>
            {posts.length !== 0 && posts.map((post) => (
                <div key={post.title}>
                    <Img className="rounded-md border" src={post.image} alt="This is a image" width={400} height={400} />
                    {post.title}
                </div>
            )) || (
                <p>You have no content yet.</p>
            )}
        </div>
    )
}
