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
    console.log(body)
    return {
      ...document,
      body,
    };
  }
});
 
export default defineConfig({
  collections: [posts],
});