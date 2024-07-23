import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"
import { Newsreader } from "next/font/google"
import { allPosts } from "content-collections";
import Img from "next/image"
import Link from "next/link"
import Badge from "./badge";
import Nextjs from "./icons/next";
import Zod from "./icons/zod"
import TypeScript from "./icons/ts";
import Hono from "./icons/hono";
import React from "./icons/react";
import Figma from "./icons/figma";
import Qwik from "./icons/qwik";
import ProjectCard from "./project";

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

      {/* Life section */}
      <div className="flex flex-col space-y-2">
        {/* Pixabay stock photo */}
        <Img src="/wakeboard.jpg" alt="Stockfoto wakeboard" className="rounded-xl" width={1920} height={1200} />
        <p>In my free-time, outside from school, I love to go <Tooltip>
            <TooltipTrigger>
              <span className={newsreader.className}>wakeboarding</span>
            </TooltipTrigger>
            <TooltipContent className={newsreader.className}>
              like surfing
            </TooltipContent>
          </Tooltip>, to code and sometimes playing tennis and table tennis. I like doing stuff with the computer.</p>
      </div>

      {/* Skills section, Icons are from svgl */}
      <div className="flex flex-col space-y-2">
        <div className="flex flex-wrap space-x-1">
          <Badge>
            <Nextjs /> <p>Nextjs</p>
          </Badge>
          <Badge>
            <Zod /> <p>Zod</p>
          </Badge>
          <Badge>
            <TypeScript /> <p>Typescript</p>
          </Badge>
          <Badge>
            <Hono /> <p>Hono</p>
          </Badge>
          <Badge>
            <Qwik /> <p>Qwik</p>
          </Badge>
          <Badge>
            <Figma /> <p>Figma</p>
          </Badge>
        </div>
        <p>These are some of the skills, I've learned in the <Tooltip>
            <TooltipTrigger>
              <span className={newsreader.className}>past few years</span>
            </TooltipTrigger>
            <TooltipContent className={newsreader.className}>like 3 years</TooltipContent>
          </Tooltip>. As I already mentioned, I often move in the webspace.</p>
      </div>

      {/* Project section */}
      <div className="space-y-2 flex flex-col">
        <div className="flex flex-col space-y-1">
          <ProjectCard title="Selfmail" github="https://github.com/i-am-henri/selfmail" description="Selfmail is a open-source and selfhostable email service." link="https://selfmail.app" />
          <ProjectCard title="Canvasly" github="https://github.com/i-am-henri/canvasly" description="A power point alternative, with templates for quick workflows." link="https://canvasly.app" />
          <ProjectCard title="Contentio" github="https://github.com/i-am-henri/contentio" description="A cli to add content to your app. All the code is stored in your project." link="https://contentio.vercel.app" />
        </div>
        <p>These are projects I've made in the last 3 years. Most of them are open-source and avaiable on github.</p>
      </div>

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