'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Sparkles,
  Eye,
  Target,
  Users,
  Quote,
  BookOpen,
  GraduationCap,
  Globe,
  Briefcase,
  Award,
  BookOpenCheck,
  Building2,
} from 'lucide-react'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/app/(frontend)/components/ui/card'
import { useScrollAnimation } from '@/app/(frontend)/hooks/use-scroll-animation'

export default function AboutClient({ data }: { data: any }) {
  const [activeTrustee, setActiveTrustee] = useState(0)

  // Use DB data with fallbacks
  const hero = data?.hero || { year: '1892', description: 'Discover a legacy of excellence...' }
  const visionMission = data?.visionMission || {
    vision: { title: 'Our Vision', description: '', points: [] },
    mission: { title: 'Our Mission', description: '', points: [] },
  }
  const trustees = data?.trustees || []

  const { ref: heroRef } = useScrollAnimation({ threshold: 0.1, triggerOnce: true })
  const { ref: visionRef, isInView: visionInView } = useScrollAnimation({
    threshold: 0.1,
    triggerOnce: true,
  })
  const { ref: trusteesRef, isInView: trusteesInView } = useScrollAnimation({
    threshold: 0.1,
    triggerOnce: true,
  })
  const { ref: facultySectionRef, isInView: facultyInView } = useScrollAnimation({
    threshold: 0.1,
    triggerOnce: true,
  })
  const { ref: infraSectionRef, isInView: infraInView } = useScrollAnimation({
    threshold: 0.1,
    triggerOnce: true,
  })

  const fadeInUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }
  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      {/* Hero Section */}
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
              <span className="text-sm font-medium">About Avirat University</span>
            </motion.div>
            <motion.h1
              variants={fadeInUp}
              className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
            >
              Shaping Futures Since{' '}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                {hero.year}
              </span>
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-xl text-muted-foreground leading-relaxed mb-8 max-w-2xl"
            >
              {hero.description}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-24 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            ref={visionRef}
            initial="hidden"
            animate={visionInView ? 'visible' : 'hidden'}
            variants={staggerChildren}
            className="grid lg:grid-cols-2 gap-8"
          >
            {/* Vision */}
            <motion.div variants={fadeInUp}>
              <Card className="bg-white border-none shadow-xl h-full">
                <CardHeader>
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 p-0.5 mb-4">
                    <div className="w-full h-full rounded-2xl bg-white flex items-center justify-center">
                      <Eye className="h-8 w-8 text-blue-500" />
                    </div>
                  </div>
                  <CardTitle className="text-3xl font-bold mb-4">Our Vision</CardTitle>
                  <CardDescription className="text-lg text-muted-foreground">
                    {visionMission.vision.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {visionMission.vision.points?.map((p: any, i: number) => (
                      <li key={i} className="flex items-center gap-3 text-foreground">
                        <div className="w-2 h-2 rounded-full bg-blue-500" /> {p.point}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
            {/* Mission */}
            <motion.div variants={fadeInUp}>
              <Card className="bg-white border-none shadow-xl h-full">
                <CardHeader>
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 p-0.5 mb-4">
                    <div className="w-full h-full rounded-2xl bg-white flex items-center justify-center">
                      <Target className="h-8 w-8 text-purple-500" />
                    </div>
                  </div>
                  <CardTitle className="text-3xl font-bold mb-4">Our Mission</CardTitle>
                  <CardDescription className="text-lg text-muted-foreground">
                    {visionMission.mission.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {visionMission.mission.points?.map((p: any, i: number) => (
                      <li key={i} className="flex items-center gap-3 text-foreground">
                        <div className="w-2 h-2 rounded-full bg-purple-500" /> {p.point}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Trustees Section */}
      {trustees?.length > 0 && (
        <section className="py-24 container mx-auto px-4 space-y-12">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-2">Our Trustees</h2>
            <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
            <p className="text-muted-foreground mt-4">
              Guiding our institution with wisdom and vision
            </p>
          </div>

          {trustees.map((trustee: any, index: number) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-10 rounded-[3rem] border flex flex-col md:flex-row gap-8 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="relative w-48 h-48 rounded-3xl overflow-hidden shrink-0 shadow-inner bg-gray-100">
                {trustee?.image ? (
                  <img
                    src={typeof trustee.image === 'string' ? trustee.image : trustee.image?.url}
                    alt={trustee.name || 'Trustee'}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="flex items-center justify-center h-full text-gray-400">
                    No Photo Available
                  </div>
                )}
              </div>

              <div className="flex-1">
                <h3 className="text-3xl font-bold">{trustee.name}</h3>
                {trustee.title && (
                  <p className="text-primary uppercase text-sm font-semibold tracking-widest">
                    {trustee.title}
                  </p>
                )}
                {trustee.message && (
                  <p className="italic text-slate-600 mt-4 text-lg">"{trustee.message}"</p>
                )}
                <div className="text-slate-500 mt-4 space-y-2">
                  {trustee.qualification && (
                    <p>
                      <span className="text-primary font-medium">Qualification:</span>{' '}
                      {trustee.qualification}
                    </p>
                  )}
                  {trustee.experience && (
                    <p>
                      <span className="text-primary font-medium">Experience:</span>{' '}
                      {trustee.experience}
                    </p>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </section>
      )}

      {/* Faculty and Expertise Section */}
      <section className="py-24 bg-secondary/30 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div ref={facultySectionRef} className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={facultyInView ? { opacity: 1, y: 0 } : {}}
              className="inline-flex items-center gap-2 text-primary font-semibold uppercase tracking-wider mb-4"
            >
              <BookOpenCheck className="w-5 h-5" />
              <span>Faculty and Expertise</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={facultyInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold"
            >
              The Source of <span className="text-primary">Insight and Innovation</span>
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={facultyInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="relative bg-white p-8 md:p-12 rounded-[2.5rem] shadow-xl border border-primary/5"
          >
            <Quote className="absolute top-10 right-10 w-20 h-20 text-primary/5 rotate-12" />
            <div className="relative z-10 space-y-6 text-lg md:text-xl text-muted-foreground leading-relaxed max-w-4xl">
              <p>
                Our faculty comprises highly qualified and experienced professionals who are
                passionate about teaching and mentoring. They bring a wealth of industry knowledge
                and academic expertise to the classroom.
              </p>
              <p>
                We are committed to providing personalized attention and guidance to each student,
                ensuring their academic and professional success.
              </p>
              <p className="font-medium text-foreground">
                Our faculty is involved in ongoing research and industry collaboration.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Infrastructure and Facilities Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div ref={infraSectionRef} className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={infraInView ? { opacity: 1, y: 0 } : {}}
              className="inline-flex items-center gap-2 text-primary font-semibold uppercase tracking-wider mb-4"
            >
              <Building2 className="w-5 h-5" />
              <span>Infrastructure and Facilities</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={infraInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold"
            >
              Advanced Resources for <span className="text-primary">a Brighter Future</span>
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={infraInView ? { opacity: 1, y: 0 } : {}}
            className="bg-secondary/50 p-8 md:p-12 rounded-[2.5rem] border border-border"
          >
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                  Our campus boasts modern infrastructure and state-of-the-art facilities, including
                  well-equipped computer labs, a comprehensive library, Wi-Fi connectivity, and
                  dedicated spaces for extracurricular activities.
                </p>
                <div className="flex items-center gap-4 p-4 bg-white rounded-2xl shadow-sm border border-primary/10">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                    <Sparkles className="w-6 h-6" />
                  </div>
                  <p className="font-semibold text-foreground leading-snug">
                    A conducive learning environment that fosters innovation and collaboration.
                  </p>
                </div>
              </div>
              
              {/* Feature Grid Visual */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: 'Tech Labs', icon: Globe },
                  { label: 'Library', icon: BookOpen },
                  { label: 'Campus Wi-Fi', icon: Sparkles },
                  { label: 'Activity Hub', icon: Users },
                ].map((item, i) => (
                  <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border text-center">
                    <item.icon className="w-8 h-8 mx-auto mb-3 text-primary/60" />
                    <span className="font-medium text-sm">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}