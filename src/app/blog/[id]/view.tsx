"use client"
import Image from "next/image";
import Highlight from "@/components/highlight";
import { MDXContent } from "@content-collections/mdx/react";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
export default function View({
    code
}: {
    code: string
}) {
    return (
        <MDXContent code={code} components={{ Highlight: (props) => <Highlight {...props} />, T: (props) => <ShadcnTooltip {...props} />, I: (props) => <Image {...props} /> }} />
    )
}

function ShadcnTooltip({
    trigger,
    content
}: {
    trigger: string,
    content: string
}) {
    return (
        <Tooltip>
            <TooltipTrigger>
                {trigger}
            </TooltipTrigger>
            <TooltipContent>
                {content}
            </TooltipContent>
        </Tooltip>
    )
}
