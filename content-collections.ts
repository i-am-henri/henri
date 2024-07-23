import { defineCollection, defineConfig } from "@content-collections/core";
 
const posts = defineCollection({
  name: "posts",
  directory: "src/posts",
  include: "*.mdx",
  schema: (z) => ({
    title: z.string(),
    date: z.string(),
  }),
});
 
export default defineConfig({
  collections: [posts],
});