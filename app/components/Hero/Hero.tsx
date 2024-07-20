import { HeroImage } from "./Hero-image"
import { HeroText } from "./Hero-text"
import Image from "next/image"
export const Hero = () => {
  return (
    <div className=" min-h-[calc(100%-80px)] flex justify-center">
      <div className=" w-full max-w-screen-lg ">
        <div className=" h-full flex flex-col-reverse md:flex-row md:justify-center md:items-center pt-20">
          {" "}
          <div className="max-w-2xl">
            <HeroText />
          </div>
          <div className="flex-shrink">
            <HeroImage />
          </div>
        </div>
      </div>
    </div>
  )
}
