import video from "../../assets/video_card.mp4"
import image1 from "../../assets/card2.jpg"
import image2 from "../../assets/card3.jpg"
import image3 from "../../assets/card4.jpg"
import image4 from "../../assets/logo.jpg"
import eclypse from "../../assets/brand.png"

interface MediaItem {
  id: string
  type: "video" | "image"
  src: string
  alt?: string
  poster?: string
  hoverText?: string;
}

const mediaItems: MediaItem[] = [
  {
    id: "1",
    type: "video",
    src: `${video}`,
    alt: "Woman in red coat walking on street",
  },
  {
    id: "2",
    type: "image",
    src: `${image1}`,
    alt: "Red rock canyon formations",
    hoverText: "Premium wool blend in signature vermilion",
  },
  {
    id: "3",
    type: "image",
    src: `${image2}`,
    alt: "Red fabric texture close-up",
    hoverText: "Soft and breathable textured detail",
  },
  {
    id: "4",
    type: "image",
    src: `${image3}`,
    alt: "Hands working on tablet device",
    hoverText: "Smart comfort with bold design",
  },
  {
    id: "5",
    type: "image",
    src: `${image4}`,
    alt: "Black and white circular logo",
    hoverText: "", // placeholder, will use eclypse image instead
  },
];

export default function MediaGallery() {
  const videoItem = mediaItems[0]
  const imageItems = mediaItems.slice(1)

  return (
    <div className="md:min-h-screen mt-4 bg-black p-1 md:p-4">
      <div className="max-w-7xl mx-auto">
        {/* Desktop Layout */}
        <div className="hidden md:block">
          <div className="grid grid-cols-3 gap-4 mb-4 md:h-[480px]">
            <div className="col-span-2 relative overflow-hidden rounded-lg group cursor-pointer">
              <video
                className="w-full h-full object-cover"
                muted
                autoPlay
                loop
                playsInline
              >
                <source src={video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>

            <div className="relative overflow-hidden rounded-lg group cursor-pointer">
              <img
                src={imageItems[0].src}
                alt={imageItems[0].alt}
                className="w-full h-full object-cover transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 w-full p-8 text-[Helvetica Neue] text-white text-4xl translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                {imageItems[0].hoverText || "Premium wool blend in signature vermilion"}
              </div>
            </div>
          </div>

          {/* Second Row: 3 Images */}
          <div className="grid grid-cols-3 gap-4 h-[390px]">
            {imageItems.slice(1).map((item, index) => (
              <div
                key={item.id}
                className="relative overflow-hidden rounded-lg group cursor-pointer"
              >               
              {item.id === "5" ? (
                <>
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-full object-cover absolute inset-0 transition-opacity duration-500 group-hover:opacity-0"
                  />
                  <img
                    src={eclypse}
                    alt="Eclypse Logo"
                    className="w-sm h-full p-2 object-contain absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-black"
                  />
                </>
              ) : (
                <>
                  {/* Normal image */}
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-full object-cover transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  {item.hoverText && (
                    <div className="absolute bottom-0 w-full p-8 text-[Helvetica Neue] text-white text-4xl translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      {item.hoverText}
                    </div>
                  )}
                </>
              )}
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden">
          <div className="relative overflow-hidden rounded-lg group cursor-pointer mb-4 h-60">
            <video
              className="w-full h-full object-cover"
              autoPlay
              muted
              loop
              playsInline
            >
              <source src={videoItem.src} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          {/* Second Row: 3 Images (excluding the last one) */}
          <div className="grid grid-cols-3 gap-4 h-40">
            {imageItems.slice(0, 3).map((item, index) => (
              <div key={item.id} className="relative overflow-hidden rounded-lg group cursor-pointer">
                <img
                  src={item.src || "/placeholder.svg"}
                  alt={item.alt}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
