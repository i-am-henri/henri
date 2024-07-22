import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"
import { Newsreader } from "next/font/google"
import Img from "next/image"
const newsreader = Newsreader({
  subsets: ["latin"],
  style: "italic"
})
export default function Page() {
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
      
    </main>
  )
}