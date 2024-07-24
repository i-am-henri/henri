import { highlight } from 'sugar-high'

/**
 * @param {string} code
 */
export default function Highlight({
    code
}: {
    code: string
}) {
    const html = highlight(code)
    return (
        <div dangerouslySetInnerHTML={{__html: html}}>
        </div>
    )
}