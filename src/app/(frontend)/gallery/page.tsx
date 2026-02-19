'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/app/(frontend)/components/ui/button'
import { Card } from '@/app/(frontend)/components/ui/card'
import {
  X,
  Camera,
  Building2,
  Trophy,
  PartyPopper,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react'
import { useScrollAnimation } from '@/app/(frontend)/hooks/use-scroll-animation'

// Gallery Data
const galleryItems = [
  // Infrastructure
  {
    id: 1,
    category: 'infrastructure',
    title: 'Central Library',
    description: 'State-of-the-art library with 50,000+ volumes and digital resources',
    image: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=2070',
    date: '2024',
  },
  {
    id: 2,
    category: 'infrastructure',
    title: 'Science Laboratories',
    description: 'Modern labs equipped with latest research equipment',
    image: 'https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?q=80&w=2070',
    date: '2024',
  },
  {
    id: 3,
    category: 'infrastructure',
    title: 'Smart Classrooms',
    description: 'Technology-enabled learning spaces',
    image: 'https://images.unsplash.com/photo-1588072432836-e10032774350?q=80&w=2072',
    date: '2023',
  },
  {
    id: 4,
    category: 'infrastructure',
    title: 'Sports Complex',
    description: 'Olympic-standard indoor and outdoor facilities',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070',
    date: '2024',
  },
  {
    id: 5,
    category: 'infrastructure',
    title: 'Auditorium',
    description: '1000-seat capacity with world-class acoustics',
    image: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?q=80&w=2069',
    date: '2023',
  },
  

  // Events
  {
    id: 7,
    category: 'events',
    title: 'Annual Cultural Fest',
    description: 'Students performing at the annual cultural festival',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070',
    date: '2024',
  },
  {
    id: 8,
    category: 'events',
    title: 'Convocation Ceremony',
    description: 'Class of 2024 graduation ceremony',
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070',
    date: '2024',
  },
  {
    id: 9,
    category: 'events',
    title: 'Tech Symposium',
    description: 'Annual technology conference with industry leaders',
    image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=2070',
    date: '2023',
  },
  {
    id: 10,
    category: 'events',
    title: 'Sports Day',
    description: 'Annual athletic meet and sports competitions',
    image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=2070',
    date: '2024',
  },
  {
    id: 11,
    category: 'events',
    title: 'Alumni Meet',
    description: 'Annual gathering of alumni from across the globe',
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069',
    date: '2023',
  },
  {
    id: 12,
    category: 'events',
    title: 'Workshop Series',
    description: 'Hands-on workshops with industry experts',
    image: 'https://images.unsplash.com/photo-1559223607-a43c9902c143?q=80&w=2070',
    date: '2024',
  },

  // Achievements
  {
    id: 13,
    category: 'achievements',
    title: 'Research Award',
    description: 'Faculty receiving national research award',
    image: 'https://images.unsplash.com/photo-1591115765373-5207764f72e4?q=80&w=2070',
    date: '2024',
  },
  {
    id: 14,
    category: 'achievements',
    title: 'Sports Championship',
    description: 'University team winning inter-college championship',
    image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=2069',
    date: '2024',
  },
  {
    id: 15,
    category: 'achievements',
    title: 'Innovation Hackathon',
    description: 'Students winning first prize at national hackathon',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2070',
    date: '2023',
  },
  {
    id: 16,
    category: 'achievements',
    title: 'Academic Excellence',
    description: 'Gold medalists at the annual convocation',
    image: 'https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=2086',
    date: '2024',
  },
  {
    id: 17,
    category: 'achievements',
    title: 'Cultural Competition',
    description: 'Winners at state-level cultural competition',
    image: 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=2070',
    date: '2023',
  },
  {
    id: 18,
    category: 'achievements',
    title: 'Patent Filed',
    description: 'Research team filing patent for innovative technology',
    image: 'https://images.unsplash.com/photo-1580894742597-87bc8789db3d?q=80&w=2070',
    date: '2024',
  },

  // Students
  
]

// Categories for filter
const categories = [
  { id: 'all', label: 'All Photos', icon: Camera },
  { id: 'infrastructure', label: 'Infrastructure', icon: Building2 },
  { id: 'events', label: 'Events', icon: PartyPopper },
  { id: 'achievements', label: 'Achievements', icon: Trophy },
]

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [selectedImage, setSelectedImage] = useState<typeof galleryItems[0] | null>(null)
  const { ref: headerRef, isInView: headerInView } = useScrollAnimation({ threshold: 0.1, triggerOnce: true })

  // Filter items based on category
  const filteredItems = activeCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory)

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  }

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-transparent" />
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, hsl(var(--primary)/0.1) 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            ref={headerRef}
            initial="visible"
            animate="visible"
            variants={staggerChildren}
            className="max-w-3xl"
          >
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 bg-primary/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-primary/20">
              <Camera className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">Our Campus in Pictures</span>
            </motion.div>

            <motion.h1 variants={fadeInUp} className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
              Moments That{' '}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Matter
              </span>
            </motion.h1>

            <motion.p variants={fadeInUp} className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
              Explore our campus life, infrastructure, events, and achievements through the lens.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Filter Categories */}
      <section className="py-8 sticky top-20 z-30 bg-background/80 backdrop-blur-md border-y border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-3">
            {categories.map((category) => {
              const Icon = category.icon
              const isActive = activeCategory === category.id
              
              return (
                <Button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  variant={isActive ? 'default' : 'outline'}
                  size="lg"
                  className={`group transition-all duration-300 ${
                    isActive 
                      ? 'bg-gradient-to-r from-primary to-accent text-white shadow-lg scale-105' 
                      : 'hover:scale-105 hover:border-primary/50'
                  }`}
                >
                  <Icon className={`w-4 h-4 mr-2 transition-transform group-hover:scale-110 ${
                    isActive ? 'text-white' : 'text-primary'
                  }`} />
                  {category.label}
                  {isActive && (
                    <span className="ml-2 bg-white/20 px-2 py-0.5 rounded-full text-xs">
                      {filteredItems.length}
                    </span>
                  )}
                </Button>
              )
            })}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filteredItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.03 }}
                  whileHover={{ y: -8 }}
                  onClick={() => setSelectedImage(item)}
                  className="cursor-pointer group"
                >
                  <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      
                      {/* Category Badge */}
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1.5 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium text-foreground shadow-lg">
                          {categories.find(c => c.id === item.category)?.label}
                        </span>
                      </div>
                      
                      {/* Image Info - Visible on Hover */}
                      <div className="absolute bottom-0 left-0 right-0 p-4 text-white translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                        <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                        <p className="text-sm text-white/80 line-clamp-2">{item.description}</p>
                        <p className="text-xs text-white/60 mt-2">{item.date}</p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Empty State */}
          {filteredItems.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <Camera className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2">No photos found</h3>
              <p className="text-muted-foreground">Try selecting a different category</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors z-10"
            >
              <X className="h-8 w-8" />
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={(e) => {
                e.stopPropagation()
                const currentIndex = filteredItems.findIndex(i => i.id === selectedImage.id)
                const prevIndex = (currentIndex - 1 + filteredItems.length) % filteredItems.length
                setSelectedImage(filteredItems[prevIndex])
              }}
              className="absolute left-6 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors z-10"
            >
              <ChevronLeft className="h-10 w-10" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation()
                const currentIndex = filteredItems.findIndex(i => i.id === selectedImage.id)
                const nextIndex = (currentIndex + 1) % filteredItems.length
                setSelectedImage(filteredItems[nextIndex])
              }}
              className="absolute right-6 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors z-10"
            >
              <ChevronRight className="h-10 w-10" />
            </button>

            {/* Image Container */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-6xl w-full max-h-[90vh] rounded-2xl overflow-hidden"
            >
              <div className="relative w-full h-full" style={{ aspectRatio: '16/9' }}>
                <Image
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  fill
                  className="object-contain"
                  priority
                />
              </div>

              {/* Image Info */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-8 text-white">
                <div className="flex items-center gap-3 mb-2">
                  <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-medium">
                    {categories.find(c => c.id === selectedImage.category)?.label}
                  </span>
                  <span className="text-sm text-white/60">{selectedImage.date}</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold mb-2">{selectedImage.title}</h2>
                <p className="text-white/80 text-lg max-w-3xl">{selectedImage.description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  )
}