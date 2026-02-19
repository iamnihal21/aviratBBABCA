'use client'

import { motion } from 'framer-motion'
import { MapPin } from 'lucide-react'
import { Card } from '@/app/(frontend)/components/ui/card'
import { useScrollAnimation } from '@/app/(frontend)/hooks/use-scroll-animation'

export function MapLocation() {
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
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7342.048855541506!2d72.52249!3d23.059566!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e835519d27f37%3A0xa903dd3f424f9a0f!2sFlorescent%20school!5e0!3m2!1sen!2sin!4v1771421282323!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Avirat University Location"
                className="absolute inset-0"
              />
            </div>
            
            {/* Address Overlay */}
            <div className="bg-white p-4 border-t border-border">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary flex-shrink-0" />
                <span>Avirat University • 123 Education Valley, Knowledge Park, CA 94305</span>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}