'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { Card, CardContent } from '@/app/(frontend)/components/ui/card'
import { Button } from '@/app/(frontend)/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/app/(frontend)/components/ui/tabs'
import { Input } from '@/app/(frontend)/components/ui/input'
import { ArrowRight, ArrowUpRight, Calendar, Clock, MapPin, Search } from 'lucide-react'
import { useScrollAnimation } from '@/app/(frontend)/hooks/use-scroll-animation'

const newsArticles = [
  {
    title: 'Avirat Researchers Achieve Quantum Computing Breakthrough',
    excerpt:
      'A team of physicists has achieved a major milestone in quantum error correction, bringing practical quantum computers closer to reality.',
    date: 'January 28, 2026',
    category: 'Research',
    image: '/news/quantum.jpg',
    featured: true,
  },
  {
    title: 'University Announces $500M Climate Initiative',
    excerpt: 'New funding will support sustainable research and carbon neutrality goals by 2035.',
    date: 'January 25, 2026',
    category: 'Campus',
    image: '/news/climate.jpg',
  },
  {
    title: 'Record Number of Applications for Fall 2026',
    excerpt: 'Admissions receives over 45,000 applications, marking a 15% increase from last year.',
    date: 'January 22, 2026',
    category: 'Admissions',
    image: '/news/admissions.jpg',
  },
  {
    title: 'Alumni Entrepreneur Raises $200M for AI Startup',
    excerpt:
      "Graduate Michelle Wong's company achieves unicorn status, credits university research opportunities.",
    date: 'January 18, 2026',
    category: 'Alumni',
    image: '/news/alumni.jpg',
  },
  {
    title: 'New Medical Research Center Opens Doors',
    excerpt:
      'The state-of-the-art facility will house 500 researchers focusing on genomic medicine.',
    date: 'January 15, 2026',
    category: 'Campus',
    image: '/gallery/research-lab.jpg',
  },
  {
    title: 'Basketball Team Wins Conference Championship',
    excerpt: 'Eagles secure their third consecutive title with a thrilling overtime victory.',
    date: 'January 12, 2026',
    category: 'Athletics',
    image: '/campus/athletics.jpg',
  },
]

const events = [
  {
    title: 'Spring Open House',
    date: 'February 15, 2026',
    time: '9:00 AM - 4:00 PM',
    location: 'Main Campus',
    type: 'Admissions',
    description: 'Meet faculty, tour campus, and learn about programs.',
  },
  {
    title: 'Research Symposium 2026',
    date: 'February 22-24, 2026',
    time: 'All Day',
    location: 'Convention Center',
    type: 'Academic',
    description: 'Annual showcase of groundbreaking research across all disciplines.',
  },
  {
    title: 'Career Fair',
    date: 'March 1, 2026',
    time: '10:00 AM - 5:00 PM',
    location: 'Student Center',
    type: 'Career',
    description: 'Connect with 200+ employers from various industries.',
  },
  {
    title: 'Alumni Weekend',
    date: 'March 15-17, 2026',
    time: 'Various Times',
    location: 'Campus-wide',
    type: 'Alumni',
    description: 'Reunions, networking events, and campus celebrations.',
  },
  {
    title: 'Spring Concert',
    date: 'April 5, 2026',
    time: '7:00 PM',
    location: 'Amphitheater',
    type: 'Entertainment',
    description: 'Annual outdoor concert featuring top artists.',
  },
  {
    title: 'Commencement Ceremony',
    date: 'May 18, 2026',
    time: '10:00 AM',
    location: 'Stadium',
    type: 'Academic',
    description: 'Celebrate the Class of 2026.',
  },
]

const categories = ['All', 'Research', 'Campus', 'Admissions', 'Alumni', 'Athletics']

export function NewsPageContent() {
  const { ref: headerRef, isInView: headerInView } = useScrollAnimation()
  const [activeCategory, setActiveCategory] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')

  const filteredNews = newsArticles.filter((article) => {
    const matchesCategory = activeCategory === 'All' || article.category === activeCategory
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const featuredArticle = newsArticles.find((a) => a.featured)
  const otherArticles = filteredNews.filter((a) => !a.featured)

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div
            ref={headerRef}
            className={`max-w-3xl transition-all duration-700 ${headerInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <p className="text-sm uppercase tracking-widest text-accent mb-4">News & Events</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Stay Connected
            </h1>
            <p className="text-xl text-primary-foreground/80 leading-relaxed">
              Keep up with the latest news, research breakthroughs, and events from across the
              Avirat community.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-8 bg-secondary/50 border-b border-border sticky top-16 z-40 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search news..."
                className="pl-10 bg-background"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex gap-2 flex-wrap justify-center">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={activeCategory === category ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setActiveCategory(category)}
                  className={activeCategory !== category ? 'bg-transparent' : ''}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* News Content */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Tabs defaultValue="news" className="w-full">
            <TabsList className="mb-8">
              <TabsTrigger value="news">Latest News</TabsTrigger>
              <TabsTrigger value="events">Upcoming Events</TabsTrigger>
            </TabsList>

            <TabsContent value="news">
              {/* Featured Article */}
              {featuredArticle && activeCategory === 'All' && !searchQuery && (
                <Card className="group bg-card border-border overflow-hidden mb-8">
                  <div className="grid lg:grid-cols-2">
                    <div className="relative aspect-video lg:aspect-auto overflow-hidden">
                      <Image
                        src={featuredArticle.image || '/placeholder.svg'}
                        alt={featuredArticle.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                    <CardContent className="p-8 flex flex-col justify-center">
                      <span className="text-xs text-accent font-medium uppercase tracking-wider mb-2">
                        Featured · {featuredArticle.category}
                      </span>
                      <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 group-hover:text-accent transition-colors">
                        {featuredArticle.title}
                      </h2>
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        {featuredArticle.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <time className="text-sm text-muted-foreground">
                          {featuredArticle.date}
                        </time>
                        <Button variant="ghost" size="sm" className="group-hover:text-accent">
                          Read More
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </div>
                </Card>
              )}

              {/* News Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {otherArticles.map((article, index) => (
                  <Card
                    key={article.title}
                    className="group bg-card border-border overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="relative aspect-video overflow-hidden">
                      <Image
                        src={article.image || '/placeholder.svg'}
                        alt={article.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="px-2 py-1 bg-accent text-accent-foreground text-xs font-medium rounded-full">
                          {article.category}
                        </span>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-accent transition-colors line-clamp-2">
                        {article.title}
                      </h3>
                      <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
                        {article.excerpt}
                      </p>
                      <time className="text-xs text-muted-foreground">{article.date}</time>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {filteredNews.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-muted-foreground">No articles found matching your criteria.</p>
                </div>
              )}
            </TabsContent>

            <TabsContent value="events">
              <div className="grid md:grid-cols-2 gap-6">
                {events.map((event, index) => (
                  <Card
                    key={event.title}
                    className="group bg-card border-border hover:bg-secondary/50 transition-all duration-300 hover:shadow-lg"
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <span className="text-xs text-accent font-medium uppercase tracking-wider">
                          {event.type}
                        </span>
                        <ArrowUpRight className="h-5 w-5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                      <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
                        {event.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4">{event.description}</p>
                      <div className="space-y-2 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4 text-accent" />
                          {event.date}
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-accent" />
                          {event.time}
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4 text-accent" />
                          {event.location}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Stay in the Loop</h2>
          <p className="text-xl text-primary-foreground/80 mb-8">
            Subscribe to our newsletter for weekly updates on news, events, and research highlights.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <Input
              placeholder="Enter your email"
              className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50"
            />
            <Button variant="secondary">Subscribe</Button>
          </div>
        </div>
      </section>
    </>
  )
}
