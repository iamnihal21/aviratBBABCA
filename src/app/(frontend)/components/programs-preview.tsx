'use client'

import Link from 'next/link'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/app/(frontend)/components/ui/card'
import { Button } from '@/app/(frontend)/components/ui/button'
import { ArrowRight, Beaker, BookOpen, Cpu, Landmark, Palette, Stethoscope } from 'lucide-react'
import { useScrollAnimation } from '@/app/(frontend)/hooks/use-scroll-animation'

const programsPreview = [
  {
    title: 'Engineering & Technology',
    description:
      'Cutting-edge programs in computer science, electrical engineering, and emerging technologies.',
    icon: Cpu,
    color: 'from-blue-500/20 to-cyan-500/20',
  },
  {
    title: 'Sciences',
    description:
      'Explore the natural world through physics, chemistry, biology, and environmental sciences.',
    icon: Beaker,
    color: 'from-green-500/20 to-emerald-500/20',
  },
  {
    title: 'Medicine & Health',
    description: 'Train with leading medical professionals in our state-of-the-art medical campus.',
    icon: Stethoscope,
    color: 'from-red-500/20 to-rose-500/20',
  },
]

export function ProgramsPreview() {
  const { ref: headerRef, isInView: headerInView } = useScrollAnimation()
  const { ref: cardsRef, isInView: cardsInView } = useScrollAnimation({ threshold: 0.05 })

  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div
          ref={headerRef}
          className={`flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16 transition-all duration-700 ${headerInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div className="max-w-2xl">
            <p className="text-sm uppercase tracking-widest text-accent mb-4">
              Academic Excellence
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-4">
              World-Class Programs
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Discover over 200 undergraduate and graduate programs across six schools.
            </p>
          </div>
          <Button
            variant="outline"
            size="lg"
            asChild
            className="transition-all duration-300 hover:scale-105 bg-transparent w-fit"
          >
            <Link href="/programs" className="group">
              View All Programs
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>

        <div ref={cardsRef} className="grid md:grid-cols-3 gap-6">
          {programsPreview.map((program, index) => (
            <Link href="/programs" key={program.title}>
              <Card
                className={`group h-full bg-card hover:bg-secondary/50 border-border transition-all duration-500 hover:shadow-lg hover:-translate-y-2 cursor-pointer ${cardsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: cardsInView ? `${index * 100}ms` : '0ms' }}
              >
                <CardHeader>
                  <div
                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${program.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <program.icon className="h-7 w-7 text-foreground" />
                  </div>
                  <CardTitle className="text-xl font-semibold group-hover:text-accent transition-colors">
                    {program.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {program.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <span className="text-sm font-medium text-accent flex items-center gap-2 group-hover:gap-3 transition-all">
                    Learn more
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
