// 'use client'

// import { useState } from 'react'
// import { motion } from 'framer-motion'
// import { Sparkles, Eye, Target, Users, Quote, BookOpen, GraduationCap, Globe, Briefcase, Award } from 'lucide-react'
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/app/(frontend)/components/ui/card'
// import { useScrollAnimation } from '@/app/(frontend)/hooks/use-scroll-animation'

// export default function AboutClient({ data }: { data: any }) {
//   const [activeTrustee, setActiveTrustee] = useState(0)

//   // Use DB data with your original hardcoded content as fallback
//   const hero = data?.hero || { year: '1892', description: 'Discover a legacy of excellence...' }
//   const visionMission = data?.visionMission || {
//     vision: { title: 'Our Vision', description: '', points: [] },
//     mission: { title: 'Our Mission', description: '', points: [] }
//   }
//   const trustees = data?.trustees || []
//   const faculty = data?.faculty || { stats: [], description: '', additional: '' }

//   const { ref: heroRef } = useScrollAnimation({ threshold: 0.1, triggerOnce: true })
//   const { ref: visionRef, isInView: visionInView } = useScrollAnimation({ threshold: 0.1, triggerOnce: true })
//   const { ref: trusteesRef, isInView: trusteesInView } = useScrollAnimation({ threshold: 0.1, triggerOnce: true })
//   const { ref: facultyRef, isInView: facultyInView } = useScrollAnimation({ threshold: 0.1, triggerOnce: true })

//   const fadeInUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }
//   const staggerChildren = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } }

//   return (
//     <main className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
//       {/* Hero Section */}
//       <section className="relative pt-32 pb-20 overflow-hidden">
//         <div className="absolute inset-0">
//           <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-transparent" />
//           <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse" />
//         </div>

//         <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
//           <motion.div ref={heroRef} initial="visible" animate="visible" variants={staggerChildren} className="max-w-3xl">
//             <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 bg-primary/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-primary/20">
//               <Sparkles className="w-4 h-4 text-primary" />
//               <span className="text-sm font-medium">About Avirat University</span>
//             </motion.div>
//             <motion.h1 variants={fadeInUp} className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
//               Shaping Futures Since <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">{hero.year}</span>
//             </motion.h1>
//             <motion.p variants={fadeInUp} className="text-xl text-muted-foreground leading-relaxed mb-8 max-w-2xl">
//               {hero.description}
//             </motion.p>
//           </motion.div>
//         </div>
//       </section>

//       {/* Vision & Mission Section */}
//       <section className="py-24 bg-secondary/30">
//         <div className="max-w-7xl mx-auto px-6 lg:px-8">
//           <motion.div ref={visionRef} initial="hidden" animate={visionInView ? "visible" : "hidden"} variants={staggerChildren} className="grid lg:grid-cols-2 gap-8">
//             {/* Vision */}
//             <motion.div variants={fadeInUp}>
//               <Card className="bg-white border-none shadow-xl h-full">
//                 <CardHeader>
//                   <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 p-0.5 mb-4">
//                     <div className="w-full h-full rounded-2xl bg-white flex items-center justify-center"><Eye className="h-8 w-8 text-blue-500" /></div>
//                   </div>
//                   <CardTitle className="text-3xl font-bold mb-4">Our Vision</CardTitle>
//                   <CardDescription className="text-lg text-muted-foreground">{visionMission.vision.description}</CardDescription>
//                 </CardHeader>
//                 <CardContent>
//                   <ul className="space-y-3">
//                     {visionMission.vision.points?.map((p: any, i: number) => (
//                       <li key={i} className="flex items-center gap-3 text-foreground">
//                         <div className="w-2 h-2 rounded-full bg-blue-500" /> {p.point}
//                       </li>
//                     ))}
//                   </ul>
//                 </CardContent>
//               </Card>
//             </motion.div>
//             {/* Mission */}
//             <motion.div variants={fadeInUp}>
//               <Card className="bg-white border-none shadow-xl h-full">
//                 <CardHeader>
//                   <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 p-0.5 mb-4">
//                     <div className="w-full h-full rounded-2xl bg-white flex items-center justify-center"><Target className="h-8 w-8 text-purple-500" /></div>
//                   </div>
//                   <CardTitle className="text-3xl font-bold mb-4">Our Mission</CardTitle>
//                   <CardDescription className="text-lg text-muted-foreground">{visionMission.mission.description}</CardDescription>
//                 </CardHeader>
//                 <CardContent>
//                   <ul className="space-y-3">
//                     {visionMission.mission.points?.map((p: any, i: number) => (
//                       <li key={i} className="flex items-center gap-3 text-foreground">
//                         <div className="w-2 h-2 rounded-full bg-purple-500" /> {p.point}
//                       </li>
//                     ))}
//                   </ul>
//                 </CardContent>
//               </Card>
//             </motion.div>
//           </motion.div>
//         </div>
//       </section>

//       {/* Trustees Section */}
//       <section className="py-24">
//         <div className="max-w-7xl mx-auto px-6 lg:px-8">
//           <div ref={trusteesRef} className="grid lg:grid-cols-2 gap-8">
//             <div className="grid sm:grid-cols-2 gap-4">
//               {trustees.map((trustee: any, index: number) => (
//                 <motion.div key={index} initial={{ opacity: 0, y: 20 }} animate={trusteesInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: index * 0.1 }} onClick={() => setActiveTrustee(index)} className={`cursor-pointer transition-all ${activeTrustee === index ? 'scale-105' : 'hover:scale-105'}`}>
//                   <Card className={`border-2 ${activeTrustee === index ? 'border-primary shadow-xl' : 'border-transparent'}`}>
//                     <CardContent className="p-4 text-center">
//                       <div className="w-20 h-20 mx-auto mb-3 rounded-full bg-gradient-to-br from-primary to-accent p-0.5">
//                         <div className="w-full h-full rounded-full bg-white flex items-center justify-center"><Users className="h-8 w-8 text-primary" /></div>
//                       </div>
//                       <h3 className="font-semibold">{trustee.name}</h3>
//                       <p className="text-xs text-muted-foreground">{trustee.title}</p>
//                     </CardContent>
//                   </Card>
//                 </motion.div>
//               ))}
//             </div>

//             {trustees[activeTrustee] && (
//               <motion.div key={activeTrustee} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
//                 <Card className="bg-gradient-to-br from-primary to-accent text-white h-full">
//                   <CardContent className="p-8 flex flex-col h-full">
//                     <Quote className="h-12 w-12 text-white/30 mb-6" />
//                     <p className="text-xl leading-relaxed mb-6">"{trustees[activeTrustee].message}"</p>
//                     <div className="mt-auto">
//                       <h3 className="text-2xl font-bold">{trustees[activeTrustee].name}</h3>
//                       <p className="text-white/80">{trustees[activeTrustee].title}</p>
//                       <div className="flex gap-4 text-sm text-white/60 mt-2">
//                         <span>{trustees[activeTrustee].qualification}</span>
//                         <span>•</span>
//                         <span>{trustees[activeTrustee].experience}</span>
//                       </div>
//                     </div>
//                   </CardContent>
//                 </Card>
//               </motion.div>
//             )}
//           </div>
//         </div>
//       </section>

//       {/* Faculty Section - Integrated similarly... */}
//     </main>
//   )
// }

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

  // Use DB data with your original hardcoded content as fallback
  const hero = data?.hero || { year: '1892', description: 'Discover a legacy of excellence...' }
  const visionMission = data?.visionMission || {
    vision: { title: 'Our Vision', description: '', points: [] },
    mission: { title: 'Our Mission', description: '', points: [] },
  }
  const trustees = data?.trustees || []
  const faculty = data?.faculty || { stats: [], description: '', additional: '' }

  const { ref: heroRef } = useScrollAnimation({ threshold: 0.1, triggerOnce: true })
  const { ref: visionRef, isInView: visionInView } = useScrollAnimation({
    threshold: 0.1,
    triggerOnce: true,
  })
  const { ref: trusteesRef, isInView: trusteesInView } = useScrollAnimation({
    threshold: 0.1,
    triggerOnce: true,
  })
  const { ref: facultyRef, isInView: facultyInView } = useScrollAnimation({
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

      {/* Trustees Section - UPDATED to match new UI style */}
      {trustees?.length > 0 && (
        <section className="py-24 container mx-auto px-4 space-y-12">
          {/* Heading */}
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-2">Our Trustees</h2>
            <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
            <p className="text-muted-foreground mt-4">
              Guiding our institution with wisdom and vision
            </p>
          </div>

          {/* Trustees List */}
          {trustees.map((trustee: any, index: number) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-10 rounded-[3rem] border flex flex-col md:flex-row gap-8 shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Avatar */}
              <div className="relative w-48 h-48 rounded-3xl overflow-hidden shrink-0 shadow-inner">
                {trustee?.photo?.url || typeof trustee?.photo === 'string' ? (
                  <img
                    src={typeof trustee.image === 'string' ? trustee.image : trustee.image.url}
                    alt={trustee.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <p className="text-white text-center">No Photo Available</p>
                )}
              </div>

              {/* Content */}
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

      {/* Faculty Section */}
      <section className="py-24 bg-secondary/30">
        <div ref={facultyRef} className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Faculty</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {faculty.description || 'Meet the brilliant minds behind our academic excellence'}
            </p>
          </div>

          {faculty.stats && faculty.stats.length > 0 && (
            <motion.div
              initial="hidden"
              animate={facultyInView ? 'visible' : 'hidden'}
              variants={staggerChildren}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
            >
              {faculty.stats.map((stat: any, index: number) => (
                <motion.div key={index} variants={fadeInUp}>
                  <Card className="bg-white border-none shadow-md text-center">
                    <CardContent className="p-6">
                      <Award className="h-8 w-8 text-primary mx-auto mb-3" />
                      <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                      <div className="text-sm text-muted-foreground">{stat.label}</div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          )}

          {faculty.additional && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={facultyInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="text-center max-w-3xl mx-auto"
            >
              <p className="text-muted-foreground italic">{faculty.additional}</p>
            </motion.div>
          )}
        </div>
      </section>
    </main>
  )
}
