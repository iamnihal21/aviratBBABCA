'use client'

import Image from 'next/image'
import { useState } from 'react'
import { Button } from '@/app/(frontend)/components/ui/button'
import { Card } from '@/app/(frontend)/components/ui/card'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import { useScrollAnimation } from '@/app/(frontend)/hooks/use-scroll-animation'

const categories = ['All', 'Campus', 'Academics', 'Student Life', 'Events', 'Athletics']

const galleryImages = [
  { src: '/gallery/campus-aerial.jpg', alt: 'Aerial view of campus', category: 'Campus' },
  { src: '/gallery/historic-hall.jpg', alt: 'Historic Hall', category: 'Campus' },
  { src: '/gallery/science-building.jpg', alt: 'Science Building', category: 'Academics' },
  { src: '/gallery/graduation.jpg', alt: 'Graduation ceremony', category: 'Events' },
  { src: '/gallery/students-lawn.jpg', alt: 'Students on the lawn', category: 'Student Life' },
  { src: '/gallery/library-interior.jpg', alt: 'Library interior', category: 'Academics' },
  { src: '/gallery/research-lab.jpg', alt: 'Research laboratory', category: 'Academics' },
  { src: '/gallery/autumn-campus.jpg', alt: 'Autumn on campus', category: 'Campus' },
  { src: '/campus/main-quad.jpg', alt: 'Main Quad', category: 'Campus' },
  { src: '/campus/library.jpg', alt: 'Central Library exterior', category: 'Campus' },
  { src: '/campus/athletics.jpg', alt: 'Athletics Center', category: 'Athletics' },
  { src: '/campus/student-center.jpg', alt: 'Student Center', category: 'Student Life' },
  { src: '/news/quantum.jpg', alt: 'Quantum Research Lab', category: 'Academics' },
  { src: '/news/climate.jpg', alt: 'Sustainability Initiative', category: 'Campus' },
  { src: '/news/admissions.jpg', alt: 'Campus Tour', category: 'Events' },
  { src: '/news/alumni.jpg', alt: 'Alumni Spotlight', category: 'Events' },
]

export function GalleryPageContent() {
  const { ref: headerRef, isInView: headerInView } = useScrollAnimation()
  const [activeCategory, setActiveCategory] = useState('All')
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const filteredImages =
    activeCategory === 'All'
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory)

  const openLightbox = (index: number) => setLightboxIndex(index)
  const closeLightbox = () => setLightboxIndex(null)
  const nextImage = () =>
    setLightboxIndex((prev) => (prev !== null ? (prev + 1) % filteredImages.length : null))
  const prevImage = () =>
    setLightboxIndex((prev) =>
      prev !== null ? (prev - 1 + filteredImages.length) % filteredImages.length : null,
    )

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div
            ref={headerRef}
            className={`max-w-3xl transition-all duration-700 ${headerInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <p className="text-sm uppercase tracking-widest text-accent mb-4">Photo Gallery</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Campus Through Our Lens
            </h1>
            <p className="text-xl text-primary-foreground/80 leading-relaxed">
              Explore the beauty and vibrancy of Avirat University through our curated photo
              collection.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-secondary/50 border-b border-border sticky top-16 z-40 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? 'default' : 'outline'}
                size="sm"
                onClick={() => setActiveCategory(category)}
                className={activeCategory !== category ? 'bg-transparent' : ''}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredImages.map((image, index) => (
              <Card
                key={`${image.src}-${index}`}
                className="group relative aspect-square overflow-hidden border-0 cursor-pointer"
                onClick={() => openLightbox(index)}
              >
                <Image
                  src={image.src || '/placeholder.svg'}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 text-primary-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-sm font-medium">{image.alt}</span>
                  <span className="block text-xs text-primary-foreground/70 mt-1">
                    {image.category}
                  </span>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center">
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors"
            aria-label="Close lightbox"
          >
            <X className="h-8 w-8" />
          </button>

          <button
            onClick={prevImage}
            className="absolute left-4 text-white/80 hover:text-white transition-colors"
            aria-label="Previous image"
          >
            <ChevronLeft className="h-12 w-12" />
          </button>

          <div className="relative w-full max-w-5xl aspect-video mx-16">
            <Image
              src={filteredImages[lightboxIndex].src || '/placeholder.svg'}
              alt={filteredImages[lightboxIndex].alt}
              fill
              className="object-contain"
            />
          </div>

          <button
            onClick={nextImage}
            className="absolute right-4 text-white/80 hover:text-white transition-colors"
            aria-label="Next image"
          >
            <ChevronRight className="h-12 w-12" />
          </button>

          <div className="absolute bottom-4 left-0 right-0 text-center text-white">
            <p className="text-lg font-medium">{filteredImages[lightboxIndex].alt}</p>
            <p className="text-sm text-white/70">
              {lightboxIndex + 1} of {filteredImages.length}
            </p>
          </div>
        </div>
      )}
    </>
  )
}
