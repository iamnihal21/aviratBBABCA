'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/app/(frontend)/components/ui/button'
import { Card, CardContent } from '@/app/(frontend)/components/ui/card'
import { ArrowUpRight } from 'lucide-react'
import { useScrollAnimation } from '@/app/(frontend)/hooks/use-scroll-animation'

const faculty = [
  {
    name: 'Dr. Sarah Chen',
    title: 'Professor of Computer Science',
    specialty: 'Artificial Intelligence & Machine Learning',
    image: '/faculty/sarah-chen.jpg',
  },
  {
    name: 'Dr. Michael Roberts',
    title: 'Professor of Biomedical Engineering',
    specialty: 'Neural Interfaces & Prosthetics',
    image: '/faculty/michael-roberts.jpg',
  },
  {
    name: 'Dr. Elena Vasquez',
    title: 'Professor of Environmental Science',
    specialty: 'Climate Change & Sustainability',
    image: '/faculty/elena-vasquez.jpg',
  },
]

const researchAreas = [
  {
    title: 'Quantum Computing',
    description: 'Pioneering research in quantum algorithms and hardware development.',
  },
  {
    title: 'Cancer Research',
    description: 'Developing novel immunotherapies and precision medicine approaches.',
  },
  {
    title: 'Clean Energy',
    description: 'Advancing solar, wind, and hydrogen technologies for a sustainable future.',
  },
  {
    title: 'AI Ethics',
    description: 'Shaping responsible AI development and policy frameworks.',
  },
]

export function Research() {
  const { ref: headerRef, isInView: headerInView } = useScrollAnimation()
  const { ref: areasRef, isInView: areasInView } = useScrollAnimation({ threshold: 0.05 })
  const { ref: facultyRef, isInView: facultyInView } = useScrollAnimation({ threshold: 0.05 })
  const { ref: statsRef, isInView: statsInView } = useScrollAnimation()

  return (
    <section id="research" className="py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div
          ref={headerRef}
          className={`max-w-2xl mb-16 transition-all duration-700 ${headerInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <p className="text-sm uppercase tracking-widest text-accent mb-4">Faculty & Research</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-6">
            Pushing the Boundaries of Knowledge
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Our faculty includes Nobel laureates, National Academy members, and MacArthur Fellows
            who are leaders in their fields.
          </p>
        </div>

        {/* Research Areas Grid */}
        <div ref={areasRef} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {researchAreas.map((area, index) => (
            <Card
              key={area.title}
              className={`group bg-secondary/50 border-border hover:bg-secondary transition-all duration-500 cursor-pointer hover:shadow-lg hover:-translate-y-1 ${areasInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: areasInView ? `${index * 100}ms` : '0ms' }}
            >
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-2 flex items-center justify-between">
                  {area.title}
                  <ArrowUpRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{area.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Featured Faculty */}
        <div ref={facultyRef} className="mb-16">
          <h3
            className={`text-2xl font-bold text-foreground mb-8 transition-all duration-700 ${facultyInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          >
            Featured Faculty
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {faculty.map((member, index) => (
              <div
                key={member.name}
                className={`group transition-all duration-700 ${facultyInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: facultyInView ? `${index * 150}ms` : '0ms' }}
              >
                <div className="relative aspect-[4/5] rounded-lg overflow-hidden bg-secondary mb-4">
                  <Image
                    src={member.image || '/placeholder.svg'}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <h4 className="text-lg font-semibold text-foreground transition-colors duration-300 group-hover:text-accent">
                  {member.name}
                </h4>
                <p className="text-sm text-muted-foreground">{member.title}</p>
                <p className="text-sm text-accent mt-1">{member.specialty}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Research Stats */}
        <div
          ref={statsRef}
          className={`grid grid-cols-2 md:grid-cols-4 gap-8 p-8 md:p-12 bg-primary text-primary-foreground rounded-2xl transition-all duration-700 ${statsInView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
        >
          {[
            { value: '$850M', label: 'Annual Research Funding' },
            { value: '40+', label: 'Research Centers' },
            { value: '2,500+', label: 'Publications per Year' },
            { value: '180+', label: 'Patents Filed' },
          ].map((stat, index) => (
            <div
              key={stat.label}
              className={`text-center transition-all duration-500 ${statsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              style={{ transitionDelay: statsInView ? `${index * 100 + 200}ms` : '0ms' }}
            >
              <div className="text-2xl md:text-3xl font-bold">{stat.value}</div>
              <div className="text-sm text-primary-foreground/70 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>

        <div
          className={`mt-12 text-center transition-all duration-700 delay-500 ${statsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
        >
          <Button
            variant="outline"
            size="lg"
            asChild
            className="transition-all duration-300 hover:scale-105 bg-transparent"
          >
            <Link href="#">Explore Research</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
