'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Button } from '@/app/(frontend)/components/ui/button'
import { ArrowRight } from 'lucide-react'
import { useScrollAnimation } from '@/app/(frontend)/hooks/use-scroll-animation'

export function ApplyNow() {
  const { ref, isInView } = useScrollAnimation({ threshold: 0.1, triggerOnce: true })

  return (
    <section ref={ref} className="py-16 bg-gradient-to-r from-primary to-accent">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-white"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-3">
            Ready to Start?
          </h2>
          <p className="text-white/80 text-base mb-6 max-w-lg mx-auto">
            Take the first step towards your future at Avirat University.
          </p>
          <Button
            size="lg"
            variant="secondary"
            asChild
            className="bg-white text-primary hover:bg-white/90 hover:scale-105 transition-all duration-300"
          >
            <Link href="/admissions" className="flex items-center gap-2">
              Apply Now
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}