"use client"

import { IoMdClose } from "react-icons/io"
import { FaPhone } from "react-icons/fa6"
import { MdOutlineMail } from "react-icons/md"
import useModal from "../components/hooks/useModal"

export const Modal = () => {
  const { isOpen, onClose } = useModal()

  return (
    <div>
      {isOpen && (
        <div className="fixed flex justify-center items-center  bg-yellow-200/70 dark:bg-slate-400/70 inset-0 z-50 outline-none focus:outline-none">
          <div className="relative bg-white dark:bg-slate-800 w-full md:w-[700px] xl:w-[750px] mx-auto drop-shadow-md p-6 overflow-x-hidden overflow-y-auto">
            <button onClick={() => onClose()} className="absolute right-9 ">
              <IoMdClose size={24} />
            </button>
            <div className="px-6 py-12 flex flex-col gap-y-4">
              <h1 className="text-center text-3xl pb-6 border-b-2 ">
                Connect With Me
              </h1>
              <div className="flex flex-col xl:flex-row justify-between gap-y-6 font-semibold pt-8 ">
                {/* <div className="flex justify-start items-center gap-x-2 ">
                  <FaPhone size={28} className="text-green-700" />{" "}
                  <span className="text-xl">+91-7720918651</span>
                </div> */}
                <div className="flex justify-start items-center gap-x-3">
                  <MdOutlineMail size={30} />
                  <span className="text-xl"> bshreyasharma7@gmail.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
