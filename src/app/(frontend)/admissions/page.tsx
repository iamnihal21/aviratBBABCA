// 'use client'

// import Link from 'next/link'
// import { useState, useEffect } from 'react'
// import { motion, AnimatePresence } from 'framer-motion'
// import { Button } from '@/app/(frontend)/components/ui/button'
// import {
//   Card,
//   CardContent,
// } from '@/app/(frontend)/components/ui/card'
// import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/app/(frontend)/components/ui/tabs'
// import {
//   ArrowRight,
//   Calendar,
//   CheckCircle2,
//   FileText,
//   GraduationCap,
//   HelpCircle,
//   MapPin,
//   Users,
//   Trophy,
//   Clock,
//   ChevronRight,
//   Sparkles,
// } from 'lucide-react'
// import { useScrollAnimation } from '@/app/(frontend)/hooks/use-scroll-animation'

// // Timeline Data
// const timeline = [
//   {
//     step: '01',
//     title: 'Research Programs',
//     description:
//       'Explore our academic programs and find the right fit for your goals and interests.',
//     icon: FileText,
//     color: 'from-blue-500 to-cyan-500',
//   },
//   {
//     step: '02',
//     title: 'Submit Application',
//     description:
//       'Complete your online application with transcripts, essays, and recommendation letters.',
//     icon: CheckCircle2,
//     color: 'from-green-500 to-emerald-500',
//   },
//   {
//     step: '03',
//     title: 'Interview',
//     description:
//       'Selected candidates may be invited for an interview with faculty and admissions staff.',
//     icon: Users,
//     color: 'from-purple-500 to-pink-500',
//   },
//   {
//     step: '04',
//     title: 'Receive Decision',
//     description:
//       'Admission decisions are released within 8-12 weeks of completing your application.',
//     icon: GraduationCap,
//     color: 'from-orange-500 to-red-500',
//   },
// ]

// // Detailed Timeline
// const detailedTimeline = [
//   {
//     step: '01',
//     title: 'Create Your Account',
//     description:
//       "Start by creating an account on our application portal. You'll be able to save your progress and return at any time.",
//     icon: FileText,
//   },
//   {
//     step: '02',
//     title: 'Submit Your Application',
//     description:
//       'Complete and submit your application, including essays, transcripts, and test scores.',
//     icon: CheckCircle2,
//   },
//   {
//     step: '03',
//     title: 'Send Supporting Documents',
//     description:
//       'Request letters of recommendation and submit any additional materials required for your program.',
//     icon: Users,
//   },
//   {
//     step: '04',
//     title: 'Interview (if applicable)',
//     description: "Some programs require an interview. We'll contact you to schedule if needed.",
//     icon: Calendar,
//   },
//   {
//     step: '05',
//     title: 'Receive Your Decision',
//     description:
//       'Admissions decisions are released on the dates listed below. Check your portal for updates.',
//     icon: GraduationCap,
//   },
// ]

// // Deadlines Data
// const deadlines = {
//   undergraduate: [
//     { type: 'Early Decision I', deadline: 'November 1, 2025', notification: 'December 15, 2025' },
//     { type: 'Early Decision II', deadline: 'January 1, 2026', notification: 'February 15, 2026' },
//     { type: 'Regular Decision', deadline: 'January 15, 2026', notification: 'April 1, 2026' },
//     { type: 'Transfer Students', deadline: 'March 15, 2026', notification: 'May 15, 2026' },
//   ],
//   graduate: [
//     { type: 'Fall Admission', deadline: 'December 15, 2025', notification: 'March 1, 2026' },
//     { type: 'Spring Admission', deadline: 'September 15, 2025', notification: 'November 1, 2025' },
//     {
//       type: 'Rolling Admission',
//       deadline: 'Varies by program',
//       notification: '4-6 weeks after submission',
//     },
//   ],
// }

// // FAQs Data
// const faqs = [
//   {
//     question: 'What are the minimum requirements for admission?',
//     answer:
//       "We practice holistic admissions and don't have strict cutoffs. However, competitive applicants typically have a GPA of 3.7+ and SAT scores of 1400+.",
//   },
//   {
//     question: 'Is the SAT/ACT required?',
//     answer:
//       'We have adopted a test-optional policy. Submitting test scores is optional, and applications will be evaluated holistically.',
//   },
//   {
//     question: 'Can I apply to multiple programs?',
//     answer:
//       'Undergraduate applicants apply to the university, not specific programs. Graduate applicants should apply directly to their program of interest.',
//   },
//   {
//     question: 'What is the application fee?',
//     answer:
//       'The application fee is $75 for undergraduate and $85 for graduate programs. Fee waivers are available for eligible students.',
//   },
// ]

// const highlights = [
//   { icon: GraduationCap, value: "12%", label: "Acceptance Rate" },
//   { icon: Users, value: "15,000+", label: "Students" },
//   { icon: Trophy, value: "#12", label: "Global Ranking" },
//   { icon: Clock, value: "8-12 weeks", label: "Decision Time" },
// ]

// const quickDeadlines = [
//   { type: 'Early Decision', date: 'November 1, 2025' },
//   { type: 'Regular Decision', date: 'January 15, 2026' },
//   { type: 'Transfer Students', date: 'March 1, 2026' },
//   { type: 'Graduate Programs', date: 'Rolling Admissions' },
// ]

// export default function AdmissionsPage() {
//   const [activeTab, setActiveTab] = useState('process')
//   const [mounted, setMounted] = useState(false)
//   const { ref: heroRef, isInView: heroInView } = useScrollAnimation({ threshold: 0.1, triggerOnce: true })
//   const { ref: statsRef, isInView: statsInView } = useScrollAnimation({ threshold: 0.1, triggerOnce: true })
//   const { ref: processRef, isInView: processInView } = useScrollAnimation({ threshold: 0.1, triggerOnce: true })

//   useEffect(() => {
//     setMounted(true)
//   }, [])

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

//   if (!mounted) {
//     return null // or a loading skeleton
//   }

//   return (
//     <main className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
//       {/* Hero Section with Animated Background */}
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
//             animate={heroInView ? "visible" : "visible"}
//             variants={staggerChildren}
//             className="max-w-3xl"
//           >
//             <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 bg-primary/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-primary/20">
//               <Sparkles className="w-4 h-4 text-primary" />
//               <span className="text-sm font-medium">Begin Your Journey at Avirat</span>
//             </motion.div>

//             <motion.h1 variants={fadeInUp} className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
//               Your Path to{' '}
//               <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
//                 Excellence
//               </span>
//             </motion.h1>

//             <motion.p variants={fadeInUp} className="text-xl text-muted-foreground leading-relaxed mb-8 max-w-2xl">
//               We seek students who demonstrate intellectual curiosity, leadership potential, and a
//               commitment to making a positive impact on the world.
//             </motion.p>

//           </motion.div>

//           {/* Stats Cards */}
//         </div>
//       </section>

//       {/* Quick Highlights */}
//       <section className="py-16 bg-secondary/30">
//         <div className="max-w-7xl mx-auto px-6 lg:px-8">
//           <motion.div
//             ref={statsRef}
//             initial="visible  "
//             animate={statsInView ? "visible" : "visible"}
//             variants={staggerChildren}
//             className="grid grid-cols-2 md:grid-cols-4 gap-6"
//           >
//             {highlights.map((item) => (
//               <motion.div key={item.label} variants={fadeInUp}>
//                 <Card className="bg-white border-none shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
//                   <CardContent className="p-6 text-center">
//                     <item.icon className="h-8 w-8 mx-auto mb-3 text-primary" />
//                     <div className="text-2xl font-bold text-foreground mb-1">{item.value}</div>
//                     <div className="text-sm text-muted-foreground">{item.label}</div>
//                   </CardContent>
//                 </Card>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>
//       </section>

//       {/* Main Content Tabs */}
//       <section className="py-24">
//         <div className="max-w-7xl mx-auto px-6 lg:px-8">
//           <Tabs defaultValue="process" className="w-full" onValueChange={setActiveTab}>
//             <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-3 mb-12">
//               <TabsTrigger value="process">Process</TabsTrigger>
//               <TabsTrigger value="deadlines">Deadlines</TabsTrigger>
//               <TabsTrigger value="faq">FAQ</TabsTrigger>
//             </TabsList>

//             <AnimatePresence mode="wait">
//               {/* Process Tab */}
//               {activeTab === "process" && (
//                 <motion.div
//                   key="process"
//                   initial={{ opacity: 0, x: 20 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   exit={{ opacity: 0, x: -20 }}
//                   transition={{ duration: 0.3 }}
//                 >
//                   <div className="grid lg:grid-cols-2 gap-16">
//                     {/* Simplified Timeline */}
//                     <div>
//                       <h2 className="text-3xl font-bold mb-8">How to Apply</h2>
//                       <div className="space-y-8">
//                         {timeline.map((item, index) => (
//                           <motion.div
//                             key={item.step}
//                             initial={{ opacity: 0, x: -30 }}
//                             animate={{ opacity: 1, x: 0 }}
//                             transition={{ delay: index * 0.1 }}
//                             className="flex gap-6 group"
//                           >
//                             <div className="relative">
//                               <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} p-0.5`}>
//                                 <div className="w-full h-full rounded-2xl bg-white flex items-center justify-center">
//                                   <item.icon className="h-6 w-6 text-gray-900" />
//                                 </div>
//                               </div>
//                               {index < timeline.length - 1 && (
//                                 <div className="absolute top-14 left-7 w-0.5 h-16 bg-gradient-to-b from-gray-300 to-transparent" />
//                               )}
//                             </div>
//                             <div className="flex-1 pb-8">
//                               <span className="text-sm font-semibold text-primary mb-1 block">Step {item.step}</span>
//                               <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
//                               <p className="text-muted-foreground">{item.description}</p>
//                             </div>
//                           </motion.div>
//                         ))}
//                       </div>
//                     </div>

//                     {/* Detailed Timeline - Always visible with direct animation */}
//                     <div ref={processRef}>
//                       <h2 className="text-3xl font-bold mb-8">Detailed Steps</h2>
//                       <div className="space-y-4">
//                         {detailedTimeline.map((item, index) => (
//                           <motion.div
//                             key={item.step}
//                             initial={{ opacity: 0, x: 30 }}
//                             animate={{ opacity: 1, x: 0 }}
//                             transition={{ delay: index * 0.1 + 0.3 }}
//                           >
//                             <Card className="hover:shadow-lg transition-all duration-300 hover:border-primary/20">
//                               <CardContent className="p-6">
//                                 <div className="flex items-start gap-4">
//                                   <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
//                                     <item.icon className="h-6 w-6 text-primary" />
//                                   </div>
//                                   <div>
//                                     <div className="flex items-center gap-2 mb-1">
//                                       <span className="text-sm font-semibold text-primary">Step {item.step}</span>
//                                       <ChevronRight className="h-4 w-4 text-muted-foreground" />
//                                       <span className="text-sm font-medium">{item.title}</span>
//                                     </div>
//                                     <p className="text-muted-foreground text-sm">{item.description}</p>
//                                   </div>
//                                 </div>
//                               </CardContent>
//                             </Card>
//                           </motion.div>
//                         ))}
//                       </div>
//                     </div>
//                   </div>
//                 </motion.div>
//               )}

//               {/* Deadlines Tab */}
//               {activeTab === "deadlines" && (
//                 <motion.div
//                   key="deadlines"
//                   initial={{ opacity: 0, x: 20 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   exit={{ opacity: 0, x: -20 }}
//                   transition={{ duration: 0.3 }}
//                 >
//                   <div className="grid lg:grid-cols-2 gap-8">
//                     <div>
//                       <h2 className="text-3xl font-bold mb-6">Undergraduate Deadlines</h2>
//                       <div className="space-y-4">
//                         {deadlines.undergraduate.map((item, index) => (
//                           <motion.div
//                             key={item.type}
//                             initial={{ opacity: 0, y: 20 }}
//                             animate={{ opacity: 1, y: 0 }}
//                             transition={{ delay: index * 0.1 }}
//                           >
//                             <Card className="hover:shadow-lg transition-all duration-300">
//                               <CardContent className="p-6">
//                                 <h3 className="text-lg font-semibold mb-4">{item.type}</h3>
//                                 <div className="space-y-2">
//                                   <div className="flex items-center gap-2 text-sm">
//                                     <Calendar className="h-4 w-4 text-primary" />
//                                     <span className="text-muted-foreground">Deadline:</span>
//                                     <span className="font-medium">{item.deadline}</span>
//                                   </div>
//                                   <div className="flex items-center gap-2 text-sm">
//                                     <CheckCircle2 className="h-4 w-4 text-primary" />
//                                     <span className="text-muted-foreground">Notification:</span>
//                                     <span className="font-medium">{item.notification}</span>
//                                   </div>
//                                 </div>
//                               </CardContent>
//                             </Card>
//                           </motion.div>
//                         ))}
//                       </div>
//                     </div>

//                     <div>
//                       <h2 className="text-3xl font-bold mb-6">Graduate Deadlines</h2>
//                       <div className="space-y-4">
//                         {deadlines.graduate.map((item, index) => (
//                           <motion.div
//                             key={item.type}
//                             initial={{ opacity: 0, y: 20 }}
//                             animate={{ opacity: 1, y: 0 }}
//                             transition={{ delay: index * 0.1 + 0.4 }}
//                           >
//                             <Card className="hover:shadow-lg transition-all duration-300">
//                               <CardContent className="p-6">
//                                 <h3 className="text-lg font-semibold mb-4">{item.type}</h3>
//                                 <div className="space-y-2">
//                                   <div className="flex items-center gap-2 text-sm">
//                                     <Calendar className="h-4 w-4 text-primary" />
//                                     <span className="text-muted-foreground">Deadline:</span>
//                                     <span className="font-medium">{item.deadline}</span>
//                                   </div>
//                                   <div className="flex items-center gap-2 text-sm">
//                                     <CheckCircle2 className="h-4 w-4 text-primary" />
//                                     <span className="text-muted-foreground">Notification:</span>
//                                     <span className="font-medium">{item.notification}</span>
//                                   </div>
//                                 </div>
//                               </CardContent>
//                             </Card>
//                           </motion.div>
//                         ))}
//                       </div>
//                     </div>
//                   </div>

//                   {/* Quick Deadlines Card */}
//                   <motion.div
//                     initial={{ opacity: 0, scale: 0.95 }}
//                     animate={{ opacity: 1, scale: 1 }}
//                     transition={{ delay: 0.8 }}
//                     className="mt-12"
//                   >
//                     <Card className="bg-gradient-to-r from-primary to-accent text-white">
//                       <CardContent className="p-8">
//                         <h3 className="text-2xl font-bold mb-6">Quick Reference</h3>
//                         <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
//                           {quickDeadlines.map((deadline) => (
//                             <div key={deadline.type} className="text-center p-4 bg-white/10 rounded-lg backdrop-blur-sm">
//                               <div className="text-sm font-medium mb-2">{deadline.type}</div>
//                               <div className="text-lg font-bold">{deadline.date}</div>
//                             </div>
//                           ))}
//                         </div>
//                       </CardContent>
//                     </Card>
//                   </motion.div>
//                 </motion.div>
//               )}

//               {/* FAQ Tab */}
//               {activeTab === "faq" && (
//                 <motion.div
//                   key="faq"
//                   initial={{ opacity: 0, x: 20 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   exit={{ opacity: 0, x: -20 }}
//                   transition={{ duration: 0.3 }}
//                   className="max-w-3xl mx-auto"
//                 >
//                   <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
//                   <div className="space-y-4">
//                     {faqs.map((faq, index) => (
//                       <motion.div
//                         key={index}
//                         initial={{ opacity: 0, y: 20 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ delay: index * 0.1 }}
//                       >
//                         <Card className="hover:shadow-lg transition-all duration-300">
//                           <CardContent className="p-6">
//                             <h3 className="text-lg font-semibold mb-2 flex items-start gap-3">
//                               <HelpCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
//                               {faq.question}
//                             </h3>
//                             <p className="text-muted-foreground leading-relaxed pl-8">{faq.answer}</p>
//                           </CardContent>
//                         </Card>
//                       </motion.div>
//                     ))}
//                   </div>

//                   <motion.div
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     transition={{ delay: 0.6 }}
//                     className="text-center mt-12"
//                   >
//                     <Button variant="outline" size="lg" className="border-2">
//                       <Link href="/contact" className="flex items-center">
//                         Have More Questions? Contact Us
//                         <ArrowRight className="ml-2 h-4 w-4" />
//                       </Link>
//                     </Button>
//                   </motion.div>
//                 </motion.div>
//               )}
//             </AnimatePresence>
//           </Tabs>
//         </div>
//       </section>

//       {/* Visit Campus CTA */}
//       <section className="py-24 bg-gradient-to-r from-primary to-accent text-white">
//         <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             viewport={{ once: true }}
//           >
//             <MapPin className="h-12 w-12 mx-auto mb-6" />
//             <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Visit Our Campus</h2>
//             <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
//               Experience Avirat firsthand. Schedule a campus tour or attend an information session to see what makes our community special.
//             </p>
//             <div className="flex flex-col sm:flex-row gap-4 justify-center">
//               <Button size="lg" variant="secondary" className="group">
//                 Virtual Tour
//                 <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
//               </Button>
//               <Button
//                 size="lg"
//                 variant="outline"
//                 className="border-white/30 text-white hover:bg-white/10 hover:border-white/40 bg-transparent"
//               >
//                 Schedule a Visit
//               </Button>
//             </div>
//           </motion.div>
//         </div>
//       </section>
//     </main>
//   )
// }

import { getPayloadHMR } from '@payloadcms/next/utilities'
import configPromise from '@/payload.config'
import AdmissionsClient from './AdmissionsClient'

export default async function AdmissionsPage() {
  const payload = await getPayloadHMR({ config: configPromise })
  const data = await payload.findGlobal({ slug: 'admissions' })

  return <AdmissionsClient data={data} />
}