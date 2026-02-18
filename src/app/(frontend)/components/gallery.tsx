'use client'

import Image from 'next/image'
import { useScrollAnimation } from '@/app/(frontend)/hooks/use-scroll-animation'

const galleryImages = [
  {
    src: '/gallery/campus-aerial.jpg',
    alt: 'Aerial view of Avirat University campus',
    caption: 'Our 300-acre campus',
    span: 'lg:col-span-2 lg:row-span-2',
  },
  {
    src: '/gallery/historic-hall.jpg',
    alt: 'Historic Harrison Hall',
    caption: 'Harrison Hall - Est. 1892',
    span: '',
  },
  {
    src: '/gallery/science-building.jpg',
    alt: 'Modern Science Complex',
    caption: 'Science & Innovation Center',
    span: '',
  },
  {
    src: '/gallery/graduation.jpg',
    alt: 'Graduation ceremony',
    caption: 'Commencement Day',
    span: 'lg:col-span-2',
  },
  {
    src: '/gallery/students-lawn.jpg',
    alt: 'Students on the main lawn',
    caption: 'Campus Life',
    span: '',
  },
  {
    src: '/gallery/library-interior.jpg',
    alt: 'Grand Library interior',
    caption: 'Morrison Library',
    span: '',
  },
  {
    src: '/gallery/research-lab.jpg',
    alt: 'State-of-the-art research laboratory',
    caption: 'Research Facilities',
    span: 'lg:col-span-2',
  },
  {
    src: '/gallery/autumn-campus.jpg',
    alt: 'Campus in autumn',
    caption: 'Fall at Avirat ',
    span: '',
  },
]

export function Gallery() {
  const { ref: headerRef, isInView: headerInView } = useScrollAnimation()
  const { ref: galleryRef, isInView: galleryInView } = useScrollAnimation({ threshold: 0.05 })

  return (
    <section id="gallery" className="py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div
          ref={headerRef}
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${headerInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <p className="text-sm uppercase tracking-widest text-accent mb-4">Explore Our Campus</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-6">
            A Place to Call Home
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            From historic architecture to cutting-edge facilities, our campus provides the perfect
            environment for academic excellence and personal growth.
          </p>
        </div>

        {/* Image Grid */}
        <div ref={galleryRef} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={image.src}
              className={`group relative overflow-hidden rounded-xl ${image.span} aspect-square transition-all duration-700 ${galleryInView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
              style={{ transitionDelay: galleryInView ? `${index * 75}ms` : '0ms' }}
            >
              <Image
                src={image.src || '/placeholder.svg'}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <p className="text-primary-foreground font-medium text-sm md:text-base">
                  {image.caption}
                </p>
              </div>
              {/* Corner accent */}
              <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-accent opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:w-12 group-hover:h-12" />
            </div>
          ))}
        </div>

        {/* Stats bar */}
        <div
          className={`mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 p-8 bg-secondary/50 rounded-2xl transition-all duration-700 delay-500 ${galleryInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          {[
            { value: '300', unit: 'Acres', label: 'Campus Size' },
            { value: '50+', unit: '', label: 'Historic Buildings' },
            { value: '12', unit: '', label: 'Research Centers' },
            { value: '24/7', unit: '', label: 'Library Access' },
          ].map((stat, index) => (
            <div
              key={stat.label}
              className={`text-center transition-all duration-500 ${galleryInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              style={{ transitionDelay: galleryInView ? `${600 + index * 100}ms` : '0ms' }}
            >
              <div className="text-3xl md:text-4xl font-bold text-foreground">
                {stat.value}
                <span className="text-accent">{stat.unit}</span>
              </div>
              <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
