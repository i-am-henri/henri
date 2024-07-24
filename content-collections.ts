import { defineCollection, defineConfig } from "@content-collections/core";
import {compileMDX} from "@content-collections/mdx"
 
const posts = defineCollection({
  name: "posts",
  directory: "src/posts",
  include: "*.mdx",
  schema: (z) => ({
    title: z.string(),
    date: z.string(),
  }),
  transform: async (document, context) => {
    const body = await compileMDX(context, document);
    const date = new Date(document.date)
    //TODO: implement a view counter
    return {
      ...document,
      body,
      d: date
    };
  },
  onSuccess: (e) => {
    console.log(`❇️  success by getting documents: "${e.map((e) => e._meta.fileName.split(".")[0])}"`)
  }
});
 
export default defineConfig({
  collections: [posts],
});