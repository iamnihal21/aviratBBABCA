'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/app/(frontend)/components/ui/button'
import { Card, CardContent } from '@/app/(frontend)/components/ui/card'
import { Tabs, TabsList, TabsTrigger } from '@/app/(frontend)/components/ui/tabs'
import {
  ArrowRight, Calendar, CheckCircle2, FileText, GraduationCap,
  HelpCircle, MapPin, Users, Trophy, Clock, ChevronRight, Sparkles
} from 'lucide-react'
import { useScrollAnimation } from '@/app/(frontend)/hooks/use-scroll-animation'

export default function AdmissionsClient({ data }: { data: any }) {
  const [activeTab, setActiveTab] = useState('process')
  const [mounted, setMounted] = useState(false)

  useEffect(() => { setMounted(true) }, [])

  const { ref: heroRef } = useScrollAnimation({ threshold: 0.1, triggerOnce: true })
  const { ref: statsRef, isInView: statsInView } = useScrollAnimation({ threshold: 0.1, triggerOnce: true })

  const getIcon = (type: string) => {
    const icons: any = { graduation: GraduationCap, users: Users, trophy: Trophy, clock: Clock, file: FileText, check: CheckCircle2 }
    return icons[type] || GraduationCap
  }

  const fadeInUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }
  const staggerChildren = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } }

  if (!mounted) return null

  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-transparent" />
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, hsl(var(--primary)/0.1) 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div ref={heroRef} initial="visible" animate="visible" variants={staggerChildren} className="max-w-3xl">
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 bg-primary/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-primary/20">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">Begin Your Journey at Avirat</span>
            </motion.div>
            <motion.h1 variants={fadeInUp} className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
              Your Path to <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Excellence</span>
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-xl text-muted-foreground leading-relaxed mb-8 max-w-2xl">
              We seek students who demonstrate intellectual curiosity, leadership potential, and a commitment to making a positive impact on the world.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-16 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div ref={statsRef} initial="hidden" animate={statsInView ? "visible" : "hidden"} variants={staggerChildren} className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {data?.highlights?.map((item: any) => {
              const Icon = getIcon(item.iconType)
              return (
                <motion.div key={item.label} variants={fadeInUp}>
                  <Card className="bg-white border-none shadow-md hover:-translate-y-1 transition-all duration-300">
                    <CardContent className="p-6 text-center">
                      <Icon className="h-8 w-8 mx-auto mb-3 text-primary" />
                      <div className="text-2xl font-bold mb-1">{item.value}</div>
                      <div className="text-sm text-muted-foreground">{item.label}</div>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Main Tabs */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Tabs defaultValue="process" className="w-full" onValueChange={setActiveTab}>
            <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-3 mb-12">
              <TabsTrigger value="process">Process</TabsTrigger>
              <TabsTrigger value="deadlines">Deadlines</TabsTrigger>
              <TabsTrigger value="faq">FAQ</TabsTrigger>
            </TabsList>

            <AnimatePresence mode="wait">
              {activeTab === "process" && (
                <motion.div key="process" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="grid lg:grid-cols-2 gap-16">
                  <div>
                    <h2 className="text-3xl font-bold mb-8">How to Apply</h2>
                    <div className="space-y-8">
                      {data?.timeline?.map((item: any, index: number) => (
                        <div key={index} className="flex gap-6 group relative">
                          <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color || 'from-primary to-accent'} p-0.5 flex-shrink-0`}>
                            <div className="w-full h-full rounded-2xl bg-white flex items-center justify-center">
                              <FileText className="h-6 w-6 text-gray-900" />
                            </div>
                          </div>
                          <div className="flex-1 pb-8">
                            <span className="text-sm font-semibold text-primary block">Step {item.step}</span>
                            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                            <p className="text-muted-foreground">{item.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === "deadlines" && (
                <motion.div key="deadlines" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                  <div className="grid lg:grid-cols-2 gap-8">
                    {['undergraduate', 'graduate'].map((category) => (
                      <div key={category}>
                        <h2 className="text-3xl font-bold mb-6 capitalize">{category} Deadlines</h2>
                        <div className="space-y-4">
                          {data?.deadlines?.[category]?.map((item: any, i: number) => (
                            <Card key={i} className="hover:shadow-lg transition-all">
                              <CardContent className="p-6">
                                <h3 className="text-lg font-semibold mb-4">{item.type}</h3>
                                <div className="space-y-2 text-sm">
                                  <div className="flex items-center gap-2"><Calendar className="h-4 w-4 text-primary" /> <span className="text-muted-foreground">Deadline:</span> {item.deadline}</div>
                                  <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> <span className="text-muted-foreground">Notification:</span> {item.notification}</div>
                                </div>
                              </CardContent>
                            </Card>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      
    </main>
  )
}