import About from '@/components/About'
import Gallery from '@/components/Gallery'
import Hero from '@/components/Hero'
import Pricing from '@/components/Pricing'
import Testimonial from '@/components/Testimonial'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <Hero/>
      <About/>
      <Gallery/>
      <Pricing/>
      <Testimonial/>
    </div>
  )
}
