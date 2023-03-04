import Aos from "aos"
import "aos/dist/aos.css"
import { Banner } from "./components/Banner"
import { Benefits } from "./components/Benefits"
import { Contact } from "./components/Contact"
import { Faq } from "./components/Faq"
import { Header } from "./components/Header"
import { PlanList } from "./components/PlanList"
import { Pricing } from "./components/Pricing"
import { Testimonials } from "./components/Testimonials"

function App() {


  return (
    Aos.init({
      duration: 2500,
      delay: 400,
    }),
    <div className="max-w-[1440px] mx-auto bg-page overflow-hidden relative">
      <Header />
      <Banner />
      <Benefits />
      <Pricing />
      <Testimonials />
      <Faq />
      <Contact />
    </div>
  )
}

export default App
