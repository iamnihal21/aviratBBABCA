// 'use client'

// import { useState } from 'react'
// import Image from 'next/image'
// import { motion, AnimatePresence } from 'framer-motion'
// import { Button } from '@/app/(frontend)/components/ui/button'
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from '@/app/(frontend)/components/ui/card'
// import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/app/(frontend)/components/ui/tabs'
// import {
//   Trophy,
//   Award,
//   Medal,
//   Star,
//   TrendingUp,
//   Users,
//   BookOpen,
//   Microscope,
//   Palette,
//   Music,
//   Laptop,
//   Target,
//   Sparkles,
//   Calendar,
//   MapPin,
//   ChevronRight,
// } from 'lucide-react'
// import { useScrollAnimation } from '@/app/(frontend)/hooks/use-scroll-animation'

// // College Achievements
// const collegeAchievements = [
//   {
//     id: 1,
//     title: 'NAAC A++ Grade',
//     description: 'Received the highest accreditation grade from NAAC with a CGPA of 3.76',
//     category: 'Accreditation',
//     date: 'January 2026',
//     icon: Award,
//     color: 'from-purple-500 to-pink-500',
//     image: '/achievements/naac.jpg',
//   },
//   {
//     id: 2,
//     title: 'Top 10 Engineering College',
//     description: 'Ranked among top 10 engineering colleges in India by NIRF Rankings 2025',
//     category: 'Ranking',
//     date: 'December 2025',
//     icon: TrendingUp,
//     color: 'from-blue-500 to-cyan-500',
//     image: '/achievements/ranking.jpg',
//   },
//   {
//     id: 3,
//     title: 'Best Innovation Award',
//     description: 'Received "Best Innovation in Education" award at the National Education Summit',
//     category: 'Award',
//     date: 'November 2025',
//     icon: Trophy,
//     color: 'from-yellow-500 to-orange-500',
//     image: '/achievements/innovation.jpg',
//   },
//   {
//     id: 4,
//     title: 'Green Campus Award',
//     description: 'Recognized as the most sustainable campus in the region',
//     category: 'Sustainability',
//     date: 'October 2025',
//     icon: Target,
//     color: 'from-green-500 to-emerald-500',
//     image: '/achievements/green-campus.jpg',
//   },
//   {
//     id: 5,
//     title: 'Research Excellence',
//     description: 'Awarded "Institution with Highest Research Output" by DST',
//     category: 'Research',
//     date: 'September 2025',
//     icon: Microscope,
//     color: 'from-red-500 to-rose-500',
//     image: '/achievements/research.jpg',
//   },
// ]

// // Student Co-Curricular Achievements
// const studentAchievements = [
//   {
//     id: 1,
//     title: 'National Hackathon Winners',
//     description: 'Team "CodeBreakers" won first prize at Smart India Hackathon 2025',
//     studentName: 'Rahul Sharma, Priya Patel, Amit Kumar',
//     category: 'Technical',
//     date: 'December 2025',
//     icon: Laptop,
//     color: 'from-blue-500 to-indigo-500',
//     image: '/achievements/hackathon.jpg',
//     prize: '₹2,00,000',
//   },
//   {
//     id: 2,
//     title: 'International Sports Medal',
//     description: 'Gold medal in Swimming at the Asian University Games',
//     studentName: 'Meera Singh',
//     category: 'Sports',
//     date: 'November 2025',
//     icon: Trophy,
//     color: 'from-green-500 to-teal-500',
//     image: '/achievements/swimming.jpg',
//     prize: 'Gold Medal',
//   },
//   {
//     id: 3,
//     title: 'Young Scientist Award',
//     description: 'Awarded for research in renewable energy at National Science Fair',
//     studentName: 'Arjun Nair',
//     category: 'Research',
//     date: 'October 2025',
//     icon: Microscope,
//     color: 'from-purple-500 to-violet-500',
//     image: '/achievements/scientist.jpg',
//     prize: 'Certificate of Excellence',
//   },
//   {
//     id: 4,
//     title: 'National Level Debate Champions',
//     description: 'Winners of the All-India Inter-University Debate Competition',
//     studentName: 'Ananya Desai, Vikram Joshi',
//     category: 'Cultural',
//     date: 'September 2025',
//     icon: BookOpen,
//     color: 'from-orange-500 to-amber-500',
//     image: '/achievements/debate.jpg',
//     prize: 'Winning Trophy',
//   },
//   {
//     id: 5,
//     title: 'Classical Dance Competition',
//     description: 'First place at Youth Cultural Festival for Bharatanatyam performance',
//     studentName: 'Shruti Iyer',
//     category: 'Cultural',
//     date: 'August 2025',
//     icon: Music,
//     color: 'from-pink-500 to-rose-500',
//     image: '/achievements/dance.jpg',
//     prize: 'Gold Medal',
//   },
//   {
//     id: 6,
//     title: 'Chess Championship',
//     description: 'State-level Chess Champion for the third consecutive year',
//     studentName: 'Aditya Krishnan',
//     category: 'Sports',
//     date: 'July 2025',
//     icon: Trophy,
//     color: 'from-cyan-500 to-blue-500',
//     image: '/achievements/chess.jpg',
//     prize: 'Championship Trophy',
//   },
// ]

// // Categories for student achievements filter
// const studentCategories = ['All', 'Technical', 'Cultural', 'Sports', 'Research']

// export default function AchievementsPage() {
//   const [activeTab, setActiveTab] = useState('college')
//   const [selectedStudentCategory, setSelectedStudentCategory] = useState('All')
//   const [selectedAchievement, setSelectedAchievement] = useState<any>(null)
//   const { ref: headerRef, isInView: headerInView } = useScrollAnimation({ threshold: 0.1, triggerOnce: true })

//   // Filter student achievements based on category
//   const filteredStudentAchievements = selectedStudentCategory === 'All'
//     ? studentAchievements
//     : studentAchievements.filter(achievement => achievement.category === selectedStudentCategory)

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
//               <Trophy className="w-4 h-4 text-primary" />
//               <span className="text-sm font-medium">Our Achievements</span>
//             </motion.div>

//             <motion.h1 variants={fadeInUp} className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
//               Celebrating{' '}
//               <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
//                 Excellence
//               </span>
//             </motion.h1>

//             <motion.p variants={fadeInUp} className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
//               Recognizing the outstanding achievements of our institution and students across academics, sports, and cultural activities.
//             </motion.p>
//           </motion.div>
//         </div>
//       </section>

//       {/* Stats Summary */}
//       <section className="py-12">
//         <div className="max-w-7xl mx-auto px-6 lg:px-8">
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//             <Card className="bg-white border-none shadow-md">
//               <CardContent className="p-4 text-center">
//                 <Award className="h-8 w-8 text-primary mx-auto mb-2" />
//                 <div className="text-2xl font-bold text-foreground">25+</div>
//                 <div className="text-xs text-muted-foreground">College Awards</div>
//               </CardContent>
//             </Card>
//             <Card className="bg-white border-none shadow-md">
//               <CardContent className="p-4 text-center">
//                 <Medal className="h-8 w-8 text-primary mx-auto mb-2" />
//                 <div className="text-2xl font-bold text-foreground">150+</div>
//                 <div className="text-xs text-muted-foreground">Student Medals</div>
//               </CardContent>
//             </Card>
//             <Card className="bg-white border-none shadow-md">
//               <CardContent className="p-4 text-center">
//                 <TrendingUp className="h-8 w-8 text-primary mx-auto mb-2" />
//                 <div className="text-2xl font-bold text-foreground">5</div>
//                 <div className="text-xs text-muted-foreground">National Rankings</div>
//               </CardContent>
//             </Card>
//             <Card className="bg-white border-none shadow-md">
//               <CardContent className="p-4 text-center">
//                 <Users className="h-8 w-8 text-primary mx-auto mb-2" />
//                 <div className="text-2xl font-bold text-foreground">300+</div>
//                 <div className="text-xs text-muted-foreground">Student Achievers</div>
//               </CardContent>
//             </Card>
//           </div>
//         </div>
//       </section>

//       {/* Main Content Tabs */}
//       <section className="py-12">
//         <div className="max-w-7xl mx-auto px-6 lg:px-8">
//           <Tabs defaultValue="college" className="w-full" onValueChange={setActiveTab}>
//             <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12">
//               <TabsTrigger value="college" className="text-lg py-3">
//                 <Award className="w-4 h-4 mr-2" />
//                 College
//               </TabsTrigger>
//               <TabsTrigger value="students" className="text-lg py-3">
//                 <Users className="w-4 h-4 mr-2" />
//                 Students
//               </TabsTrigger>
//             </TabsList>

//             <AnimatePresence mode="wait">
//               {/* College Achievements Tab */}
//               {activeTab === 'college' && (
//                 <motion.div
//                   key="college"
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   exit={{ opacity: 0, y: -20 }}
//                   transition={{ duration: 0.3 }}
//                 >
//                   <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//                     {collegeAchievements.map((achievement, index) => (
//                       <motion.div
//                         key={achievement.id}
//                         initial={{ opacity: 0, y: 20 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ delay: index * 0.05 }}
//                         onClick={() => setSelectedAchievement({...achievement, type: 'college'})}
//                         className="cursor-pointer group"
//                       >
//                         <Card className="bg-white border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden h-full">
//                           <div className={`h-2 bg-gradient-to-r ${achievement.color}`} />
//                           <CardHeader>
//                             <div className="flex items-center justify-between mb-2">
//                               <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${achievement.color} flex items-center justify-center`}>
//                                 <achievement.icon className="h-6 w-6 text-white" />
//                               </div>
//                               <span className="text-xs text-muted-foreground">{achievement.date}</span>
//                             </div>
//                             <CardTitle className="text-xl group-hover:text-primary transition-colors">
//                               {achievement.title}
//                             </CardTitle>
//                             <CardDescription className="line-clamp-2">
//                               {achievement.description}
//                             </CardDescription>
//                           </CardHeader>
//                           <CardContent>
//                             <div className="flex items-center gap-2 text-sm text-muted-foreground">
//                               <Award className="h-4 w-4 text-primary" />
//                               <span>{achievement.category}</span>
//                             </div>
//                           </CardContent>
//                         </Card>
//                       </motion.div>
//                     ))}
//                   </div>
//                 </motion.div>
//               )}

//               {/* Students Achievements Tab */}
//               {activeTab === 'students' && (
//                 <motion.div
//                   key="students"
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   exit={{ opacity: 0, y: -20 }}
//                   transition={{ duration: 0.3 }}
//                 >
//                   {/* Student Category Filter */}
//                   <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
//                     {studentCategories.map((category) => (
//                       <Button
//                         key={category}
//                         onClick={() => setSelectedStudentCategory(category)}
//                         variant={selectedStudentCategory === category ? 'default' : 'outline'}
//                         size="sm"
//                         className={`transition-all duration-300 ${
//                           selectedStudentCategory === category 
//                             ? 'bg-gradient-to-r from-primary to-accent text-white' 
//                             : 'hover:border-primary/50'
//                         }`}
//                       >
//                         {category}
//                       </Button>
//                     ))}
//                   </div>

//                   <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//                     {filteredStudentAchievements.map((achievement, index) => (
//                       <motion.div
//                         key={achievement.id}
//                         initial={{ opacity: 0, y: 20 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ delay: index * 0.05 }}
//                         onClick={() => setSelectedAchievement({...achievement, type: 'student'})}
//                         className="cursor-pointer group"
//                       >
//                         <Card className="bg-white border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden h-full">
//                           <div className={`h-2 bg-gradient-to-r ${achievement.color}`} />
//                           <CardHeader>
//                             <div className="flex items-center justify-between mb-2">
//                               <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${achievement.color} flex items-center justify-center`}>
//                                 <achievement.icon className="h-6 w-6 text-white" />
//                               </div>
//                               <span className="text-xs text-muted-foreground">{achievement.date}</span>
//                             </div>
//                             <CardTitle className="text-xl group-hover:text-primary transition-colors">
//                               {achievement.title}
//                             </CardTitle>
//                             <CardDescription className="line-clamp-2">
//                               {achievement.description}
//                             </CardDescription>
//                           </CardHeader>
//                           <CardContent className="space-y-2">
//                             <p className="text-sm font-medium text-foreground">
//                               {achievement.studentName}
//                             </p>
//                             <div className="flex items-center justify-between">
//                               <span className="text-xs px-2 py-1 bg-secondary rounded-full">
//                                 {achievement.category}
//                               </span>
//                               <span className="text-sm font-semibold text-primary">
//                                 {achievement.prize}
//                               </span>
//                             </div>
//                           </CardContent>
//                         </Card>
//                       </motion.div>
//                     ))}
//                   </div>
//                 </motion.div>
//               )}
//             </AnimatePresence>
//           </Tabs>
//         </div>
//       </section>

//       {/* Achievement Details Modal */}
//       <AnimatePresence>
//         {selectedAchievement && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             onClick={() => setSelectedAchievement(null)}
//             className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
//           >
//             <motion.div
//               initial={{ scale: 0.9, opacity: 0 }}
//               animate={{ scale: 1, opacity: 1 }}
//               exit={{ scale: 0.9, opacity: 0 }}
//               onClick={(e) => e.stopPropagation()}
//               className="max-w-2xl w-full"
//             >
//               <Card className="bg-white border-none shadow-2xl overflow-hidden">
//                 {/* Header with Gradient */}
//                 <div className={`h-24 bg-gradient-to-br ${selectedAchievement.color} relative`}>
//                   <div className="absolute inset-0 opacity-20">
//                     <div className="absolute inset-0" style={{
//                       backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
//                       backgroundSize: '20px 20px',
//                     }} />
//                   </div>
//                   <button
//                     onClick={() => setSelectedAchievement(null)}
//                     className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-colors"
//                   >
//                     ×
//                   </button>
//                   <div className="absolute bottom-4 left-6">
//                     <div className="flex items-center gap-3">
//                       <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
//                         <selectedAchievement.icon className="h-6 w-6 text-white" />
//                       </div>
//                       <span className="text-white font-medium">{selectedAchievement.category}</span>
//                     </div>
//                   </div>
//                 </div>

//                 <CardHeader>
//                   <CardTitle className="text-2xl">{selectedAchievement.title}</CardTitle>
//                 </CardHeader>

//                 <CardContent className="space-y-4">
//                   <p className="text-muted-foreground leading-relaxed">
//                     {selectedAchievement.description}
//                   </p>

//                   {selectedAchievement.type === 'student' && (
//                     <div className="bg-secondary/30 p-4 rounded-lg">
//                       <p className="text-sm font-medium text-foreground mb-1">Student</p>
//                       <p className="text-lg font-semibold text-primary">
//                         {selectedAchievement.studentName}
//                       </p>
//                     </div>
//                   )}

//                   <div className="grid grid-cols-2 gap-4">
//                     <div>
//                       <p className="text-sm text-muted-foreground mb-1">Date</p>
//                       <p className="font-medium text-foreground flex items-center gap-2">
//                         <Calendar className="h-4 w-4 text-primary" />
//                         {selectedAchievement.date}
//                       </p>
//                     </div>
//                     {selectedAchievement.prize && (
//                       <div>
//                         <p className="text-sm text-muted-foreground mb-1">Prize</p>
//                         <p className="font-medium text-foreground flex items-center gap-2">
//                           <Trophy className="h-4 w-4 text-primary" />
//                           {selectedAchievement.prize}
//                         </p>
//                       </div>
//                     )}
//                   </div>

//                   <Button 
//                     className="w-full bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary text-white mt-4"
//                     onClick={() => setSelectedAchievement(null)}
//                   >
//                     Close
//                   </Button>
//                 </CardContent>
//               </Card>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>

//       {/* Featured Achievement Banner */}
      
//     </main>
//   )
// }

import { getPayloadHMR } from '@payloadcms/next/utilities'
import configPromise from '@/payload.config'
import AchievementsClient from './AchievementsClient'

export default async function AchievementsPage() {
  const payload = await getPayloadHMR({ config: configPromise })
  
  const collegeRes = await payload.find({ collection: 'college-achievements', limit: 100 })
  const studentRes = await payload.find({ collection: 'student-achievements', limit: 100 })

  return (
    <AchievementsClient 
      collegeData={collegeRes.docs} 
      studentData={studentRes.docs} 
    />
  )
}