import { cn } from '@/lib/utils'
import { JetBrains_Mono } from 'next/font/google'
import { useEffect } from 'react'
import { highlight } from 'sugar-high'

const mono = JetBrains_Mono({
    subsets: ["latin"],
    preload: true,
    display: "swap"
})

/**
 * @param {string} code
 */
export default function Highlight({
    code
}: {
    code: string
}) {
    const html = highlight(code)
    console.log(code)

    useEffect(() => {
        document.querySelector("pre > code")!.innerHTML = html
    })

    return (
        <pre  className={cn('bg-popover p-2 rounded-xl border', mono.className)}>
            <code>
                {/* Sugar high will now insert the code in this field. */}
            </code>
        </pre>
    )
}