import type React from "react";

/**
 * The components, which will be needed for the blog post.
 */
const components: {
    // biome-ignore lint/suspicious/noExplicitAny: We can't now, which props the user wants to use for his/her component 
    [key: string]: (...args: any[]) => JSX.Element;
} = {
    h2: (props) => <h2>{props.children}</h2>
}
export default components;