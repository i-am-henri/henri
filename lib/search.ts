import Minisearch from "minisearch"
import fs from "fs/promises"
import matter from "gray-matter"
/**
 * The search function with "minisearch".
 * https://github.com/lucaong/minisearch
 * 
 * We are transforming the data from the markdown files into json, 
 * then is the library able to use this data.
 */
export const minisearch = new Minisearch({
    /**
     * These are the fields which can be searched.
     * This means you can't search for the author.
     */
    fields: [
        "title",
        "content"
    ],
    /**
     * These are the fields, which will be returned
     * when you search for something.
     */
    storeFields: [
        "title",
        "author",
        "category"
    ]
})

// get the markdown files
interface SearchData {
    title: string,
    description: string,
    date: string,
    content: string
}

/**
 * A array with the markdown-file-names from the `content/`-directory
 */
const files: string[] = await fs.readdir("content/")
/**
 * 
 * The Array with the data which should be searched through.
 */
const data: SearchData[] = []
// iterate over the strings in the files variable and reads the frontmatter
for await (const file of files) {
    const raw: string = (await fs.readFile(`content/${file}`)).toString()

    const metadata = matter(raw).data as {
        title: string,
        description: string,
        date: string,
    }
    const content = matter(raw).content

    data.push({
        ...metadata,
        content
    })
}

// Add the markdown elements to the search function
minisearch.addAll(data)

export function sarch() {

}