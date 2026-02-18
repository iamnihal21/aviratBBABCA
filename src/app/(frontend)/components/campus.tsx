'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/app/(frontend)/components/ui/button'
import { Card, CardContent } from '@/app/(frontend)/components/ui/card'
import { MapPin, Home, Users, Coffee, Dumbbell, Library } from 'lucide-react'
import { useScrollAnimation } from '@/app/(frontend)/hooks/use-scroll-animation'

const amenities = [
  { icon: Home, label: 'Modern Housing', description: '12 residential halls' },
  { icon: Library, label: 'Libraries', description: '5 research libraries' },
  { icon: Dumbbell, label: 'Athletics', description: 'Olympic facilities' },
  { icon: Coffee, label: 'Dining', description: '20+ dining options' },
  { icon: Users, label: 'Student Clubs', description: '400+ organizations' },
  { icon: MapPin, label: 'Location', description: 'Urban campus' },
]

export function Campus() {
  const { ref: headerRef, isInView: headerInView } = useScrollAnimation()
  const { ref: imagesRef, isInView: imagesInView } = useScrollAnimation({ threshold: 0.05 })
  const { ref: amenitiesRef, isInView: amenitiesInView } = useScrollAnimation({ threshold: 0.05 })
  const { ref: quoteRef, isInView: quoteInView } = useScrollAnimation()

  return (
    <section id="campus" className="py-24 md:py-32 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div
          ref={headerRef}
          className={`max-w-2xl mb-16 transition-all duration-700 ${headerInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <p className="text-sm uppercase tracking-widest text-accent mb-4">Campus Life</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-6">
            A Vibrant Community
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Experience a dynamic campus culture where academic excellence meets personal growth. Our
            300-acre campus offers everything you need to thrive.
          </p>
        </div>

        {/* Image Grid */}
        <div ref={imagesRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
          <div
            className={`relative aspect-[4/3] md:aspect-[3/4] lg:row-span-2 lg:aspect-auto rounded-xl overflow-hidden transition-all duration-700 ${imagesInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <Image
              src="/campus/main-quad.jpg"
              alt="Main Quad at Avirat University"
              fill
              className="object-cover hover:scale-110 transition-transform duration-700"
            />
          </div>
          <div
            className={`relative aspect-[4/3] rounded-xl overflow-hidden transition-all duration-700 delay-100 ${imagesInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <Image
              src="/campus/library.jpg"
              alt="Central Library"
              fill
              className="object-cover hover:scale-110 transition-transform duration-700"
            />
          </div>
          <div
            className={`relative aspect-[4/3] rounded-xl overflow-hidden transition-all duration-700 delay-200 ${imagesInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <Image
              src="/campus/athletics.jpg"
              alt="Athletics Center"
              fill
              className="object-cover hover:scale-110 transition-transform duration-700"
            />
          </div>
          <div
            className={`relative aspect-[4/3] rounded-xl overflow-hidden md:col-span-2 lg:col-span-2 transition-all duration-700 delay-300 ${imagesInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <Image
              src="/campus/student-center.jpg"
              alt="Student Center"
              fill
              className="object-cover hover:scale-110 transition-transform duration-700"
            />
          </div>
        </div>

        {/* Amenities Grid */}
        <div
          ref={amenitiesRef}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16"
        >
          {amenities.map((amenity, index) => (
            <Card
              key={amenity.label}
              className={`bg-card border-border transition-all duration-500 hover:shadow-lg hover:-translate-y-1 ${amenitiesInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: amenitiesInView ? `${index * 75}ms` : '0ms' }}
            >
              <CardContent className="p-4 text-center">
                <amenity.icon className="h-6 w-6 mx-auto mb-2 text-accent transition-transform duration-300 group-hover:scale-110" />
                <div className="font-medium text-foreground text-sm">{amenity.label}</div>
                <div className="text-xs text-muted-foreground mt-1">{amenity.description}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Student Life Quote */}
        <Card
          ref={quoteRef}
          className={`bg-card border-border transition-all duration-700 ${quoteInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <CardContent className="p-8 md:p-12">
            <blockquote className="text-xl md:text-2xl text-foreground font-medium leading-relaxed mb-6">
              &ldquo;My time at Avirat has been transformative. The opportunities for research,
              the supportive community, and the lifelong friendships I&rsquo;ve made here have
              shaped who I am today.&rdquo;
            </blockquote>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-secondary" />
              <div>
                <div className="font-semibold text-foreground">Jessica Park</div>
                <div className="text-sm text-muted-foreground">
                  Class of 2025, Biomedical Engineering
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div
          className={`mt-12 text-center transition-all duration-700 delay-200 ${quoteInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
        >
          <Button size="lg" asChild className="transition-all duration-300 hover:scale-105">
            <Link href="#">Schedule a Visit</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
