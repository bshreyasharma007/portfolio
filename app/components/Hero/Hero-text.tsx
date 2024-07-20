"use client"
import Link from "next/link"
import { SocialIcon } from "../SocialIcon"
import useModal from "../hooks/useModal"
import { Modal } from "@/app/modal/Modal"
export const HeroText = () => {
  const { onOpen } = useModal()
  return (
    <div className="px-6 pb-16 md:pb-6">
      <Modal />
      <h1 className="text-6xl pb-4 text-blue-950 dark:text-yellow-400">
        Hi !{" "}
      </h1>
      <h1 className="text-6xl pb-6 text-blue-950 dark:text-yellow-400">
        I'm Shreya <span className="hidden md:inline">Sharma</span>{" "}
      </h1>
      {/**OTHER CONTENT */}
      <div className="pb-6">
        <SocialIcon />
      </div>
      <div className="pb-12 max-w-[650px]">
        <p className="pb-3 text-justify">
          {" "}
          Software Engineer with a brain that's like a hamster on a wheel-
          constantly spinning with ideas and scenarios. I've even considered
          giving it a tiny exercise ball to keep it occupied!{" "}
        </p>
        <p className="text-justify">
          Despite my brain's best efforts to keep me on my toes, I've embraced
          my natural inclination and found myself drawn towards building
          applications which has the potential to solve real world problems that
          are user friendly and powered by robust backend infrastructure serving
          millions of users.{" "}
        </p>
      </div>
      <div className="flex gap-8">
        <button
          onClick={onOpen}
          className="px-6 rounded-lg text-white dark:bg-yellow-600 bg-blue-950 hover:bg-blue-900 drop-shadow-lg dark:hover:bg-yellow-900 dark:transition transition"
        >
          Connect With Me
        </button>
        <div className="px-6 py-2 rounded-lg border-2 border-dashed border-blue-950 dark:border-yellow-600 hover:bg-slate-200 drop-shadow-lg transition dark:hover:text-black dark:transition">
          <Link href="/Shreya_SDE.pdf" target="_blank">
            View Resume
          </Link>
        </div>
      </div>
    </div>
  )
}
