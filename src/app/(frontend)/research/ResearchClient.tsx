'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Button } from '@/app/(frontend)/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/app/(frontend)/components/ui/card'
import {
  ArrowRight, BookOpen, Cpu, Heart, Leaf, Rocket, Zap, Globe2, Microscope, Users, TrendingUp, FileText, Award
} from 'lucide-react'
import { useScrollAnimation } from '@/app/(frontend)/hooks/use-scroll-animation'

export default function ResearchClient({ areas, faculty, publications }: any) {
  const { ref: headerRef } = useScrollAnimation({ threshold: 0.1, triggerOnce: true })
  const { ref: statsRef, isInView: statsInView } = useScrollAnimation({ threshold: 0.1, triggerOnce: true })

  const getIcon = (type: string) => {
    const icons: any = { 
      cpu: Cpu, heart: Heart, leaf: Leaf, rocket: Rocket, zap: Zap, globe: Globe2 
    }
    return icons[type] || Microscope
  }

  const fadeInUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }
  const stagger = { visible: { transition: { staggerChildren: 0.1 } } }

  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div ref={headerRef} initial="visible" animate="visible" variants={stagger} className="max-w-3xl">
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-6 border border-primary/20">
              <Microscope className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">Research & Innovation</span>
            </motion.div>
            <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
              Pushing the <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Boundaries</span>
            </motion.h1>
          </motion.div>
        </div>
      </section>

      {/* Research Areas */}
      <section className="py-24 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {areas.map((area: any) => {
              const Icon = getIcon(area.iconType)
              return (
                <Card key={area.id} className="group bg-white border-none shadow-lg hover:-translate-y-1 transition-all">
                  <div className={`h-2 bg-gradient-to-r ${area.colorTheme}`} />
                  <CardHeader>
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${area.colorTheme} flex items-center justify-center mb-4`}>
                      <Icon className="h-7 w-7 text-white" />
                    </div>
                    <CardTitle className="text-xl">{area.title}</CardTitle>
                    <CardDescription>{area.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="link" className="px-0 text-primary group/link">
                      Learn more <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Featured Faculty */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12">Featured Faculty</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {faculty.map((member: any) => (
              <Card key={member.id} className="group bg-white border-none shadow-lg overflow-hidden">
                <div className="relative aspect-[4/5]">
                  <Image src={member.image.url} alt={member.name} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold">{member.name}</h3>
                  <p className="text-sm text-muted-foreground">{member.title}</p>
                  <p className="text-sm text-primary mt-2 font-medium">{member.specialty}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Publications */}
      <section className="py-24 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12">Recent Publications</h2>
          <div className="space-y-4">
            {publications.map((pub: any) => (
              <Card key={pub.id} className="bg-white border-none shadow-md hover:shadow-lg transition-all">
                <CardContent className="p-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-semibold hover:text-primary cursor-pointer">{pub.title}</h3>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mt-2">
                      <span className="flex items-center gap-1"><BookOpen className="h-4 w-4" /> {pub.journal}</span>
                      <span>•</span>
                      <span>{pub.publishDate}</span>
                    </div>
                  </div>
                  <Button size="sm" onClick={() => pub.link && window.open(pub.link, '_blank')}>Read Paper</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}