"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import video from "../../assets/product_video.mp4"
import image1 from "../../assets/product_img1.jpg"
import image2 from "../../assets/prod_img2.jpg"
import image3 from "../../assets/prod_img3.jpg"

// Define types for our component
type Size = "XS" | "S" | "M" | "L" | "XL"

interface ProductImage {
  id: string
  type: "image" | "video"
  src: string
  alt?: string
  poster?: string
}

export default function ProductPage() {
  // Product data
  const productName = "Tailored Blazer Suit"
  const productDescription = "A tailored composition in motion. Cut from structured wool with a sculpted shoulder and softened hem, this piece captures presence without force. Worn here in the stillness of a city in motion."
  const productPrice = "₹7,999"
  const productTaxInfo = "MRP incl. of all taxes"

  // Media assets
  const productMedia: ProductImage[] = [
    {
      id: "video1",
      type: "video",
      src: `${video}`,
      poster: "/placeholder.svg?height=600&width=450",
      alt: "Product video",
    },
    {
      id: "img1",
      type: "image",
      src: `${image1}`,
      alt: "Front view",
    },
    {
      id: "img2",
      type: "image",
      src: `${image2}`,
      alt: "Side view",
    },
    {
      id: "img3",
      type: "image",
      src: `${image3}`,
      alt: "Back view",
    },
  ]

  // State management
  const [mainMedia, setMainMedia] = useState<ProductImage>(productMedia[0])
  const [selectedSize, setSelectedSize] = useState<Size | null>(null)

  const handleThumbnailClick = (media: ProductImage) => {
    setMainMedia(media)
  }

  // Get thumbnails (excluding the main media)
  const getThumbnails = () => {
    if (mainMedia.type === "video") {
      return productMedia.slice(1)
    } else {
      // If an image is selected as main, put the video as the first thumbnail
      const video = productMedia[0]
      return [video, ...productMedia.slice(1).filter((item) => item.id !== mainMedia.id)]
    }
  }

  // Handle size selection
  const handleSizeSelect = (size: Size) => {
    setSelectedSize(size)
  }

  return (
    <div className="min-h-screen bg-white rounded-md">
      <div className="mx-auto m-2">
        {/* Product Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="relative h-[300px] md:h-full md:aspect-[3/4] bg-gray-100 rounded-md overflow-hidden">
            {mainMedia.type === "video" ? (
              <div
                className="w-full h-full cursor-pointer"
              >
                <video className="w-full h-full object-cover" poster={mainMedia.poster} muted autoPlay playsInline loop>
                  <source src={mainMedia.src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            ) : (
              <img
                src={mainMedia.src || "/placeholder.svg"}
                alt={mainMedia.alt || productName}
                className="w-full h-full object-cover"
              />
            )}
          </div>

          {/* Right Column - Product Info */}
          <div className="py-2 px-2 md:px-4 md:py-8 md:mr-8">
            {/* Product Description */}
            <div className="mb-8">
              <p className="text-xs hidden md:block text-gray-800 leading-relaxed mr-1 md:mr-50 font-bold">{productDescription}</p>
            </div>

            {/* Thumbnails */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              {getThumbnails().map((media) => (
                <div
                  key={media.id}
                  className="aspect-[3/4] bg-gray-100 rounded-md overflow-hidden cursor-pointer relative"
                  onClick={() => handleThumbnailClick(media)}
                >
                  {media.type === "video" ? (
                    <>
                      <video className="w-full h-full object-cover" poster={media.poster} muted>
                        <source src={media.src} type="video/mp4" />
                      </video>
                      <div className="absolute top-2 right-2 bg-black/50 rounded-full p-1">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </>
                  ) : (
                    <img
                      src={media.src || "/placeholder.svg"}
                      alt={media.alt || `${productName} view`}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
              ))}
            </div>

            {/* Price */}
            <div className="mb-6 border-t border-b border-gray-200 py-4 md:mt-20">
              <div className="flex items-baseline">
                <span className="text-3xl font-medium text-black my-6">{productPrice}</span>
                <span className="ml-2 text-xs text-gray-500">{productTaxInfo}</span>
              </div>
            </div>

            {/* Size Selection */}
            <div className="mb-6 md:mb-18 md:mr-30">
              <div className="flex items-center mb-2">
                <p className="text-md text-gray-600">Please select a size</p>
                <button className="text-xs text-gray-500 ml-6 underline">Size chart</button>
              </div>

              <div className="grid grid-cols-5 gap-2">
                {(["XS", "S", "M", "L", "XL"] as Size[]).map((size) => (
                  <button
                    key={size}
                    className={`py-3 text-center text-sm font-medium rounded-md transition-colors ${
                      selectedSize === size ? "bg-black text-white" : "bg-gray-200 text-gray-800 hover:bg-gray-200"
                    }`}
                    onClick={() => handleSizeSelect(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="grid grid-cols-2 gap-4 md:mt-40">
              <button className="py-3 px-6 border border-gray-300 rounded-md text-gray-800 font-medium hover:bg-gray-50 transition-colors">
                Add to Cart
              </button>
              <Link
                to="/checkout"
                className={`py-3 px-6 bg-black text-white rounded-md font-medium text-center ${
                  !selectedSize ? "opacity-50 cursor-not-allowed pointer-events-none" : "hover:bg-[var(--color-btn-red)] transition-colors"
                }`}
              >
                Buy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
