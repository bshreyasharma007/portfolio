"use client"
import Image from "next/image"
import Link from "next/link"
interface LinkProps {
  href: string
  label: string
  visible_href?: string
}

const LinkItem: React.FC<LinkProps> = ({ href, label, visible_href }) => {
  return (
    <div className="truncate overflow-hidden text-sm">
      <Link href={href} target="_blank">
        <span className="text-green-950">{label}</span>{" "}
        <span className="dark:text-yellow-500">{visible_href}</span>
      </Link>
    </div>
  )
}

interface WorkContainerProps {
  prod_description: string
  tech_stack: string
  imageSrc: string
  liveLinkSrc: string
  visibleLiveLinkSrc: string
  SourceCodeSrc: string
  visibleSourceCodeSrc: string
  CaseStudySrc: string
}
export const WorkContainer: React.FC<WorkContainerProps> = ({
  prod_description,
  tech_stack,
  imageSrc,
  liveLinkSrc,
  visibleLiveLinkSrc,
  SourceCodeSrc,
  visibleSourceCodeSrc,
  CaseStudySrc,
}) => {
  return (
    <div className="">
      <Link href={CaseStudySrc} target="_blank">
        <div className="border-[15px] min-h-[200px] min-w-[200px] max-h-[300px] max-w-[650px] border-[#91785D] dark:border-[#7B3F00] rounded-tr-sm rounded-tl-sm overflow-hidden">
          <Image alt="Image" width="400" height="400" src={imageSrc} />
        </div>
        <div className="min-w-[200px] max-w-[650px] bg-[#91785D] text-white dark:bg-[#7B3F00] rounded-br-sm rounded-bl-sm px-4 pb-3">
          <div className="text-sm truncate overflow-hidden">
            <span className="">{prod_description}</span>
          </div>
          <div className="text-sm truncate overflow-hidden">
            <span className="text-green-950">Tech Stack:</span>{" "}
            <span className="dark:text-yellow-500">{tech_stack}</span>
          </div>
          <LinkItem
            label="Live Link :"
            href={liveLinkSrc}
            visible_href={visibleLiveLinkSrc}
          />
          <LinkItem
            label="Source Code :"
            href={SourceCodeSrc}
            visible_href={visibleSourceCodeSrc}
          />
          <LinkItem label="Case Study" href={CaseStudySrc} />
        </div>
      </Link>
    </div>
  )
}
