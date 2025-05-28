import { useState, useEffect, useCallback } from "react"
import { ChevronLeft, Quote } from "lucide-react"
import cus1 from "../../assets/cus1.jpg"
import cus2 from "../../assets/cus2.jpg"
import cus3 from "../../assets/cus3.jpg"

interface Testimonial {
  id: number
  quote: string
  name: string
  location: string
  image: string
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: "Understated, but unforgettable. It feels like it was made for me",
    name: "Emma Johnson",
    location: "NY, USA",
    image: `${cus1}`,
  },
  {
    id: 2,
    quote: "Exceptional quality and attention to detail. Worth every penny",
    name: "Michael Chen",
    location: "LA, USA",
    image: `${cus2}`,
  },
  {
    id: 3,
    quote: "Timeless design that stands out in all the right ways",
    name: "Sophia Rodriguez",
    location: "London, UK",
    image: `${cus3}`,
  },
]

export default function TestimonialCarousel() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const goToTestimonial = useCallback(
    (index: number) => {
      if (isTransitioning) return

      setIsTransitioning(true)
      setActiveIndex(index)

      setTimeout(() => {
        setIsTransitioning(false)
      }, 800)
    },
    [isTransitioning],
  )

  const goToNextTestimonial = useCallback(() => {
    const nextIndex = (activeIndex + 1) % testimonials.length
    goToTestimonial(nextIndex)
  }, [activeIndex, goToTestimonial])

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      goToNextTestimonial()
    }, 3000) // Change every 3 seconds

    return () => clearInterval(interval)
  }, [goToNextTestimonial])

  return (
    <div className="bg-black flex items-center justify-center p-4">
      <div className="max-w-8xl w-full md:mx-6 md:my-6">
        <div className="mb-16">
          <h2 className="text-white text-sm font-roboto tracking-widest uppercase">Our Customers</h2>
        </div>

        <div className="relative flex flex-col md:flex-row items-start justify-between">
          {/* Testimonial Content */}
          <div className="w-full md:w-3/4 relative h-[300px]">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`absolute top-0 left-0 w-full transition-all duration-600 ease-in-out ${
                  index === activeIndex ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8 pointer-events-none"
                }`}
              >
                <div className="flex items-start mb-8">
                  {/* <span className="text-white text-8xl font-[Coolvetica]">“</span> */}
                  <h3 className="text-white text-6xl font-light ml-2"><sup className="text-8xl font-[Coolvetica] align-top">“</sup>{testimonial.quote}</h3>
                </div>

                <div className="mt-8">
                  <p className="text-white text-lg font-medium">{testimonial.name}</p>
                  <p className="text-gray-400 text-sm mt-1">{testimonial.location}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Profile Images */}
          <div className="flex flex-row md:flex-col items-center space-x-3 md:space-x-0 md:space-y-5 mt-8 md:mt-0">
            {testimonials.map((testimonial, index) => (
              <button
                key={testimonial.id}
                className={`relative rounded-full overflow-hidden transition-all duration-300 ${
                  index === activeIndex
                    ? "ring-2 ring-white ring-offset-2 ring-offset-black z-10"
                    : "opacity-40 hover:opacity-70 transform scale-75 hover:scale-80"
                }`}
                onClick={() => goToTestimonial(index)}
                aria-label={`View testimonial from ${testimonial.name}`}
              >
                <div
                  className={`rounded-full overflow-hidden transition-all duration-300 ${
                    index === activeIndex ? "w-12 h-12 md:w-16 md:h-16" : "w-10 h-10 md:w-12 md:h-12"
                  }`}
                >
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                {index === activeIndex && (
                  <div className="absolute -left-6 top-1/2 transform -translate-y-1/2 hidden md:block">
                    <ChevronLeft className="w-4 h-4 text-white" />
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Bottom Border */}
        <div className="mt-16 border-t border-gray-800 w-full"></div>
      </div>
    </div>
  )
}
