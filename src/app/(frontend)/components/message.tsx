'use client'

import { motion } from 'framer-motion'
import { useScrollAnimation } from '@/app/(frontend)/hooks/use-scroll-animation'

export function MessageSection() {
  const { ref, isInView } = useScrollAnimation({ threshold: 0.1, triggerOnce: true })

  return (
    <section ref={ref} className="py-16 bg-gradient-to-b from-primary/5 to-transparent">
      <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
        >
          <p className="text-xl md:text-2xl font-serif text-foreground mb-2">
            विद्या ददाति विनयं विनयाद्याति पात्रताम्
          </p>
          <p className="text-sm md:text-base text-muted-foreground">
            Knowledge gives humility, from humility one attains worthiness
          </p>
        </motion.div>
      </div>
    </section>
  )
}