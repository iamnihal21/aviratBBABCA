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
import { ArrowUpRight, Beaker, BookOpen, Cpu, Landmark, Palette, Stethoscope } from 'lucide-react'
import { useScrollAnimation } from '@/app/(frontend)/hooks/use-scroll-animation'

const programs = [
  {
    title: 'Engineering & Technology',
    description:
      'Cutting-edge programs in computer science, electrical engineering, mechanical engineering, and emerging technologies.',
    icon: Cpu,
    departments: [
      'Computer Science',
      'Electrical Engineering',
      'Mechanical Engineering',
      'Data Science',
    ],
    href: '#',
  },
  {
    title: 'Sciences',
    description:
      'Explore the natural world through physics, chemistry, biology, and environmental sciences with world-class facilities.',
    icon: Beaker,
    departments: ['Physics', 'Chemistry', 'Biology', 'Environmental Science'],
    href: '#',
  },
  {
    title: 'Medicine & Health',
    description:
      'Train with leading medical professionals and researchers in our state-of-the-art medical campus and teaching hospitals.',
    icon: Stethoscope,
    departments: ['Medicine', 'Nursing', 'Public Health', 'Biomedical Research'],
    href: '#',
  },
  {
    title: 'Business & Economics',
    description:
      'Develop leadership skills and business acumen through rigorous programs taught by industry experts and academics.',
    icon: Landmark,
    departments: ['MBA', 'Finance', 'Economics', 'Entrepreneurship'],
    href: '#',
  },
  {
    title: 'Arts & Humanities',
    description:
      'Cultivate creativity and critical thinking through literature, history, philosophy, and the performing arts.',
    icon: Palette,
    departments: ['Literature', 'History', 'Philosophy', 'Fine Arts'],
    href: '#',
  },
  {
    title: 'Law & Public Policy',
    description:
      "Prepare for careers in law, government, and public service with programs that shape tomorrow's leaders.",
    icon: BookOpen,
    departments: ['Law', 'Political Science', 'Public Administration', 'International Relations'],
    href: '#',
  },
]

export function Programs() {
  const { ref: headerRef, isInView: headerInView } = useScrollAnimation()
  const { ref: cardsRef, isInView: cardsInView } = useScrollAnimation({ threshold: 0.05 })

  return (
    <section id="programs" className="py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div
          ref={headerRef}
          className={`max-w-2xl mb-16 transition-all duration-700 ${headerInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <p className="text-sm uppercase tracking-widest text-accent mb-4">Academic Excellence</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-6">
            Programs & Departments
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Discover over 200 undergraduate and graduate programs across six schools, each designed
            to prepare you for leadership in your field.
          </p>
        </div>

        <div ref={cardsRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((program, index) => (
            <Card
              key={program.title}
              className={`group bg-card hover:bg-secondary/50 border-border transition-all duration-500 hover:shadow-lg hover:-translate-y-1 ${cardsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: cardsInView ? `${index * 100}ms` : '0ms' }}
            >
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center mb-4 group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-300 group-hover:scale-110">
                  <program.icon className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl font-semibold flex items-center justify-between">
                  {program.title}
                  <ArrowUpRight className="h-5 w-5 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-muted-foreground" />
                </CardTitle>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {program.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {program.departments.map((dept) => (
                    <span
                      key={dept}
                      className="text-xs px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground transition-colors duration-300 hover:bg-accent hover:text-accent-foreground"
                    >
                      {dept}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div
          className={`mt-12 text-center transition-all duration-700 delay-500 ${cardsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
        >
          <Button
            variant="outline"
            size="lg"
            asChild
            className="transition-all duration-300 hover:scale-105 bg-transparent"
          >
            <Link href="#">View All Programs</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
