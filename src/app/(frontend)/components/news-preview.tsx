'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent } from '@/app/(frontend)/components/ui/card'
import { Button } from '@/app/(frontend)/components/ui/button'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { useScrollAnimation } from '@/app/(frontend)/hooks/use-scroll-animation'

const newsPreview = [
  {
    title: 'Avirat Researchers Achieve Quantum Computing Breakthrough',
    excerpt: 'A team of physicists has achieved a major milestone in quantum error correction.',
    date: 'January 28, 2026',
    category: 'Research',
    image: '/news/quantum.jpg',
    featured: true,
  },
  {
    title: 'University Announces $500M Climate Initiative',
    excerpt: 'New funding will support sustainable research and carbon neutrality goals.',
    date: 'January 25, 2026',
    category: 'Campus',
    image: '/news/climate.jpg',
  },
  {
    title: 'Record Number of Applications for Fall 2026',
    excerpt: 'Admissions receives over 45,000 applications, marking a 15% increase.',
    date: 'January 22, 2026',
    category: 'Admissions',
    image: '/news/admissions.jpg',
  },
]

export function NewsPreview() {
  const { ref: headerRef, isInView: headerInView } = useScrollAnimation()
  const { ref: contentRef, isInView: contentInView } = useScrollAnimation({ threshold: 0.05 })

  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div
          ref={headerRef}
          className={`flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 transition-all duration-700 ${headerInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div>
            <p className="text-sm uppercase tracking-widest text-accent mb-4">Stay Connected</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
              Latest News
            </h2>
          </div>
          <Button
            variant="outline"
            size="lg"
            asChild
            className="transition-all duration-300 hover:scale-105 bg-transparent w-fit"
          >
            <Link href="/news" className="group">
              View All News
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>

        <div ref={contentRef} className="grid lg:grid-cols-2 gap-8">
          {/* Featured Article */}
          <Link href="/news" className="block">
            <Card
              className={`group h-full bg-card border-border overflow-hidden transition-all duration-700 hover:shadow-xl ${contentInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={newsPreview[0].image || '/placeholder.svg'}
                  alt={newsPreview[0].title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-accent text-accent-foreground text-xs font-medium rounded-full">
                    {newsPreview[0].category}
                  </span>
                </div>
              </div>
              <CardContent className="p-6">
                <time className="text-sm text-muted-foreground">{newsPreview[0].date}</time>
                <h3 className="text-xl font-semibold text-foreground mt-2 mb-3 group-hover:text-accent transition-colors">
                  {newsPreview[0].title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">{newsPreview[0].excerpt}</p>
              </CardContent>
            </Card>
          </Link>

          {/* Other Articles */}
          <div className="space-y-6">
            {newsPreview.slice(1).map((article, index) => (
              <Link href="/news" key={article.title}>
                <Card
                  className={`group bg-card border-border overflow-hidden transition-all duration-500 hover:shadow-lg hover:-translate-y-1 ${contentInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}
                  style={{ transitionDelay: contentInView ? `${(index + 1) * 150}ms` : '0ms' }}
                >
                  <CardContent className="p-0">
                    <div className="flex gap-4">
                      <div className="relative w-32 h-32 flex-shrink-0 overflow-hidden">
                        <Image
                          src={article.image || '/placeholder.svg'}
                          alt={article.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>
                      <div className="py-4 pr-4 flex flex-col justify-center">
                        <span className="text-xs text-accent font-medium">{article.category}</span>
                        <h3 className="text-base font-semibold text-foreground mt-1 line-clamp-2 group-hover:text-accent transition-colors">
                          {article.title}
                        </h3>
                        <time className="text-sm text-muted-foreground mt-2">{article.date}</time>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
