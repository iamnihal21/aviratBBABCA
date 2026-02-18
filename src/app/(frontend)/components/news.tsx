'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent } from '@/app/(frontend)/components/ui/card'
import { Button } from '@/app/(frontend)/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/app/(frontend)/components/ui/tabs'
import { ArrowUpRight, Calendar } from 'lucide-react'
import { useScrollAnimation } from '@/app/(frontend)/hooks/use-scroll-animation'

const news = [
  {
    title: 'Avirat Researchers Develop Breakthrough in Quantum Computing',
    excerpt:
      'A team of physicists has achieved a major milestone in quantum error correction, bringing practical quantum computers closer to reality.',
    date: 'January 28, 2026',
    category: 'Research',
    image: '/news/quantum.jpg',
    featured: true,
  },
  {
    title: 'University Announces $500M Climate Initiative',
    excerpt:
      'New funding will support research, infrastructure, and curriculum development focused on sustainability and climate solutions.',
    date: 'January 22, 2026',
    category: 'Announcement',
    image: '/news/climate.jpg',
    featured: false,
  },
  {
    title: 'Record Number of Applications for Fall 2026',
    excerpt:
      "Admissions reports over 65,000 applications, reflecting growing interest in Avirat 's innovative programs.",
    date: 'January 15, 2026',
    category: 'Admissions',
    image: '/news/admissions.jpg',
    featured: false,
  },
  {
    title: 'Alumni Entrepreneur Named to Fortune 40 Under 40',
    excerpt:
      'Jennifer Liu, Class of 2018, recognized for her work founding an AI-powered healthcare startup.',
    date: 'January 10, 2026',
    category: 'Alumni',
    image: '/news/alumni.jpg',
    featured: false,
  },
]

const events = [
  {
    title: 'Virtual Open House',
    date: 'February 15, 2026',
    time: '10:00 AM - 2:00 PM EST',
    type: 'Admissions',
  },
  {
    title: 'Annual Research Symposium',
    date: 'March 5-7, 2026',
    time: 'All Day',
    type: 'Academic',
  },
  {
    title: 'Spring Career Fair',
    date: 'March 18, 2026',
    time: '9:00 AM - 5:00 PM',
    type: 'Career',
  },
  {
    title: "Founder's Day Celebration",
    date: 'April 12, 2026',
    time: '12:00 PM - 8:00 PM',
    type: 'Campus',
  },
]

export function News() {
  const { ref: headerRef, isInView: headerInView } = useScrollAnimation()
  const { ref: contentRef, isInView: contentInView } = useScrollAnimation({ threshold: 0.05 })

  return (
    <section id="news" className="py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div
          ref={headerRef}
          className={`max-w-2xl mb-12 transition-all duration-700 ${headerInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <p className="text-sm uppercase tracking-widest text-accent mb-4">Stay Connected</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-6">
            News & Events
          </h2>
        </div>

        <div ref={contentRef}>
          <Tabs defaultValue="news" className="w-full">
            <TabsList
              className={`mb-8 transition-all duration-700 ${contentInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            >
              <TabsTrigger value="news">Latest News</TabsTrigger>
              <TabsTrigger value="events">Upcoming Events</TabsTrigger>
            </TabsList>

            <TabsContent value="news">
              <div className="grid lg:grid-cols-2 gap-8">
                {/* Featured Article */}
                <Card
                  className={`group bg-card border-border overflow-hidden transition-all duration-700 hover:shadow-xl ${contentInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={news[0].image || '/placeholder.svg'}
                      alt={news[0].title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-accent text-accent-foreground text-xs font-medium rounded-full">
                        {news[0].category}
                      </span>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <time className="text-sm text-muted-foreground">{news[0].date}</time>
                    <h3 className="text-xl font-semibold text-foreground mt-2 mb-3 group-hover:text-accent transition-colors">
                      {news[0].title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">{news[0].excerpt}</p>
                  </CardContent>
                </Card>

                {/* Other Articles */}
                <div className="space-y-6">
                  {news.slice(1).map((article, index) => (
                    <Card
                      key={article.title}
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
                            <span className="text-xs text-accent font-medium">
                              {article.category}
                            </span>
                            <h3 className="text-base font-semibold text-foreground mt-1 line-clamp-2 group-hover:text-accent transition-colors">
                              {article.title}
                            </h3>
                            <time className="text-sm text-muted-foreground mt-2">
                              {article.date}
                            </time>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              <div
                className={`mt-12 text-center transition-all duration-700 delay-500 ${contentInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              >
                <Button
                  variant="outline"
                  size="lg"
                  asChild
                  className="transition-all duration-300 hover:scale-105 bg-transparent"
                >
                  <Link href="#">
                    View All News
                    <ArrowUpRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </TabsContent>

            <TabsContent value="events">
              <div className="grid md:grid-cols-2 gap-6">
                {events.map((event, index) => (
                  <Card
                    key={event.title}
                    className={`group bg-card border-border hover:bg-secondary/50 transition-all duration-500 hover:shadow-lg hover:-translate-y-1 ${contentInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                    style={{ transitionDelay: contentInView ? `${index * 100}ms` : '0ms' }}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <span className="text-xs text-accent font-medium uppercase tracking-wider">
                            {event.type}
                          </span>
                          <h3 className="text-lg font-semibold text-foreground mt-2 mb-3 group-hover:text-accent transition-colors">
                            {event.title}
                          </h3>
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <Calendar className="h-4 w-4" />
                            <span className="text-sm">{event.date}</span>
                          </div>
                          <p className="text-sm text-muted-foreground mt-1">{event.time}</p>
                        </div>
                        <ArrowUpRight className="h-5 w-5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div
                className={`mt-12 text-center transition-all duration-700 delay-300 ${contentInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              >
                <Button
                  variant="outline"
                  size="lg"
                  asChild
                  className="transition-all duration-300 hover:scale-105 bg-transparent"
                >
                  <Link href="#">
                    View All Events
                    <ArrowUpRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  )
}
