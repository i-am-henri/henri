import WorkCard from "./card"

export default function Work() {
    return (
        <div className="flex flex-col space-y-6 lg:w-[500px]">
            <p>These are the projects I'm working on...</p>
            <div className="flex flex-col space-y-6">
                <WorkCard content="Canvasly is a fully open-source presentations editor, which is focussed on a template based experience. It works with and for your team, even on your servers." description="Fully open-source presentation editor." title="Canvasly" ready={true} github="https://github.com/i-am-henri/canvasly" link="https://canvasly.app"  />
                <WorkCard content="Selfmail is a email provider which is based on cloudflare workers and resend. This project is free-to-use and can be selfhosted. Contributions are also welcomed." description="Free-to-use and open source email provider with a wide range of features." ready={true} title="Selfmail" github="https://github.com/i-am-henri/selfmail" image="" link="https://selfmail.app" />
            </div>
        </div>
    )
}