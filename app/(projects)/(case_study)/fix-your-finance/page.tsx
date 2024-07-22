import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ProjectImage } from "../_component/project-image"
const FixYourFinance = () => {
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
            <div className="text-4xl pt-6">Fix Your Finance</div>
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
                href=""
                className=" text-yellow-700 hover:text-blue-900 transition-all dark:text-yellow-400"
                target="_blank"
              ></a>
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
                Are you finding it difficult to save despite earning a steady
                income? If you often wonder where your money goes by the end of
                each month, you’re not alone. Financial management is not just
                about making ends meet—it’s about thriving and building a secure
                future.
                <br />
                This project is designed to help you take control of your
                finances. By tracking your expenses and income, you’ll gain
                invaluable insights into your spending habits. Imagine being
                able to identify unnecessary expenses that drain your resources,
                such as frequent dining out or other unhealthy habits that
                impact your health and finances.
                <br />
                Improving your financial habits begins with awareness and
                measurement. Join us on this journey towards financial
                empowerment and stability. Together, we can make smarter
                choices, secure our futures, and live healthier, wealthier
                lives. <br />
                Ready to take charge of your financial well-being? Let’s get
                started.
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

export default FixYourFinance
