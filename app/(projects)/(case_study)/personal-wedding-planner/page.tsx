import { ProjectImage } from "../_component/project-image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
const PersonalWeddingPlanner = () => {
  return (
    <div>
      <div className="w-full">
        <div className="pt-4 pb-8">
          <Link href="/" className="">
            {" "}
            <Button>{"< "}Back</Button>
          </Link>
          <div>
            <div className="text-[#7B80DB] text-2xl pt-12">Web & App</div>
            <div className="text-4xl pt-6">Personal Wedding Planner</div>
            <div className="text-xl pt-6">
              Live link:{" "}
              <a
                href=""
                className=" text-yellow-700 hover:text-blue-900 transition-all dark:text-yellow-400"
                target="_blank"
              ></a>
            </div>
            <div className="text-xl">
              Source Code:{" "}
              <a
                href="https://github.com/bshreyasharma007/wedding-planner"
                className=" text-yellow-700 hover:text-blue-900 transition-all dark:text-yellow-400"
                target="_blank"
              >
                https://github.com/bshreyasharma007/wedding-planner
              </a>
            </div>
            <div className="pt-8  flex justify-center h-full">
              {/** <ProjectImage
                height={600}
                width={1600}
                images={[
                  {
                    src: "",
                    alt: "Your AI Friend",
                  },
                  {
                    src: "",
                    alt: "Landing Page",
                  },
                  {
                    src: "",
                    alt: "Dashboard",
                  },
                  {
                    src: "",
                    alt: "Chat with AI",
                  },
                ]}/> */}
            </div>
            <div className="pt-12 text-4xl">Overview </div>
            <div>
              <h2 className="pt-6 text-2xl text-yellow-700 dark:text-yellow-400">
                Why This Project ?
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                My friends were getting married and I saw the struggle they went
                through during their wedding planning, there are 3rd party who
                do wedding planning but they are costly. Above led to born of
                "Personal Wedding Planner" which is a platform where all the
                vendors can come together to list their service, then customer
                can view the vendor and book the vendors according to their
                preference.
              </p>
            </div>
            <div>
              <h2 className="pt-6 text-2xl text-yellow-700 dark:text-yellow-400">
                Tech Stack Used ?
              </h2>{" "}
              <p className="text-gray-600 dark:text-gray-400">
                NextJs (For backend, frontend and API endpoint), TypeScript{" "}
                <br />
                <span className="text-black text-lg dark:text-green-700">
                  Library:
                </span>{" "}
                Shadcn-ui (Flexible UI Component), Tailwind (For CSS)
              </p>
            </div>
            <div>
              <h2 className="pt-6 text-2xl text-yellow-700 dark:text-yellow-400">
                Current Issues and Future Plan ?
              </h2>
              <ul className="list-disc pl-8 text-gray-800 dark:text-gray-400">
                <li>Use Next Auth for authentication</li>
                <li>Recommendation System</li>
                <li>Yet to complete the project</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PersonalWeddingPlanner
