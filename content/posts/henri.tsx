import type React from "react";

/**
 * The components, which will be needed for the blog post. You can
 * also customize the given components, like the h2, p or h1 components.
 */
const components: {
    // biome-ignore lint/suspicious/noExplicitAny: We can't now, which props the user wants to use for his/her component 
    [key: string]: (...args: any[]) => JSX.Element;
} = {
    Text: (props) => <p>Das ist ein Text</p>
}
export default components;