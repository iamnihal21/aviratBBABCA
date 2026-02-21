'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/app/(frontend)/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/app/(frontend)/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/app/(frontend)/components/ui/tabs'
import {
  ArrowRight,
  Building2,
  Coffee,
  Dumbbell,
  Home,
  Library,
  Music,
  Palette,
  Users,
  Utensils,
  Sparkles,
  Heart,
  Calendar,
  Clock,
  Star,
  Wifi,
  Shield,
  Wind,
} from 'lucide-react'
import { useScrollAnimation } from '@/app/(frontend)/hooks/use-scroll-animation'

export default function CampusClient({ settings, gallery }: { settings: any; gallery: any[] }) {
  const [activeTab, setActiveTab] = useState(settings?.facilities?.[0]?.category || 'Academic')
  const { ref: heroRef } = useScrollAnimation({ threshold: 0.1, triggerOnce: true })
  const { ref: statsRef, isInView: statsInView } = useScrollAnimation({
    threshold: 0.1,
    triggerOnce: true,
  })
  const { ref: galleryRef, isInView: galleryInView } = useScrollAnimation({
    threshold: 0.1,
    triggerOnce: true,
  })
  const { ref: amenitiesRef, isInView: amenitiesInView } = useScrollAnimation({
    threshold: 0.1,
    triggerOnce: true,
  })

  const getIcon = (type: string) => {
    const icons: any = {
      users: Users,
      dumbbell: Dumbbell,
      heart: Heart,
      palette: Palette,
      library: Library,
      building: Building2,
      home: Home,
      utensils: Utensils,
      coffee: Coffee,
      music: Music,
      wifi: Wifi,
      shield: Shield,
      wind: Wind,
      calendar: Calendar,
      clock: Clock,
      star: Star,
    }
    return icons[type] || Building2
  }

  const fadeInUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }
  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-transparent" />
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            ref={heroRef}
            initial="visible"
            animate="visible"
            variants={staggerChildren}
            className="max-w-3xl"
          >
            <motion.div
              variants={fadeInUp}
              className="inline-flex items-center gap-2 bg-primary/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-primary/20"
            >
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">Experience Campus Life at Avirat</span>
            </motion.div>
            <motion.h1
              variants={fadeInUp}
              className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
            >
              A Vibrant{' '}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Community
              </span>
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-xl text-muted-foreground leading-relaxed max-w-2xl"
            >
              Experience a dynamic campus culture where academic excellence meets personal growth.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-16 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            ref={statsRef}
            initial="hidden"
            animate={statsInView ? 'visible' : 'hidden'}
            variants={staggerChildren}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {settings?.stats?.map((stat: any) => {
              const Icon = getIcon(stat.iconType)
              return (
                <motion.div key={stat.label} variants={fadeInUp} className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-3">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold">{stat.count}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Campus in Pictures</h2>
            <Button variant="outline" asChild className="bg-transparent border-2">
              <Link href="/gallery">
                View Full Gallery <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <motion.div
            ref={galleryRef}
            initial="hidden"
            animate={galleryInView ? 'visible' : 'hidden'}
            variants={staggerChildren}
            className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[250px]"
          >
            {gallery?.map((img, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className={`relative group overflow-hidden rounded-xl ${img.span}`}
              >
                <Image
                  src={img.image.url}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-4 flex items-end">
                  <span className="text-white text-sm font-medium">{img.alt}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Amenities Grid */}
      <section className="py-24 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Everything You Need</h2>
          <motion.div
            ref={amenitiesRef}
            initial="hidden"
            animate={amenitiesInView ? 'visible' : 'hidden'}
            variants={staggerChildren}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"
          >
            {settings?.amenities?.map((amenity: any) => {
              const Icon = getIcon(amenity.iconType)
              return (
                <motion.div key={amenity.label} variants={fadeInUp}>
                  <Card className="bg-white/10 border-white/20 hover:bg-white/20 transition-all">
                    <CardContent className="p-6">
                      <Icon className="h-8 w-8 mx-auto mb-3 text-white" />
                      <div className="font-medium text-sm mb-1">{amenity.label}</div>
                      <div className="text-xs text-white/70">{amenity.description}</div>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Facilities Tabs */}
      <section className="py-24 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            World-Class Facilities
          </h2>
          <Tabs defaultValue={activeTab} className="w-full" onValueChange={setActiveTab}>
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-12">
              {settings?.facilities?.map((cat: any) => (
                <TabsTrigger key={cat.category} value={cat.category}>
                  {cat.category}
                </TabsTrigger>
              ))}
            </TabsList>
            <AnimatePresence mode="wait">
              {settings?.facilities?.map((cat: any) => (
                <TabsContent key={cat.category} value={cat.category}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="grid md:grid-cols-3 gap-6"
                  >
                    {cat.items.map((item: any) => {
                      const Icon = getIcon(item.iconType)
                      return (
                        <Card
                          key={item.name}
                          className="bg-white border-none shadow-lg hover:-translate-y-1 transition-all"
                        >
                          <CardHeader>
                            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-accent p-0.5 mb-4">
                              <div className="w-full h-full rounded-2xl bg-white flex items-center justify-center">
                                <Icon className="h-7 w-7 text-primary" />
                              </div>
                            </div>
                            <CardTitle className="text-xl">{item.name}</CardTitle>
                            <CardDescription>{item.description}</CardDescription>
                          </CardHeader>
                          <CardContent>
                            <ul className="space-y-2">
                              {item.features?.map((f: any, i: number) => (
                                <li
                                  key={i}
                                  className="flex items-center gap-2 text-sm text-muted-foreground"
                                >
                                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                                  {f.feature}
                                </li>
                              ))}
                            </ul>
                          </CardContent>
                        </Card>
                      )
                    })}
                  </motion.div>
                </TabsContent>
              ))}
            </AnimatePresence>
          </Tabs>
        </div>
      </section>
    </main>
  )
}
