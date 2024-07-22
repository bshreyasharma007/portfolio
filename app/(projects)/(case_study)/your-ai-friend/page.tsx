//Case study for Your AI Friend
import { Button } from "@/components/ui/button"
import { ProjectImage } from "../_component/project-image"
import Link from "next/link"
const YourAICompanion = () => {
  return (
    <div className="w-full">
      <div className="pt-4 pb-8">
        <Link href="/" className="">
          {" "}
          <Button>{"< "}Back</Button>
        </Link>
        <div>
          <div className="text-[#7B80DB] text-2xl pt-12">Web & App</div>
          <div className="text-4xl pt-6">YourAICompanion</div>
          <div className="text-xl pt-6">
            Live link:{" "}
            <a
              href="https://portfolio1.bshreyasharma.com/"
              className=" text-yellow-700 hover:text-blue-900 transition-all dark:text-yellow-400"
              target="_blank"
            >
              https://portfolio1.bshreyasharma.com/
            </a>
          </div>
          <div className="text-xl">
            Source Code:{" "}
            <a
              href="https://github.com/bshreyasharma007/your-ai-friend"
              className=" text-yellow-700 hover:text-blue-900 transition-all dark:text-yellow-400"
              target="_blank"
            >
              https://github.com/bshreyasharma007/your-ai-friend
            </a>
          </div>
          <div className="pt-8  flex justify-center h-full">
            <ProjectImage
              height={600}
              width={1600}
              images={[
                {
                  src: "/your-ai-friend/your-ai-friend.png",
                  alt: "Your AI Friend",
                },
                {
                  src: "/your-ai-friend/src1.png",
                  alt: "Landing Page",
                },
                {
                  src: "/your-ai-friend/src2.png",
                  alt: "Dashboard",
                },
                {
                  src: "/your-ai-friend/src3.png",
                  alt: "Chat with AI",
                },
              ]}
            />
          </div>
          <div className="pt-12 text-4xl">Overview </div>
          <div>
            <h2 className="pt-6 text-2xl text-yellow-700 dark:text-yellow-400">
              Why This Project ?
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              The buzz around generative AI and large language models (LLMs)
              like ChatGPT and Bard (Gemini) caught my attention. I found them
              surprisingly helpful for tasks like searching, researching, and
              debugging code. Inspired by these experiences and unable to attend
              Taylor Swift's Eras Tour, I decided to explore creating a chatbot
              using the OpenAI API. Thus, 'Your AI Friend' was born.
            </p>
          </div>
          <div>
            <h2 className="pt-6 text-2xl text-yellow-700 dark:text-yellow-400">
              Tech Stack Used ?
            </h2>{" "}
            <p className="text-gray-600 dark:text-gray-400">
              NextJs (For backend, frontend and API endpoint), TypeScript <br />
              <span className="text-black text-lg dark:text-green-700">
                Database:
              </span>{" "}
              Pinecode vector database for machine learning model to refer to
              past keywords easily, MySQL on aiven for persistent data like
              Category, user data, etc
              <br />{" "}
              <span className="text-black text-lg dark:text-green-700">
                Cache:
              </span>{" "}
              Upstash Redis <br />
              <span className="text-black text-lg dark:text-green-700">
                Deployment:
              </span>{" "}
              Vercel
              <br />
              <span className="text-black text-lg dark:text-green-700">
                Machine Learning Model:
              </span>{" "}
              llama2-13b(Based on Large Language Model from Open AI API) <br />
              <span className="text-black text-lg dark:text-green-700">
                Authentication:
              </span>{" "}
              Clerk <br />
              <span className="text-black text-lg dark:text-green-700">
                Library:
              </span>{" "}
              Shadcn-ui (Flexible UI Component), Tailwind (For CSS), Langchain
              (ML Model)
            </p>
          </div>
          <div>
            <h2 className="pt-6 text-2xl text-yellow-700 dark:text-yellow-400">
              Current Issues and Future Plan ?
            </h2>
            <ul className="list-disc pl-8 text-gray-800 dark:text-gray-400">
              <li>
                Slowness in application navigation (Working on improving
                performance)
              </li>
              <li>Integrating Razorpay with the application</li>
              <li>
                Enabling Settings page from where one can check their billing
                cycle
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default YourAICompanion
