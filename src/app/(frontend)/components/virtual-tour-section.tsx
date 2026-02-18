'use client'

import dynamic from 'next/dynamic'
import { useScrollAnimation } from '@/app/(frontend)/hooks/use-scroll-animation'

const Campus3DTour = dynamic(
  () => import('@/app/(frontend)/components/campus-3d-tour').then((mod) => mod.Campus3DTour),
  { ssr: false },
)

export function VirtualTourSection() {
  const { ref, isInView } = useScrollAnimation({ threshold: 0.1 })

  return (
    <section ref={ref} id="virtual-tour" className="py-24 md:py-32 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div
          className={`max-w-2xl mb-12 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <p className="text-sm uppercase tracking-widest text-accent mb-4">Explore Our Campus</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-6">
            Interactive 3D Campus Tour
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Navigate through our beautiful 300-acre campus and discover world-class facilities.
            Click on markers to explore different locations or enable auto-rotate for a guided
            experience.
          </p>
        </div>

        <div
          className={`transition-all duration-1000 delay-200 ${isInView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
        >
          <Campus3DTour />
        </div>
      </div>
    </section>
  )
}
