import { getAllWorkPosts } from "./work"

export default async function Work() {
    const posts = await getAllWorkPosts()
    return (
        <div>
            
        </div>
    )
}
