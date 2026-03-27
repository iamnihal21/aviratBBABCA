'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import Image from 'next/image'

interface HeroProps {
  data?: any[] // From Payload CMS: homeData.slides
}

export function Hero({ data }: HeroProps) {
  const [activeSlide, setActiveSlide] = useState(0)
  const [direction, setDirection] = useState(0)
  const slides = data || []

  useEffect(() => {
    if (slides.length <= 1) return
    const timer = setInterval(() => {
      setDirection(1)
      setActiveSlide((prev) => (prev + 1) % slides.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [slides.length])

  const handleSlideChange = (index: number) => {
    setDirection(index > activeSlide ? 1 : -1)
    setActiveSlide(index)
  }

  // Animation variants from your first UI version
  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0,
      scale: 1.1,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: "easeInOut" },
    },
    exit: (direction: number) => ({
      x: direction > 0 ? '-100%' : '100%',
      opacity: 0,
      scale: 0.9,
      transition: { duration: 0.8, ease: "easeInOut" },
    }),
  }

  const contentVariants = {
    initial: { opacity: 0, y: 30 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, delay: 0.3 },
    },
    exit: { 
      opacity: 0, 
      y: -30,
      transition: { duration: 0.4 },
    },
  }

  if (!slides.length) return null

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      {/* Background Slides with direction logic */}
      <AnimatePresence initial={false} custom={direction} mode="wait">
        <motion.div
          key={activeSlide}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          className="absolute inset-0"
        >
          {/* Background Image using Next.js Image Component for DB URLS */}
          {slides[activeSlide]?.image?.url && (
            <div className="absolute inset-0">
              <Image
                src={slides[activeSlide].image.url}
                alt={slides[activeSlide].title || "Hero Slide"}
                fill
                className="object-cover"
                priority
              />
              {/* Gradient Overlays from first UI */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/80" />
            </div>
          )}

          {/* Animated overlay dot pattern from first UI */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0" style={{
              backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
              backgroundSize: '40px 40px',
            }} />
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Centered Content with AnimatePresence */}
      <div className="relative h-full flex items-center justify-center z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={activeSlide}
              variants={contentVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="text-center text-white"
            >
              {/* Heading with Highlighted Box */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight mb-4 leading-tight">
                <span className="block">{slides[activeSlide].title}</span>
                <span className="block mt-2">
                  <span className="bg-primary/20 px-4 py-2 inline-block rounded-lg text-primary border border-primary/30">
                    {slides[activeSlide].highlight}
                  </span>
                  <span className="ml-4">{slides[activeSlide].subtitle}</span>
                </span>
              </h1>

              {/* Description */}
              <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-300 leading-relaxed mb-8">
                {slides[activeSlide].description}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown className="w-8 h-8 text-white/60" />
      </motion.div>

      {/* Slide Navigation Indicators */}
      <div className="absolute bottom-8 left-8 z-20 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => handleSlideChange(index)}
            className="group relative"
            aria-label={`Go to slide ${index + 1}`}
          >
            <div
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                index === activeSlide
                  ? 'bg-primary w-8'
                  : 'bg-white/50 group-hover:bg-white/80'
              }`}
            />
          </button>
        ))}
      </div>

      {/* Visual Progress Bar */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-1 bg-primary/30 z-20"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{
          duration: 6,
          ease: "linear",
          repeat: Infinity,
        }}
        style={{ originX: 0 }}
      />
    </section>
  )
}