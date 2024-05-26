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

// expects the language as a string, then fetchs the posts in the content folder with the right language. 
export async function getPosts(lang: "de" | "en"): Promise<FrontMatterGallery[]> {
    let frontMatterArray: FrontMatterGallery[] = []
    // fetchs the files in the content folder in the language
    const files: string[] = await fs.promises.readdir("content/" + lang)

    // iterate over the strings in the files variable and reads the frontmatter
    for await (const file of files) {
        const raw: string = (await fs.promises.readFile(`content/${lang}/${file}`)).toString()

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

/**Get a single post, with the file name */
export async function getPost(path: string, lang: "de" | "en"): Promise<Content | undefined> {
    const raw: string = (await fs.promises.readFile(`content/${lang}/${path}`)).toString()

    const post = matter(raw)

    return {
        ...post.data as FrontMatter,
        content: post.content as string
    }
}