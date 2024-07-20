"use client"
import { Logo } from "./Logo"
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
