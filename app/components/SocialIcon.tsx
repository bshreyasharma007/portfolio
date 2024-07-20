import { FaSquareXTwitter } from "react-icons/fa6"
import { FaLinkedin } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
import { Button } from "@/components/ui/button"
import { GoDotFill } from "react-icons/go"
import Image from "next/image"
import useModal from "./hooks/useModal"
export const SocialIcon = () => {
  const { onOpen } = useModal()
  const socialIconHeight = "h-8"
  const socialIconWidth = "w-8"
  const ImageHeight = 0
  const ImageWidth = 35
  return (
    <div className="flex flex-col md:flex-row md:justify-between">
      <div className="flex gap-x-4">
        <a
          href="https://www.linkedin.com/in/shreya-sharma-872a10146/"
          target="_blank"
        >
          <FaLinkedin
            className={` ${socialIconHeight} ${socialIconWidth} transform hover:scale-[115%] transition ease-out duration-300 text-[#0762C8] dark:text-white`}
          />
        </a>
        <a href="https://twitter.com/BshreyaSharma" target="_blank">
          <FaSquareXTwitter
            className={` ${socialIconHeight} ${socialIconWidth} transform hover:scale-[115%] transition ease-out duration-300 `}
          />
        </a>
        <a href="https://github.com/bshreyasharma007" target="_blank">
          <FaGithub
            className={` ${socialIconHeight} ${socialIconWidth} transform hover:scale-[115%] transition ease-out duration-300 `}
          />
        </a>{" "}
        {/**LIGHT THEME */}
        <a href="/Shreya_SDE.pdf" download="shreya-sharma.pdf" target="_blank">
          <Image
            src="/images/resume-icon.png"
            alt="Resume Download Button"
            width={ImageWidth}
            height={ImageHeight}
            className="transform hover:scale-[115%] transition ease-out duration-300"
          />
        </a>
        <button onClick={onOpen}>
          <Image
            src="/images/contact-me-icon.png"
            alt="Contact me via email or phone number"
            width={ImageWidth}
            height={ImageHeight}
            className="transform scale-[125%] hover:scale-[140%] transition ease-out duration-300"
          />
        </button>
      </div>
      <div>
        <div className="mt-6 md:mt-0 flex items-center gap-1 bg-green-100 rounded-md pr-2 pl-1 w-fit">
          {" "}
          <GoDotFill className="text-green-700" />{" "}
          <span className="text-green-700">Available for work </span>
        </div>
      </div>
    </div>
  )
}
