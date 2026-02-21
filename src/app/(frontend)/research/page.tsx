// 'use client'

// import Image from 'next/image'
// import Link from 'next/link'
// import { motion, AnimatePresence } from 'framer-motion'
// import { Button } from '@/app/(frontend)/components/ui/button'
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from '@/app/(frontend)/components/ui/card'
// import {
//   ArrowRight,
//   Award,
//   BookOpen,
//   Cpu,
//   FlaskConical,
//   Globe2,
//   Heart,
//   Leaf,
//   Lightbulb,
//   Microscope,
//   Rocket,
//   Zap,
//   Users,
//   TrendingUp,
//   DollarSign,
//   FileText,
// } from 'lucide-react'
// import { useScrollAnimation } from '@/app/(frontend)/hooks/use-scroll-animation'

// // Research Areas - Keeping only essential data
// const researchAreas = [
//   {
//     id: 'ai',
//     title: 'Artificial Intelligence',
//     description: 'Pioneering research in machine learning, computer vision, and ethical AI development.',
//     icon: Cpu,
//     color: 'from-blue-500 to-cyan-500',
//   },
//   {
//     id: 'health',
//     title: 'Health & Medicine',
//     description: 'Advancing human health through biomedical research and precision medicine.',
//     icon: Heart,
//     color: 'from-red-500 to-rose-500',
//   },
//   {
//     id: 'sustainability',
//     title: 'Climate & Sustainability',
//     description: 'Developing solutions for climate change and renewable energy.',
//     icon: Leaf,
//     color: 'from-green-500 to-emerald-500',
//   },
//   {
//     id: 'space',
//     title: 'Space & Astronomy',
//     description: 'Exploring the universe through astrophysics and space exploration.',
//     icon: Rocket,
//     color: 'from-purple-500 to-indigo-500',
//   },
//   {
//     id: 'quantum',
//     title: 'Quantum Science',
//     description: 'Breakthrough research in quantum computing and quantum materials.',
//     icon: Zap,
//     color: 'from-amber-500 to-orange-500',
//   },
//   {
//     id: 'social',
//     title: 'Social Sciences',
//     description: 'Understanding human behavior, economics, and society through research.',
//     icon: Globe2,
//     color: 'from-teal-500 to-cyan-500',
//   },
// ]

// // Featured Faculty - Simplified
// const faculty = [
//   {
//     name: 'Dr. Sarah Chen',
//     title: 'Professor of Computer Science',
//     specialty: 'Artificial Intelligence & Machine Learning',
//     image: '/faculty/sarah-chen.jpg',
//   },
//   {
//     name: 'Dr. Michael Roberts',
//     title: 'Professor of Biomedical Engineering',
//     specialty: 'Neural Interfaces & Prosthetics',
//     image: '/faculty/michael-roberts.jpg',
//   },
//   {
//     name: 'Dr. Elena Vasquez',
//     title: 'Professor of Environmental Science',
//     specialty: 'Climate Change & Sustainability',
//     image: '/faculty/elena-vasquez.jpg',
//   },
// ]

// // Stats - Simplified
// const stats = [
//   { value: '850', label: 'Total students in research', icon: Users },
//   { value: '40+', label: 'Research Centers', icon: TrendingUp },
//   { value: '2,500+', label: 'Publications per Year', icon: FileText },
//   { value: '180+', label: 'Patents Filed', icon: Award },
// ]

// // Recent Publications - Simplified
// const publications = [
//   {
//     title: 'Breakthrough in Quantum Error Correction',
//     journal: 'Nature Physics',
//     date: 'Jan 2026',
//   },
//   {
//     title: 'Novel CRISPR Technique for Genetic Disorders',
//     journal: 'Cell',
//     date: 'Jan 2026',
//   },
//   {
//     title: 'AI Model Predicts Climate Patterns',
//     journal: 'Science',
//     date: 'Dec 2025',
//   },
//   {
//     title: 'New Material Doubles Solar Cell Efficiency',
//     journal: 'Nature Energy',
//     date: 'Dec 2025',
//   },
// ]

// export default function ResearchPage() {
//   const { ref: headerRef, isInView: headerInView } = useScrollAnimation({ threshold: 0.1, triggerOnce: true })
//   const { ref: areasRef, isInView: areasInView } = useScrollAnimation({ threshold: 0.1, triggerOnce: true })
//   const { ref: facultyRef, isInView: facultyInView } = useScrollAnimation({ threshold: 0.1, triggerOnce: true })
//   const { ref: statsRef, isInView: statsInView } = useScrollAnimation({ threshold: 0.1, triggerOnce: true })
//   const { ref: pubsRef, isInView: pubsInView } = useScrollAnimation({ threshold: 0.1, triggerOnce: true })

//   const fadeInUp = {
//     hidden: { opacity: 0, y: 30 },
//     visible: { opacity: 1, y: 0 }
//   }

//   const staggerChildren = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1
//       }
//     }
//   }

//   return (
//     <main className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
//       {/* Hero Section */}
//       <section className="relative pt-32 pb-20 overflow-hidden">
//         {/* Animated Background */}
//         <div className="absolute inset-0">
//           <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-transparent" />
//           <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse" />
//           <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
//           <div className="absolute inset-0" style={{
//             backgroundImage: 'radial-gradient(circle at 2px 2px, hsl(var(--primary)/0.1) 1px, transparent 0)',
//             backgroundSize: '40px 40px',
//           }} />
//         </div>

//         <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
//           <motion.div
//             ref={headerRef}
//             initial="visible"
//             animate="visible"
//             variants={staggerChildren}
//             className="max-w-3xl"
//           >
//             <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 bg-primary/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-primary/20">
//               <Microscope className="w-4 h-4 text-primary" />
//               <span className="text-sm font-medium">Research & Innovation</span>
//             </motion.div>

//             <motion.h1 variants={fadeInUp} className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
//               Pushing the{' '}
//               <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
//                 Boundaries
//               </span>
//             </motion.h1>

//             <motion.p variants={fadeInUp} className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
//               Our faculty includes Nobel laureates, National Academy members, and MacArthur Fellows
//               who are leaders in their fields.
//             </motion.p>
//           </motion.div>
//         </div>
//       </section>

//       {/* Stats Bar */}
//       <section ref={statsRef} className="py-12">
//         <div className="max-w-7xl mx-auto px-6 lg:px-8">
//           <motion.div
//             initial="hidden"
//             animate={statsInView ? "visible" : "hidden"}
//             variants={staggerChildren}
//             className="grid grid-cols-2 md:grid-cols-4 gap-6"
//           >
//             {stats.map((stat) => (
//               <motion.div key={stat.label} variants={fadeInUp}>
//                 <Card className="bg-white border-none shadow-md hover:shadow-lg transition-all duration-300">
//                   <CardContent className="p-6 text-center">
//                     <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
//                       <stat.icon className="h-6 w-6 text-primary" />
//                     </div>
//                     <div className="text-2xl md:text-3xl font-bold text-foreground">{stat.value}</div>
//                     <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
//                   </CardContent>
//                 </Card>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>
//       </section>

//       {/* Research Areas */}
//       <section ref={areasRef} className="py-24 bg-secondary/30">
//         <div className="max-w-7xl mx-auto px-6 lg:px-8">
//           <motion.div
//             initial="hidden"
//             animate={areasInView ? "visible" : "hidden"}
//             variants={staggerChildren}
//             className="text-center mb-12"
//           >
//             <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">
//               Research Areas
//             </motion.h2>
//             <motion.p variants={fadeInUp} className="text-lg text-muted-foreground max-w-2xl mx-auto">
//               Explore our diverse research portfolio spanning six major areas of inquiry.
//             </motion.p>
//           </motion.div>

//           <motion.div
//             initial="hidden"
//             animate={areasInView ? "visible" : "hidden"}
//             variants={staggerChildren}
//             className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
//           >
//             {researchAreas.map((area) => (
//               <motion.div key={area.id} variants={fadeInUp}>
//                 <Card className="group bg-white border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden">
//                   <div className={`h-2 bg-gradient-to-r ${area.color}`} />
//                   <CardHeader>
//                     <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${area.color} p-0.5 mb-4`}>
//                       <div className="w-full h-full rounded-xl bg-white flex items-center justify-center">
//                         <area.icon className="h-7 w-7 text-foreground" />
//                       </div>
//                     </div>
//                     <CardTitle className="text-xl group-hover:text-primary transition-colors">
//                       {area.title}
//                     </CardTitle>
//                     <CardDescription className="leading-relaxed">{area.description}</CardDescription>
//                   </CardHeader>
//                   <CardContent>
//                     <Button variant="link" className="px-0 text-primary group/link">
//                       Learn more
//                       <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/link:translate-x-1" />
//                     </Button>
//                   </CardContent>
//                 </Card>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>
//       </section>

//       {/* Featured Faculty */}
//       <section ref={facultyRef} className="py-24">
//         <div className="max-w-7xl mx-auto px-6 lg:px-8">
//           <motion.div
//             initial="hidden"
//             animate={facultyInView ? "visible" : "hidden"}
//             variants={staggerChildren}
//             className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12"
//           >
//             <div>
//               <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">
//                 Featured Faculty
//               </motion.h2>
//               <motion.p variants={fadeInUp} className="text-lg text-muted-foreground max-w-2xl">
//                 Meet some of the brilliant minds leading research at Avirat.
//               </motion.p>
//             </div>
            
//           </motion.div>

//           <motion.div
//             initial="hidden"
//             animate={facultyInView ? "visible" : "hidden"}
//             variants={staggerChildren}
//             className="grid md:grid-cols-3 gap-8"
//           >
//             {faculty.map((member) => (
//               <motion.div key={member.name} variants={fadeInUp}>
//                 <Card className="group bg-white border-none shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
//                   <div className="relative aspect-[4/5] overflow-hidden">
//                     <Image
//                       src={member.image || '/placeholder.svg'}
//                       alt={member.name}
//                       fill
//                       className="object-cover transition-transform duration-700 group-hover:scale-110"
//                     />
//                     <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//                   </div>
//                   <CardContent className="p-6">
//                     <h3 className="text-xl font-semibold text-foreground mb-1">{member.name}</h3>
//                     <p className="text-sm text-muted-foreground">{member.title}</p>
//                     <p className="text-sm text-primary mt-2">{member.specialty}</p>
//                   </CardContent>
//                 </Card>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>
//       </section>

//       {/* Recent Publications */}
//       <section ref={pubsRef} className="py-24 bg-secondary/30">
//         <div className="max-w-7xl mx-auto px-6 lg:px-8">
//           <motion.div
//             initial="hidden"
//             animate={pubsInView ? "visible" : "hidden"}
//             variants={staggerChildren}
//             className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12"
//           >
//             <div>
//               <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">
//                 Recent Publications
//               </motion.h2>
//               <motion.p variants={fadeInUp} className="text-lg text-muted-foreground max-w-2xl">
//                 Browse our latest research contributions to leading academic journals.
//               </motion.p>
//             </div>
            
//           </motion.div>

//           <motion.div
//             initial="hidden"
//             animate={pubsInView ? "visible" : "hidden"}
//             variants={staggerChildren}
//             className="space-y-4"
//           >
//             {publications.map((pub, index) => (
//               <motion.div key={index} variants={fadeInUp}>
//                 <Card className="bg-white border-none shadow-md hover:shadow-lg transition-all duration-300">
//                   <CardContent className="p-6">
//                     <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
//                       <div className="flex-1">
//                         <h3 className="text-lg font-semibold text-foreground hover:text-primary transition-colors mb-2">
//                           {pub.title}
//                         </h3>
//                         <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted-foreground">
//                           <span className="flex items-center gap-1">
//                             <BookOpen className="h-4 w-4" />
//                             {pub.journal}
//                           </span>
//                           <span>•</span>
//                           <span>{pub.date}</span>
//                         </div>
//                       </div>
//                       <Button size="sm" className="shrink-0 bg-primary hover:bg-primary/90">
//                         Read Paper
//                       </Button>
//                     </div>
//                   </CardContent>
//                 </Card>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>
//       </section>

//       {/* CTA */}
      
//     </main>
//   )
// }

import { getPayloadHMR } from '@payloadcms/next/utilities'
import configPromise from '@/payload.config'
import ResearchClient from './ResearchClient'

export default async function ResearchPage() {
  const payload = await getPayloadHMR({ config: configPromise })
  
  const [areas, faculty, pubs] = await Promise.all([
    payload.find({ collection: 'research-areas', limit: 10 }),
    payload.find({ collection: 'faculty', limit: 3 }),
    payload.find({ collection: 'publications', limit: 5, sort: '-createdAt' }),
  ])

  return (
    <ResearchClient 
      areas={areas.docs} 
      faculty={faculty.docs} 
      publications={pubs.docs} 
    />
  )
}