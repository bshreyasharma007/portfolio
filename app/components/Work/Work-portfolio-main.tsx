import { WorkContainer } from "./work-container"
export const WorkPortfolio = () => {
  return (
    <div className="h-full w-full max-w-[1400px]">
      <div className="flex justify-center">
        <div className="pb-16 w-1/2 pt-16">
          <h1 className=" z-0 text-center pb-4 mb-4 text-5xl border-b-2 border-yellow-900 text-yellow-900 dark:text-yellow-400 dark:border-yellow-400">
            View My Work
          </h1>
        </div>
      </div>
      <div className=" grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3 px-8 gap-7">
        <WorkContainer
          prod_description="Fix Your Finance: SAAS platform to track your income and expenses, categorise transactions and assign them to a
         specific accounts"
          tech_stack="Tailwind, React.js, Next.js"
          imageSrc="/images/work-in-progress.png"
          liveLinkSrc="Comming Soon"
          visibleLiveLinkSrc="Comming Soon"
          SourceCodeSrc="Comming Soon"
          visibleSourceCodeSrc="Comming Soon"
          CaseStudySrc="/fix-your-finance"
        />

        <WorkContainer
          prod_description="Your AI Friend: Get a chance to make a celebrity or famious person your friend and chat with them"
          tech_stack="Tailwind, React.js, Next.js, Prisma, MongoDB, Next Auth"
          imageSrc="/images/your-ai-friend.png"
          liveLinkSrc="https://portfolio1.bshreyasharma.com/"
          visibleLiveLinkSrc="ai-friend"
          SourceCodeSrc="https://github.com/bshreyasharma007/ai-friend"
          visibleSourceCodeSrc="ai-friend"
          CaseStudySrc="/your-ai-friend"
        />

        <WorkContainer
          prod_description="Wedding Planning: Wedding Planning is a platform where vendors can list their services and customer can book the services"
          tech_stack="Tailwind, React.js, Next.js, Prisma, MySQL"
          imageSrc="/images/work-in-progress.png"
          liveLinkSrc="Comming Soon"
          visibleLiveLinkSrc="Comming Soon"
          SourceCodeSrc="https://github.com/bshreyasharma007/wedding-planner"
          visibleSourceCodeSrc="your-personal-wedding-planner"
          CaseStudySrc="/personal-wedding-planner"
        />
      </div>
    </div>
  )
}
