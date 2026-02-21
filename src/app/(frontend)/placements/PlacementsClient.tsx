'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/app/(frontend)/components/ui/card'
import { 
  Briefcase, TrendingUp, DollarSign, Building2, MapPin, Award, Sparkles 
} from 'lucide-react'
import { useScrollAnimation } from '@/app/(frontend)/hooks/use-scroll-animation'

export default function PlacementsClient({ settings, recruiters }: { settings: any, recruiters: any[] }) {
  const { ref: headerRef } = useScrollAnimation({ threshold: 0.1, triggerOnce: true })
  const { ref: statsRef, isInView: statsInView } = useScrollAnimation({ threshold: 0.1, triggerOnce: true })
  const { ref: recruitersRef, isInView: recruitersInView } = useScrollAnimation({ threshold: 0.1, triggerOnce: true })

  const getIcon = (type: string) => {
    const icons: any = {
      trending: TrendingUp, dollar: DollarSign, award: Award, 
      building: Building2, briefcase: Briefcase, 'map-pin': MapPin
    }
    return icons[type] || Award
  }

  const fadeInUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }
  const staggerChildren = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } }

  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div ref={headerRef} initial="visible" animate="visible" variants={staggerChildren} className="max-w-3xl">
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-6 border border-primary/20">
              <Briefcase className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">Placements at Avirat</span>
            </motion.div>
            <motion.h1 variants={fadeInUp} className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
              Building <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Careers</span>
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
              Success stories built on excellence and industry partnerships.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section ref={statsRef} className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div initial="hidden" animate={statsInView ? "visible" : "hidden"} variants={staggerChildren} className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {settings?.stats?.map((stat: any) => {
              const Icon = getIcon(stat.iconType)
              return (
                <motion.div key={stat.label} variants={fadeInUp}>
                  <Card className="bg-white border-none shadow-lg hover:-translate-y-1 transition-all">
                    <CardContent className="p-6 text-center">
                      <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                        <Icon className="h-7 w-7 text-primary" />
                      </div>
                      <div className="text-3xl font-bold mb-1">{stat.value}</div>
                      <div className="text-sm text-muted-foreground">{stat.label}</div>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-16 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Placement Highlights</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {settings?.highlights?.map((item: any, index: number) => {
              const Icon = getIcon(item.iconType)
              return (
                <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }} viewport={{ once: true }}>
                  <Card className="bg-white border-none shadow-lg overflow-hidden group">
                    <div className={`h-2 bg-gradient-to-r ${item.colorTheme}`} />
                    <CardContent className="p-6 text-center">
                      <div className={`w-16 h-16 rounded-full bg-primary/5 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                        <Icon className="h-8 w-8 text-primary" />
                      </div>
                      <div className="text-3xl font-bold mb-2">{item.count}</div>
                      <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Top Recruiters */}
      <section ref={recruitersRef} className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Top Recruiters</h2>
          <motion.div initial="hidden" animate={recruitersInView ? "visible" : "hidden"} variants={staggerChildren} className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {recruiters.map((recruiter) => (
              <motion.div key={recruiter.name} variants={fadeInUp}>
                <Card className="bg-white border-none shadow-md hover:shadow-xl transition-all group">
                  <CardContent className="p-6 text-center">
                    <div className="h-16 w-16 mx-auto mb-3 bg-secondary/50 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <span className="text-2xl font-bold text-primary">{recruiter.name.charAt(0)}</span>
                    </div>
                    <h3 className="font-semibold">{recruiter.name}</h3>
                    <p className="text-xs text-muted-foreground mt-1">{recruiter.industry}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </main>
  )
}