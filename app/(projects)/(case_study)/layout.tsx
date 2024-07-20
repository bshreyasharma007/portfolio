"use client"
import Footer from "@/app/components/Footer"
import { Logo } from "@/app/components/NavBar/Logo"
import { ModeToggleButton } from "@/app/components/ToggleModeButton"
import { useState, useEffect } from "react"
interface layoutProps {
  children: React.ReactNode
}

const layout: React.FC<layoutProps> = ({ children }) => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  })
  return (
    <div className="flex flex-col items-center">
      {/**Nav Bar For Case Study */}
      <div
        className={`fixed w-full h-20 flex justify-center items-center px-6 ${
          isScrolled ? "border-0" : "border-y-2"
        }`}
      >
        <div className="flex w-full items-center py-4 justify-between md:px-4 lg:justify-between max-w-screen-xl">
          <Logo />
          <div>Case Study</div>
          <ModeToggleButton />
        </div>
      </div>
      <div className="pt-24 px-6 max-w-[1400px] min-h-screen w-full">
        {children}
      </div>
      {/**Footer */}
      <div className="flex justify-center items-center border-t-2 py-2 w-full bg-slate-950 dark:bg-slate-900">
        <div className="max-w-[900px] flex-col justify-between items-center text-white">
          <div className="text-xs"> © Copyright 2024. All rights Reserved.</div>
          <div className="text-xs text-center ">
            Made by Shreya Sharma in Next Js
          </div>
        </div>
      </div>
    </div>
  )
}

export default layout

{
  /**import { Logo } from "./Logo"
import { ModeToggleButton } from "../ToggleModeButton"
import { useState, useEffect } from "react"
export const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  })
  return (
    <div
      className={`fixed w-full h-20 flex justify-center items-center px-6 ${
        isScrolled ? "border-0" : "border-y-2"
      }`}
    >
      <div className="flex w-full items-center py-4 justify-between md:px-4 lg:justify-between max-w-screen-xl">
        <Logo />
        <ModeToggleButton />
      </div>
    </div>
  )
}
 */
}
