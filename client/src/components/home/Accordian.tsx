"use client"

import { useState } from "react"
import { ArrowDown, Minus } from "lucide-react"

interface AccordionItem {
  id: string
  title: string
  content: string
}

const accordionData: AccordionItem[] = [
  {
    id: "size-fit",
    title: "Size & Fit",
    content:
      'This blazer runs true to size. For a relaxed fit, consider sizing up. The model is wearing size M and is 5\'8" tall. Chest measurement: 34", Waist: 26", Hips: 36". The blazer features a tailored silhouette with structured shoulders and a slightly cropped length that hits at the hip.',
  },
  {
    id: "delivery-returns",
    title: "Delivery & Returns",
    content:
      "Free standard delivery on orders over ₹2,999. Express delivery available for ₹199. Standard delivery takes 3-5 business days, express delivery takes 1-2 business days. Free returns within 30 days of purchase. Items must be in original condition with tags attached. Return shipping is free for exchanges.",
  },
  {
    id: "how-made",
    title: "How This Was Made",
    content:
      "Crafted from premium wool blend fabric sourced from Italian mills. Each blazer is carefully constructed using traditional tailoring techniques combined with modern precision. The structured shoulders are achieved through canvas interfacing, while the lining is made from sustainable viscose. Hand-finished details include working buttonholes and genuine horn buttons.",
  },
]

export default function Accordion() {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set())

  const toggleItem = (itemId: string) => {
    const newOpenItems = new Set(openItems)
    if (newOpenItems.has(itemId)) {
      newOpenItems.delete(itemId)
    } else {
      newOpenItems.add(itemId)
    }
    setOpenItems(newOpenItems)
  }

  return (
    <div className="bg-black p-8 m-3">
      <div className="max-w-8xl mx-auto">
        <div className="bg-black">
          {accordionData.map((item, index) => (
            <div key={item.id} className="border-b border-gray-800 md:my-4">
              <button
                className="w-full flex items-center justify-between py-6 px-0 text-left focus:outline-none group"
                onClick={() => toggleItem(item.id)}
                aria-expanded={openItems.has(item.id)}
                aria-controls={`content-${item.id}`}
              >
                <span className="text-white text-3xl font-[Helvetica Neue] group-hover:text-gray-300 transition-colors duration-200">
                  {item.title}
                </span>

                <div className="flex-shrink-0 ml-4">
                  {openItems.has(item.id) ? (
                    <Minus className="w-10 h-10 text-white group-hover:text-gray-300 transition-all duration-300 ease-in-out" />
                  ) : (
                    <ArrowDown className="w-10 h-10 text-white mr-2 group-hover:text-gray-300 transition-all duration-300 ease-in-out" />
                  )}
                </div>
              </button>

              <div
                id={`content-${item.id}`}
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openItems.has(item.id) ? "max-h-96 opacity-100 pb-6" : "max-h-0 opacity-0 pb-0"
                }`}
              >
                <div className="text-gray-300 text-lg leading-relaxed pr-8">{item.content}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
