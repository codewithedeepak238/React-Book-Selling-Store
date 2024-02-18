import { Hero } from "./Components/Hero"
import { FeaturedProduct } from "./Components/FeaturedProduct"
import { Testimonials } from "./Components/Testimonials"
import { Faq } from "./Components/Faq"
export const HomePage = () => {
  return (
    <main>
        <Hero/>
        <FeaturedProduct/>
        <Testimonials/>
        <Faq/>
    </main>
  )
}
