import { getAllWorkPosts } from "./work"
import Img from "next/image"

export default async function Work() {
    const posts = await getAllWorkPosts()
    return (
        <div className="grid grid-cols-2 gap-4">
            {posts.length !== 0 && posts.map((post) => (
                <div key={post.title}>
                    <Img className="rounded-md border" src={post.image} alt="This is a image"  width={"1000"} height={"1000"}/>
                    <h2 className="text-lg m-0">{post.title}</h2>
                    <p>{post.description}</p>
                </div>
            )) || (
                <p>You have no content yet.</p>
            )}
        </div>
    )
}
