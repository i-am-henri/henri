import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"
import { Newsreader } from "next/font/google"
import { allPosts } from "content-collections";
import Img from "next/image"
import Link from "next/link"

const newsreader = Newsreader({
  subsets: ["latin"],
  style: "italic"
})

export default function Page() {
  console.log(allPosts.map((p) => p._meta.fileName))
  return (
    <main className="lg:w-[500px] space-y-12">
      <p>
        I'm a 14 years old german {" "}
        <Tooltip>
          <TooltipTrigger>
            <span className={newsreader.className}>webdeveloper</span>
          </TooltipTrigger>
          <TooltipContent className={newsreader.className}>
            or smthg. like that
          </TooltipContent>
        </Tooltip>, working on some (<Tooltip>
          <TooltipTrigger>
            <span className={newsreader.className}>too</span>
          </TooltipTrigger>
          <TooltipContent className={newsreader.className}>
            big monorepos
          </TooltipContent>
        </Tooltip>) big projects. I found my passion for programming about 3 years ago, with static html. Today, I'm working on {" "}
        <Tooltip>
          <TooltipTrigger>
            <span className={newsreader.className}>various projects</span>
          </TooltipTrigger>
          <TooltipContent className={newsreader.className}>
            like a email service
          </TooltipContent>
        </Tooltip>.
      </p>


      {/* Contact section */}
      <div className="space-y-2 flex flex-col">
        <p>There are <Tooltip>
          <TooltipTrigger>
            <span className={newsreader.className}>no dump questions</span>
          </TooltipTrigger>
          <TooltipContent className={newsreader.className}>
            mostly...
          </TooltipContent>
        </Tooltip>... so contact me if you need smthg</p>
        <div className="flex space-x-2">
          <Link href="https://github.com/i-am-henri">GitHub</Link>
          <Link href="">Discord</Link>
          <Link href="mailto:henri@selfmail.app">Email</Link>
          <Link href="https://layers.to/henrii">Layers</Link>
        </div>
      </div>
    </main>
  )
}