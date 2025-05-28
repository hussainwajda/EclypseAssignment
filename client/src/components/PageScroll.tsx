import React from 'react'
import { ArrowUp } from "lucide-react"

function PageScroll() {
    const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <button
          onClick={scrollToTop}
          className="absolute top-12 right-6 md:right-12 bg-white rounded-full p-3 text-black hover:bg-gray-200 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-400"
          aria-label="Back to top"
        >
          <ArrowUp className="h-4 w-4" />
    </button>
)
}

export default PageScroll