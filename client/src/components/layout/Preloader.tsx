import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import logo from "../../assets/logo.jpg"

interface PreloaderProps {
  onLoadingComplete: () => void
}

export default function Preloader({ onLoadingComplete }: PreloaderProps) {
  const [loadingProgress, setLoadingProgress] = useState(0)
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setLoadingProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setTimeout(() => {
            setIsComplete(true)
            setTimeout(onLoadingComplete, 1500)
          }, 500)
          return 100
        }
        return prev + 2
      })
    }, 50)

    return () => clearInterval(interval)
  }, [onLoadingComplete])

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          className="fixed inset-0 z-50 bg-black flex items-center justify-center"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          {/* Rotating Red Lines */}
          <div className="relative">
            <motion.div
              className="absolute inset-0 w-40 h-40 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            >
              {Array.from({ length: 12 }).map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 bg-red-500 origin-bottom"
                  style={{
                    height: "60px",
                    left: "50%",
                    bottom: "50%",
                    transformOrigin: "bottom center",
                    transform: `translateX(-50%) rotate(${i * 30}deg)`,
                  }}
                  initial={{ scaleY: 0.3, opacity: 0.3 }}
                  animate={{
                    scaleY: [0.3, 1, 0.3],
                    opacity: [0.3, 1, 0.3],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: i * 0.1,
                    ease: "easeInOut",
                  }}
                />
              ))}
            </motion.div>

            {/* Inner rotating lines */}
            <motion.div
              className="absolute inset-0 w-32 h-32 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              animate={{ rotate: -360 }}
              transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            >
              {Array.from({ length: 8 }).map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-0.5 bg-red-400 origin-bottom"
                  style={{
                    height: "40px",
                    left: "50%",
                    bottom: "50%",
                    transformOrigin: "bottom center",
                    transform: `translateX(-50%) rotate(${i * 45}deg)`,
                  }}
                  initial={{ scaleY: 0.5, opacity: 0.5 }}
                  animate={{
                    scaleY: [0.5, 1, 0.5],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: i * 0.15,
                    ease: "easeInOut",
                  }}
                />
              ))}
            </motion.div>

            {/* Logo Container */}
            <motion.div
              className="relative w-20 h-20 flex items-center justify-center"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {/* Logo Split Animation */}
              <motion.div
                className="relative w-16 h-16"
                animate={loadingProgress >= 100 ? { scale: 1.2 } : {}}
                transition={{ duration: 0.5 }}
              >
                {/* Left half of logo */}
                <motion.div
                  className="absolute inset-0 overflow-hidden"
                  style={{ clipPath: "polygon(0 0, 50% 0, 50% 100%, 0 100%)" }}
                  animate={
                    loadingProgress >= 100
                      ? {
                          x: -30,
                          rotate: -15,
                          opacity: 0,
                        }
                      : {}
                  }
                  transition={{ duration: 1, ease: "easeInOut" }}
                >
                  <img
                    src={logo}
                    className="rounded bg-black" />
                </motion.div>

                {/* Right half of logo */}
                <motion.div
                  className="absolute inset-0 overflow-hidden"
                  style={{ clipPath: "polygon(50% 0, 100% 0, 100% 100%, 50% 100%)" }}
                  animate={
                    loadingProgress >= 100
                      ? {
                          x: 30,
                          rotate: 15,
                          opacity: 0,
                        }
                      : {}
                  }
                  transition={{ duration: 1, ease: "easeInOut" }}
                >
                  <img
                    src={logo} 
                    className="rounded bg-black"/>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Loading Progress */}
            <motion.div
              className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 text-white text-sm font-light"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              {Math.round(loadingProgress)}%
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
