"use client"

import * as React from "react"
import { MdOutlineWbSunny } from "react-icons/md"
import { BsMoonStarsFill } from "react-icons/bs"
import { useTheme } from "next-themes"

export function ModeToggleButton() {
  const { setTheme } = useTheme()

  return (
    <button className="flex justify-center items-center border-2 p-2 rounded-lg drop-shadow-sm z-10">
      <MdOutlineWbSunny
        size={26}
        onClick={() => setTheme("dark")}
        className=" border-0 h-[1.9rem] w-[1.9rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
      />
      <BsMoonStarsFill
        size={26}
        onClick={() => setTheme("light")}
        className=" border-0 absolute h-[1.5rem] w-[1.5rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
      />
      <span className="sr-only">Toggle theme</span>
    </button>
  )
}
