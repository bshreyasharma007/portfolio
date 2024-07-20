"use client"
import Image from "next/image"
import { useState, useEffect } from "react"

export const Logo = () => {
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
      className={`flex items-center justify-center gap-x-2 ${
        isScrolled
          ? "translate-y-full opacity-0"
          : "transition-transform duration-300"
      }`}
    >
      <div>
        <div className={`absolute dark:hidden`}>
          <Image
            alt="Logo"
            width="50"
            height="50"
            src="/images/logo.svg"
            className="block"
          ></Image>
        </div>
        <div>
          <Image
            alt="Logo"
            width="50"
            height="50"
            src="/images/dark-mode-logo.svg"
            className="block"
          ></Image>
        </div>
      </div>
    </div>
  )
}
