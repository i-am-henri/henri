import matter from "gray-matter"
import fs from "node:fs"

interface FrontMatter {
    title: string,
    description: string,
    date: string,
}

interface FrontMatterGallery extends FrontMatter {
    link: string
}
/**
 * This is a function to receive the entire `content/posts`
 * directory and returns the frontmatter with the content.
 * @returns {FrontMatterGallery[]} - a array with the frontmatter
 */
export async function getPosts(): Promise<FrontMatterGallery[]> {
    let frontMatterArray: FrontMatterGallery[] = []
    // fetchs the files in the content folder in the language
    const files: string[] = await fs.promises.readdir("content/posts/")

    // iterate over the strings in the files variable and reads the frontmatter
    for await (const file of files) {
        const raw: string = (await fs.promises.readFile(`content/posts/${file}`)).toString()

        const metadata = matter(raw).data as FrontMatter

        frontMatterArray.push({
            ...metadata,
            link: file.replace(".mdx", "")
        })
    }

    return frontMatterArray
}

interface Content extends FrontMatter {
    content: string
}

/**
 * Get a single post, with the file name and the needed components for this. So you
 * can use custom components with a <filename>.tsx file, this file must have the same 
 * name as the .mdx file.
 */
export async function getPost(path: string): Promise<Content | undefined> {
    const raw: string = (await fs.promises.readFile(`content/posts/${path}`)).toString()

    const post = matter(raw)

    


    return {
        ...post.data as FrontMatter,
        content: post.content as string
    }
}