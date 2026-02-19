'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Award, Users, Globe } from 'lucide-react'
// Sample slide data - you can replace this with props later
const slides = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070',
    title: 'Where Knowledge',
    highlight: 'Meets',
    subtitle: 'Innovation',
    description: 'Experience world-class education at Avirat University, where tradition meets tomorrow.',
    cta: 'Explore Programs',
    stats: [
      { icon: Users, value: '15K+', label: 'Students' },
      { icon: Award, value: '98%', label: 'Employment' },
      { icon: Globe, value: '30+', label: 'Countries' },
    ]
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2070',
    title: 'Shape Your',
    highlight: 'Future',
    subtitle: 'Today',
    description: 'Join a community of innovators, leaders, and change-makers shaping tomorrow.',
    cta: 'Apply Now',
    stats: [
      { icon: Users, value: '1.2K+', label: 'Faculty' },
      { icon: Award, value: '#12', label: 'Global Rank' },
      { icon: Globe, value: '50+', label: 'Programs' },
    ]
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=2070',
    title: 'Research That',
    highlight: 'Matters',
    subtitle: 'Globally',
    description: 'Pioneering discoveries and innovations that address global challenges.',
    cta: 'Discover Research',
    stats: [
      { icon: Users, value: '500+', label: 'Researchers' },
      { icon: Award, value: '$45M', label: 'Funding' },
      { icon: Globe, value: '200+', label: 'Partners' },
    ]
  }
]


export function Hero() {
  const [activeSlide, setActiveSlide] = useState(0)
  const [direction, setDirection] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
    const timer = setInterval(() => {
      setDirection(1)
      setActiveSlide((prev) => (prev + 1) % slides.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  const handleSlideChange = (index: number) => {
    setDirection(index > activeSlide ? 1 : -1)
    setActiveSlide(index)
  }

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
      transition: {
        duration: 0.8,
        ease: "easeInOut",
      },
    },
    exit: (direction: number) => ({
      x: direction > 0 ? '-100%' : '100%',
      opacity: 0,
      scale: 0.9,
      transition: {
        duration: 0.8,  
        ease: "easeInOut",
      },
    }),
  }

  const contentVariants = {
    initial: { opacity: 0, y: 30 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        delay: 0.3,
      },
    },
    exit: { 
      opacity: 0, 
      y: -30,
      transition: {
        duration: 0.4,
      },
    },
  }

  return (
    <>
    <section className="relative h-screen w-full overflow-hidden bg-black">
      {/* Background Slides */}
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
          {/* Background Image with Overlay */}
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slides[activeSlide].image})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/80" />
          </div>

          {/* Animated overlay pattern */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0" style={{
              backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
              backgroundSize: '40px 40px',
            }} />
          </div>
        </motion.div>
      </AnimatePresence>

      

      {/* Content */}
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
              {/* Main Heading */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight mb-4">
                <span className="block">{slides[activeSlide].title}</span>
                <span className="block mt-2">
                  <span className="bg-primary/20 px-4 py-2 inline-block rounded-lg text-primary">
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

      {/* Slide Indicators */}
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

      {/* Progress Bar */}
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


      </>
  )
}