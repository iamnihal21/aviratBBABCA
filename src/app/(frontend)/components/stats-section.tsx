'use client'

import dynamic from 'next/dynamic'
import { useScrollAnimation } from '@/app/(frontend)/hooks/use-scroll-animation'

const Stats3DScene = dynamic(
  () => import('@/app/(frontend)/components/stats-3d-scene').then((mod) => mod.Stats3DScene),
  { ssr: false },
)

export function StatsSection() {
  const { ref, isInView } = useScrollAnimation({ threshold: 0.2 })

  return (
    <section ref={ref} className="py-16 md:py-24 bg-primary relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div
          className={`text-center mb-8 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <p className="text-sm uppercase tracking-widest text-accent mb-4">By The Numbers</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-primary-foreground mb-4">
            Our Impact in Numbers
          </h2>
          <p className="text-primary-foreground/70 max-w-2xl mx-auto">
            Decades of excellence reflected in our achievements and the success of our community.
          </p>
        </div>

        <div
          className={`transition-all duration-1000 delay-300 ${isInView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
        >
          <Stats3DScene />
        </div>
      </div>
    </section>
  )
}
