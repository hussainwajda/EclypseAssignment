export default function ProductPageSkeleton() {
  return (
    <div className="min-h-screen bg-white rounded-md animate-pulse">
      <div className="mx-auto m-2">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Media skeleton */}
          <div className="relative h-[300px] md:h-full md:aspect-[3/4] bg-gray-200 rounded-md"></div>

          {/* Right Column */}
          <div className="py-2 px-2 md:px-4 md:py-8 md:mr-8">
            {/* Description */}
            <div className="mb-8 space-y-2">
              <div className="h-4 bg-gray-200 rounded w-3/4"></div>
              <div className="h-4 bg-gray-200 rounded w-5/6"></div>
              <div className="h-4 bg-gray-200 rounded w-2/3"></div>
            </div>

            {/* Thumbnails */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              {Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="aspect-[3/4] bg-gray-200 rounded-md" />
              ))}
            </div>

            {/* Price */}
            <div className="mb-6 border-t border-b border-gray-200 py-4 md:mt-20">
              <div className="h-6 bg-gray-200 rounded w-1/3 mb-2"></div>
              <div className="h-3 bg-gray-200 rounded w-1/4"></div>
            </div>

            {/* Size Selection */}
            <div className="mb-6 md:mb-18 md:mr-30">
              <div className="h-4 bg-gray-200 rounded w-1/3 mb-3"></div>
              <div className="grid grid-cols-5 gap-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <div key={i} className="h-10 bg-gray-200 rounded-md" />
                ))}
              </div>
            </div>

            {/* Buttons */}
            <div className="grid grid-cols-2 gap-4 md:mt-40">
              <div className="h-12 bg-gray-200 rounded-md"></div>
              <div className="h-12 bg-gray-300 rounded-md"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
