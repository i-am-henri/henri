import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTrigger } from "@/components/ui/dialog"
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTrigger } from "@/components/ui/drawer"
import Image from "next/image"
import Link from "next/link"

export default function WorkCard({
    title,
    description,
    ready,
    link,
    github,
    image,
    content
}: {
    title: string,
    description: string,
    ready: boolean,
    link?: string,
    github?: string,
    image?: string,
    content: string
}) {
    return (
        <>
            <Dialog>
                <DialogTrigger className="hidden md:flex flex-col hover:bg-popover duration-200 rounded-md border p-2 justify-start">
                    <h3 className="text-lg font-medium">
                        {title}
                    </h3>
                    {image && (
                        <Image src={image} alt={description} />
                    )}
                    <p className="text-start">
                        {description}
                    </p>
                </DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        {title}
                    </DialogHeader>
                    <DialogDescription>
                        {content}
                    </DialogDescription>
                    <DialogFooter className="flex space-x-3">
                        {github && (
                            <Link href={github}>
                                GitHub
                            </Link>
                        )}
                        {link && (
                            <Link href={link}>
                                Visit
                            </Link>
                        )}
                        <DialogClose>
                            Ok
                        </DialogClose>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
            <Drawer>
                <DrawerTrigger className="flex md:hidden flex-col hover:bg-popover duration-200 rounded-md border p-2 justify-start">
                    <h3 className="text-lg font-medium">
                        {title}
                    </h3>
                    {image && (
                        <Image src={image} alt={description} />
                    )}
                    <p className="text-start">
                        {description}
                    </p>
                </DrawerTrigger>
                <DrawerContent>
                    <DrawerHeader>
                        {title}
                    </DrawerHeader>
                    <DrawerDescription>
                        {content}
                    </DrawerDescription>
                    <DrawerFooter className="flex items-center space-x-2">
                        {github && (
                            <Link href={github}>
                                GitHub
                            </Link>
                        )}
                        {link && (
                            <Link href={link}>
                                Visit
                            </Link>
                        )}
                        <DrawerClose>
                            Ok
                        </DrawerClose>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    )
}