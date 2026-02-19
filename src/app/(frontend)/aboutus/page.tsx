// 'use client'

// import Link from 'next/link'
// import { motion } from 'framer-motion'
// import { useState } from 'react'
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
//   Eye,
//   Target,
//   Users,
//   Quote,
//   BookOpen,
//   Award,
//   Briefcase,
//   GraduationCap,
//   Sparkles,
//   Globe,
  
// } from 'lucide-react'
// import { useScrollAnimation } from '@/app/(frontend)/hooks/use-scroll-animation'

// // Trustees Data
// const trustees = [
//   {
//     name: 'Dr. Rajesh Sharma',
//     title: 'Chairman, Board of Trustees',
//     message: 'Our vision is to create an institution that not only imparts knowledge but also builds character. We believe in nurturing young minds to become future leaders who will contribute meaningfully to society.',
//     image: '/trustees/trustee1.jpg',
//     qualification: 'Ph.D. in Education, Harvard University',
//     experience: '35+ years in education',
//   },
//   {
//     name: 'Mrs. Sunita Patel',
//     title: 'Managing Trustee',
//     message: 'Education is the most powerful tool for transformation. At Avirat, we are committed to providing quality education that is accessible to all, regardless of their background.',
//     image: '/trustees/trustee2.jpg',
//     qualification: 'M.Ed., Columbia University',
//     experience: '28+ years in educational administration',
//   },
//   {
//     name: 'Mr. Vikram Singh',
//     title: 'Trustee & Industry Advisor',
//     message: 'The bridge between academia and industry is crucial. We ensure our curriculum stays relevant to industry needs, preparing students for successful careers in their chosen fields.',
//     image: '/trustees/trustee3.jpg',
//     qualification: 'MBA, Stanford University',
//     experience: '30+ years in corporate leadership',
//   },
//   {
//     name: 'Prof. Meera Krishnan',
//     title: 'Academic Trustee',
//     message: 'Academic excellence is at the core of everything we do. We continuously strive to enhance our teaching methodologies and research capabilities to meet global standards.',
//     image: '/trustees/trustee4.jpg',
//     qualification: 'Ph.D. in Physics, Oxford University',
//     experience: '32+ years in academia',
//   },
// ]

// // Vision & Mission Data
// const visionMission = {
//   vision: {
//     title: 'Our Vision',
//     description: 'To be a globally recognized center of excellence in education, fostering innovation, research, and holistic development that prepares students to become compassionate leaders and responsible global citizens.',
//     points: [
//       'Global recognition in academic excellence',
//       'Innovation-driven research culture',
//       'Holistic student development',
//       'Sustainable educational practices',
//     ],
//   },
//   mission: {
//     title: 'Our Mission',
//     description: 'To provide transformative education that empowers students with knowledge, skills, and values to excel in their chosen fields and contribute meaningfully to society.',
//     points: [
//       'Quality education accessible to all',
//       'Industry-aligned curriculum',
//       'Research and innovation focus',
//       'Character building and values',
//     ],
//   },
// }

// // Infrastructure & Facilities
// const infrastructure = {
//   title: 'Infrastructure and Facilities',
//   subtitle: 'Advanced Resources for a Brighter Future',
//   description: 'Our campus boasts modern infrastructure and state-of-the-art facilities, including well-equipped computer labs, a comprehensive library, Wi-Fi connectivity, and dedicated spaces for extracurricular activities.',
//   additional: 'We provide a conducive learning environment that fosters innovation and collaboration.',
//   features: [
//     { icon: BookOpen, label: 'Central Library', description: '50,000+ books & digital resources' },
//     { icon: GraduationCap, label: 'Smart Classrooms', description: 'Technology-enabled learning' },
//     { icon: Globe, label: 'High-Speed WiFi', description: 'Campus-wide connectivity' },
//     { icon: Briefcase, label: 'Computer Labs', description: '200+ systems with latest software' },
//     { icon: Award, label: 'Research Centers', description: 'Advanced research facilities' },
//     { icon: Users, label: 'Activity Spaces', description: 'Sports & cultural venues' },
//   ],
// }

// // Faculty & Expertise
// const faculty = {
//   title: 'Faculty and Expertise',
//   subtitle: 'The Source of Insight and Innovation',
//   description: 'Our faculty comprises highly qualified and experienced professionals who are passionate about teaching and mentoring. They bring a wealth of industry knowledge and academic expertise to the classroom.',
//   additional: 'We are committed to providing personalized attention and guidance to each student, ensuring their academic and professional success. Our faculty is involved in ongoing research and industry collaboration.',
//   stats: [
//     { value: '150+', label: 'Faculty Members' },
//     { value: '85%', label: 'Ph.D. Holders' },
//     { value: '25+', label: 'Years Avg. Experience' },
//     { value: '500+', label: 'Research Papers' },
//   ],
//   expertise: [
//     'Industry Veterans',
//     'Research Scholars',
//     'Award Winners',
//     'Global Experience',
//   ],
// }

// export default function AboutPage() {
//   const [activeTrustee, setActiveTrustee] = useState(0)
//   const { ref: heroRef, isInView: heroInView } = useScrollAnimation({ threshold: 0.1, triggerOnce: true })
//   const { ref: visionRef, isInView: visionInView } = useScrollAnimation({ threshold: 0.1, triggerOnce: true })
//   const { ref: trusteesRef, isInView: trusteesInView } = useScrollAnimation({ threshold: 0.1, triggerOnce: true })
//   const { ref: infrastructureRef, isInView: infrastructureInView } = useScrollAnimation({ threshold: 0.1, triggerOnce: true })
//   const { ref: facultyRef, isInView: facultyInView } = useScrollAnimation({ threshold: 0.1, triggerOnce: true })

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
//             ref={heroRef}
//             initial="visible"
//             animate="visible"
//             variants={staggerChildren}
//             className="max-w-3xl"
//           >
//             <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 bg-primary/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-primary/20">
//               <Sparkles className="w-4 h-4 text-primary" />
//               <span className="text-sm font-medium">About Avirat University</span>
//             </motion.div>

//             <motion.h1 variants={fadeInUp} className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
//               Shaping Futures Since{' '}
//               <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
//                 1892
//               </span>
//             </motion.h1>

//             <motion.p variants={fadeInUp} className="text-xl text-muted-foreground leading-relaxed mb-8 max-w-2xl">
//               Discover a legacy of excellence, innovation, and holistic education that has been transforming lives for over 130 years.
//             </motion.p>

            
//           </motion.div>
//         </div>
//       </section>

//       {/* Vision & Mission Section */}
//       <section className="py-24 bg-secondary/30">
//         <div className="max-w-7xl mx-auto px-6 lg:px-8">
//           <motion.div
//             ref={visionRef}
//             initial="hidden"
//             animate={visionInView ? "visible" : "hidden"}
//             variants={staggerChildren}
//             className="grid lg:grid-cols-2 gap-8"
//           >
//             {/* Vision Card */}
//             <motion.div variants={fadeInUp}>
//               <Card className="bg-white border-none shadow-xl hover:shadow-2xl transition-all duration-300 h-full">
//                 <CardHeader>
//                   <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 p-0.5 mb-4">
//                     <div className="w-full h-full rounded-2xl bg-white flex items-center justify-center">
//                       <Eye className="h-8 w-8 text-blue-500" />
//                     </div>
//                   </div>
//                   <CardTitle className="text-3xl font-bold mb-4">{visionMission.vision.title}</CardTitle>
//                   <CardDescription className="text-lg text-muted-foreground leading-relaxed">
//                     {visionMission.vision.description}
//                   </CardDescription>
//                 </CardHeader>
//                 <CardContent>
//                   <ul className="space-y-3">
//                     {visionMission.vision.points.map((point) => (
//                       <li key={point} className="flex items-center gap-3 text-foreground">
//                         <div className="w-2 h-2 rounded-full bg-blue-500" />
//                         {point}
//                       </li>
//                     ))}
//                   </ul>
//                 </CardContent>
//               </Card>
//             </motion.div>

//             {/* Mission Card */}
//             <motion.div variants={fadeInUp}>
//               <Card className="bg-white border-none shadow-xl hover:shadow-2xl transition-all duration-300 h-full">
//                 <CardHeader>
//                   <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 p-0.5 mb-4">
//                     <div className="w-full h-full rounded-2xl bg-white flex items-center justify-center">
//                       <Target className="h-8 w-8 text-purple-500" />
//                     </div>
//                   </div>
//                   <CardTitle className="text-3xl font-bold mb-4">{visionMission.mission.title}</CardTitle>
//                   <CardDescription className="text-lg text-muted-foreground leading-relaxed">
//                     {visionMission.mission.description}
//                   </CardDescription>
//                 </CardHeader>
//                 <CardContent>
//                   <ul className="space-y-3">
//                     {visionMission.mission.points.map((point) => (
//                       <li key={point} className="flex items-center gap-3 text-foreground">
//                         <div className="w-2 h-2 rounded-full bg-purple-500" />
//                         {point}
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
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             viewport={{ once: true }}
//             className="text-center mb-12"
//           >
//             <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">
//               Message from Our{' '}
//               <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
//                 Trustees
//               </span>
//             </h2>
//             <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
//               Guiding our institution with wisdom, vision, and unwavering commitment to excellence.
//             </p>
//           </motion.div>

//           <div ref={trusteesRef} className="grid lg:grid-cols-2 gap-8">
//             {/* Trustees Grid */}
//             <div className="grid sm:grid-cols-2 gap-4">
//               {trustees.map((trustee, index) => (
//                 <motion.div
//                   key={trustee.name}
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={trusteesInView ? { opacity: 1, y: 0 } : {}}
//                   transition={{ delay: index * 0.1 }}
//                   onClick={() => setActiveTrustee(index)}
//                   className={`cursor-pointer transition-all duration-300 ${
//                     activeTrustee === index ? 'scale-105' : 'hover:scale-105'
//                   }`}
//                 >
//                   <Card className={`border-2 ${
//                     activeTrustee === index 
//                       ? 'border-primary shadow-xl' 
//                       : 'border-transparent hover:border-primary/20'
//                   }`}>
//                     <CardContent className="p-4 text-center">
//                       <div className="w-20 h-20 mx-auto mb-3 rounded-full bg-gradient-to-br from-primary to-accent p-0.5">
//                         <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
//                           <Users className="h-8 w-8 text-primary" />
//                         </div>
//                       </div>
//                       <h3 className="font-semibold text-foreground">{trustee.name}</h3>
//                       <p className="text-xs text-muted-foreground mt-1">{trustee.title}</p>
//                     </CardContent>
//                   </Card>
//                 </motion.div>
//               ))}
//             </div>

//             {/* Active Trustee Message */}
//             <motion.div
//               key={activeTrustee}
//               initial={{ opacity: 0, x: 20 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.3 }}
//             >
//               <Card className="bg-gradient-to-br from-primary to-accent text-white h-full">
//                 <CardContent className="p-8 flex flex-col h-full">
//                   <Quote className="h-12 w-12 text-white/30 mb-6" />
//                   <p className="text-xl leading-relaxed mb-6">
//                     "{trustees[activeTrustee].message}"
//                   </p>
//                   <div className="mt-auto">
//                     <h3 className="text-2xl font-bold mb-1">{trustees[activeTrustee].name}</h3>
//                     <p className="text-white/80 mb-2">{trustees[activeTrustee].title}</p>
//                     <div className="flex items-center gap-4 text-sm text-white/60">
//                       <span>{trustees[activeTrustee].qualification}</span>
//                       <span>•</span>
//                       <span>{trustees[activeTrustee].experience}</span>
//                     </div>
//                   </div>
//                 </CardContent>
//               </Card>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       <section ref={facultyRef} className="py-24">
//         <div className="max-w-7xl mx-auto px-6 lg:px-8">
//           <motion.div
//             initial="hidden"
//             animate={facultyInView ? "visible" : "hidden"}
//             variants={staggerChildren}
//             className="text-center mb-12"
//           >
//             <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
//               <Award className="w-4 h-4 text-primary" />
//               <span className="text-sm font-medium">Faculty and Expertise</span>
//             </motion.div>
//             <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">
//               The Source of{' '}
//               <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
//                 Insight and Innovation
//               </span>
//             </motion.h2>
//           </motion.div>

//           <div className="grid lg:grid-cols-2 gap-12 items-center">
//             <motion.div
//               variants={staggerChildren}
//               initial="hidden"
//               animate={facultyInView ? "visible" : "hidden"}
//               className="space-y-6"
//             >
//               <motion.div variants={fadeInUp}>
//                 <Card className="bg-gradient-to-br from-primary to-accent text-white border-none shadow-xl">
//                   <CardContent className="p-8">
//                     <Quote className="h-8 w-8 text-white/30 mb-4" />
//                     <p className="text-lg leading-relaxed mb-4">
//                       {faculty.description}
//                     </p>
//                     <p className="text-lg leading-relaxed">
//                       {faculty.additional}
//                     </p>
//                   </CardContent>
//                 </Card>
//               </motion.div>

              
//             </motion.div>

//             <motion.div
//               variants={staggerChildren}
//               initial="hidden"
//               animate={facultyInView ? "visible" : "hidden"}
//               className="grid grid-cols-2 gap-6"
//             >
//               {faculty.stats.map((stat, index) => (
//                 <motion.div key={stat.label} variants={fadeInUp}>
//                   <Card className="bg-white border-none shadow-lg text-center hover:shadow-xl transition-all duration-300">
//                     <CardContent className="p-6">
//                       <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
//                       <div className="text-sm text-muted-foreground">{stat.label}</div>
//                     </CardContent>
//                   </Card>
//                 </motion.div>
//               ))}
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* Infrastructure Section */}
//       <section ref={infrastructureRef} className="py-24 bg-secondary/30">
//         <div className="max-w-7xl mx-auto px-6 lg:px-8">
//           <motion.div
//             initial="hidden"
//             animate={infrastructureInView ? "visible" : "hidden"}
//             variants={staggerChildren}
//             className="text-center mb-12"
//           >
//             <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
//               <BookOpen className="w-4 h-4 text-primary" />
//               <span className="text-sm font-medium">Infrastructure and Facilities</span>
//             </motion.div>
//             <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">
//               Advanced Resources for a{' '}
//               <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
//                 Brighter Future
//               </span>
//             </motion.h2>
//           </motion.div>

//           <motion.div
//             variants={staggerChildren}
//             initial="hidden"
//             animate={infrastructureInView ? "visible" : "hidden"}
//             className="grid lg:grid-cols-2 gap-12 items-center mb-12"
//           >
//             <motion.div variants={fadeInUp} className="space-y-6">
//               <Card className="bg-white border-none shadow-lg">
//                 <CardContent className="p-8">
//                   <div className="relative">
//                     <Quote className="h-8 w-8 text-primary/20 absolute -top-2 -left-2" />
//                     <p className="text-lg text-foreground leading-relaxed mb-4 relative z-10">
//                       {infrastructure.description}
//                     </p>
//                     <p className="text-lg text-foreground leading-relaxed">
//                       {infrastructure.additional}
//                     </p>
//                     <Quote className="h-8 w-8 text-primary/20 absolute -bottom-2 -right-2 rotate-180" />
//                   </div>
//                 </CardContent>
//               </Card>
//             </motion.div>

//             <motion.div variants={fadeInUp} className="grid grid-cols-2 gap-4">
//               {infrastructure.features.map((feature, index) => (
//                 <Card key={feature.label} className="bg-white border-none shadow-md hover:shadow-lg transition-all duration-300">
//                   <CardContent className="p-4 text-center">
//                     <feature.icon className="h-6 w-6 mx-auto mb-2 text-primary" />
//                     <div className="font-medium text-sm text-foreground">{feature.label}</div>
//                     <div className="text-xs text-muted-foreground mt-1">{feature.description}</div>
//                   </CardContent>
//                 </Card>
//               ))}
//             </motion.div>
//           </motion.div>
//         </div>
//       </section>

//     </main>
//   )
// }

import { getPayloadHMR } from '@payloadcms/next/utilities'
import configPromise from '@/payload.config'
import AboutClient from './AboutClient'

export default async function Page() {
  const payload = await getPayloadHMR({ config: configPromise })
  
  const data = await payload.findGlobal({
    slug: 'about',
  })

  return <AboutClient data={data} />
}