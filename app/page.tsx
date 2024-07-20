import { NavBar } from "./components/NavBar/NavBar"
import { Hero } from "./components/Hero/Hero"
import { WorkContainer } from "./components/Work/work-container"
import { WorkPortfolio } from "./components/Work/Work-portfolio-main"
import Footer from "./components/Footer"

export default function Home() {
  return (
    <div>
      <div className="h-full">
        <NavBar />
        <Hero />
      </div>
      <div className="h-full min-h-screen flex justify-center bg-yellow-50 dark:bg-indigo-950 pb-12">
        <WorkPortfolio />
      </div>
      <Footer />
    </div>
  )
}
