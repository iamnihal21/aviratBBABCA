'use client'

import { motion } from 'framer-motion'
import { MapPin } from 'lucide-react'
import { Card } from '@/app/(frontend)/components/ui/card'
import { useScrollAnimation } from '@/app/(frontend)/hooks/use-scroll-animation'

interface MapLocationProps {
  mapUrl?: string
  address?: string
}

export function MapLocation({ mapUrl, address }: MapLocationProps) {
  const { ref, isInView } = useScrollAnimation({ threshold: 0.1, triggerOnce: true })

  return (
    <section ref={ref} className="py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <Card className="overflow-hidden border-none shadow-lg">
            <div className="relative w-full h-[300px] md:h-[400px]">
              {mapUrl && (
                <iframe
                  src={mapUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Campus Location"
                  className="absolute inset-0"
                />
              )}
            </div>
            
            <div className="bg-white p-4 border-t border-border">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary flex-shrink-0" />
                <span>{address || 'Avirat University Campus'}</span>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}