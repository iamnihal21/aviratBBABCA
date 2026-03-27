'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Card } from '@/app/(frontend)/components/ui/card'
import { useScrollAnimation } from '@/app/(frontend)/hooks/use-scroll-animation'

export function HomeGallery({ images }: { images: any[] }) {
  const { ref, isInView } = useScrollAnimation({ threshold: 0.1, triggerOnce: true })

  return (
    <section ref={ref} className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
            Campus <span className="text-primary">Gallery</span>
          </h2>
          <p className="text-muted-foreground text-sm">A glimpse into life at Avirat University</p>
        </motion.div>
      </div>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {images?.slice(0, 4).map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden border-none shadow-md hover:shadow-lg transition-all duration-300 group">
                <div className="relative aspect-square">
                  <Image
                    src={image.image.url}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <p className="text-white text-sm p-3 font-medium">{image.title}</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center mt-6"
      >
        <a
          href="/gallery"
          className="inline-block text-sm text-primary hover:text-accent transition-colors"
        >
          View Full Gallery →
        </a>
      </motion.div>
    </section>
  )
}
