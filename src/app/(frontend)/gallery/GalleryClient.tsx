'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/app/(frontend)/components/ui/button'
import { Card } from '@/app/(frontend)/components/ui/card'
import { X, Camera, Building2, Trophy, PartyPopper, ChevronLeft, ChevronRight } from 'lucide-react'
import { useScrollAnimation } from '@/app/(frontend)/hooks/use-scroll-animation'

const categories = [
  { id: 'all', label: 'All Photos', icon: Camera },
  { id: 'infrastructure', label: 'Infrastructure', icon: Building2 },
  { id: 'events', label: 'Events', icon: PartyPopper },
  { id: 'achievements', label: 'Achievements', icon: Trophy },
]

export default function GalleryClient({ items }: { items: any[] }) {
  const [activeCategory, setActiveCategory] = useState('all')
  const [selectedImage, setSelectedImage] = useState<any | null>(null)
  const { ref: headerRef } = useScrollAnimation({ threshold: 0.1, triggerOnce: true })

  const filteredItems = activeCategory === 'all' 
    ? items 
    : items.filter(item => item.category === activeCategory)

  const fadeInUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }
  const staggerChildren = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.05 } } }

  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-transparent" />
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div ref={headerRef} initial="visible" animate="visible" variants={staggerChildren} className="max-w-3xl">
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-6 border border-primary/20">
              <Camera className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">Our Campus in Pictures</span>
            </motion.div>
            <motion.h1 variants={fadeInUp} className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
              Moments That <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Matter</span>
            </motion.h1>
          </motion.div>
        </div>
      </section>

      {/* Filter Categories */}
      <section className="py-8 sticky top-20 z-30 bg-background/80 backdrop-blur-md border-y border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-wrap justify-center gap-3">
          {categories.map((cat) => {
            const Icon = cat.icon
            const isActive = activeCategory === cat.id
            return (
              <Button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                variant={isActive ? 'default' : 'outline'}
                className={isActive ? 'bg-primary text-white scale-105' : 'hover:scale-105'}
              >
                <Icon className="w-4 h-4 mr-2" />
                {cat.label}
              </Button>
            )
          })}
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
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filteredItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  variants={fadeInUp}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: index * 0.03 }}
                  onClick={() => setSelectedImage(item)}
                  className="cursor-pointer group"
                >
                  <Card className="overflow-hidden border-none shadow-lg">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={item.image.url}
                        alt={item.alt}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-4 flex flex-col justify-end">
                        <h3 className="text-white font-semibold">{item.title}</h3>
                        <p className="text-white/80 text-xs">{item.date}</p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button className="absolute top-6 right-6 text-white"><X className="h-8 w-8" /></button>
            
            <div className="relative max-w-5xl w-full h-[80vh]" onClick={(e) => e.stopPropagation()}>
              <Image
                src={selectedImage.image.url}
                alt={selectedImage.alt}
                fill
                className="object-contain"
              />
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white bg-gradient-to-t from-black to-transparent">
                <h2 className="text-2xl font-bold">{selectedImage.title}</h2>
                <p className="text-white/80 mt-2">{selectedImage.description}</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  )
}