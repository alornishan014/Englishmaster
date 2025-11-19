import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Credit from '@/components/layout/Credit'
import HeroSection from '@/components/sections/HeroSection'
import CourseCardsSection from '@/components/sections/CourseCardsSection'
import TestimonialSection from '@/components/sections/TestimonialSection'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <CourseCardsSection />
        <TestimonialSection />
      </main>
      <Footer />
      <Credit />
    </div>
  )
}