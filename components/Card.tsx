"use client"
import {motion} from "framer-motion"
import Img from "next/image"
import { useRouter } from "next/navigation"

export default function Card({
    link,
    description,
    title,
    image,
    alt,
    ready,
    category
}: {
    link?:string,
    description: string,
    title: string,
    image: string,
    alt: string,
    category?: string,
    ready: boolean
}) {
    const router = useRouter()
    return (
        <motion.div className="flex flex-col" onClick={() => {
            if (link) router.push(link)
        }}>
            <Img src={image} alt={alt} width={1000} height={1000} />
            <h2 className="text-lg m-0">{title}</h2>
            <p>{description}</p>
        </motion.div>
    )
}