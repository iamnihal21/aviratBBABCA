// 'use client'

// import { useState } from 'react'
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
//   Calendar,
//   MapPin,
//   Clock,
//   Users,
//   Award,
//   Music,
//   Microscope,
//   Trophy,
//   Laptop,
//   Palette,
//   ArrowRight,
//   Sparkles,
// } from 'lucide-react'
// import { useScrollAnimation } from '@/app/(frontend)/hooks/use-scroll-animation'

// // Demo Events Data - Only 5 events
// const events = [
//   {
//     id: 1,
//     title: 'Annual Tech Symposium',
//     description: 'Join us for a day of cutting-edge technology discussions, workshops, and networking with industry leaders.',
//     date: 'March 15, 2026',
//     time: '9:00 AM - 6:00 PM',
//     location: 'Main Auditorium',
//     category: 'Academic',
//     icon: Laptop,
//     color: 'from-blue-500 to-cyan-500',
//     image: '/events/tech-symposium.jpg',
//     capacity: '500+ Attendees',
//     registrationDeadline: 'March 10, 2026',
//   },
//   {
//     id: 2,
//     title: 'Spring Cultural Fest',
//     description: 'Experience the vibrant culture of Avirat with music, dance, art exhibitions, and food stalls from around the world.',
//     date: 'April 5-7, 2026',
//     time: '10:00 AM - 8:00 PM',
//     location: 'Campus Grounds',
//     category: 'Cultural',
//     icon: Music,
//     color: 'from-purple-500 to-pink-500',
//     image: '/events/cultural-fest.jpg',
//     capacity: '2000+ Attendees',
//     registrationDeadline: 'March 25, 2026',
//   },
//   {
//     id: 3,
//     title: 'Research Conference 2026',
//     description: 'Showcasing groundbreaking research from faculty and students across all disciplines.',
//     date: 'May 20-22, 2026',
//     time: '9:30 AM - 5:30 PM',
//     location: 'Research Center',
//     category: 'Academic',
//     icon: Microscope,
//     color: 'from-green-500 to-emerald-500',
//     image: '/events/research-conference.jpg',
//     capacity: '300+ Researchers',
//     registrationDeadline: 'May 10, 2026',
//   },
//   {
//     id: 4,
//     title: 'Inter-College Sports Meet',
//     description: 'Annual sports competition featuring athletics, basketball, football, and more.',
//     date: 'June 10-15, 2026',
//     time: '8:00 AM - 6:00 PM',
//     location: 'Sports Complex',
//     category: 'Sports',
//     icon: Trophy,
//     color: 'from-orange-500 to-red-500',
//     image: '/events/sports-meet.jpg',
//     capacity: '1000+ Athletes',
//     registrationDeadline: 'May 30, 2026',
//   },
//   {
//     id: 5,
//     title: 'Art & Design Exhibition',
//     description: 'Annual exhibition showcasing the best work from our art and design students.',
//     date: 'July 8-12, 2026',
//     time: '11:00 AM - 7:00 PM',
//     location: 'Art Gallery',
//     category: 'Cultural',
//     icon: Palette,
//     color: 'from-pink-500 to-rose-500',
//     image: '/events/art-exhibition.jpg',
//     capacity: '500+ Visitors',
//     registrationDeadline: 'July 1, 2026',
//   },
// ]

// // Categories for filtering
// const categories = ['All', 'Academic', 'Cultural', 'Sports']

// export default function EventsPage() {
//   const [selectedCategory, setSelectedCategory] = useState('All')
//   const [selectedEvent, setSelectedEvent] = useState<typeof events[0] | null>(null)
//   const { ref: headerRef, isInView: headerInView } = useScrollAnimation({ threshold: 0.1, triggerOnce: true })

//   // Filter events based on category
//   const filteredEvents = selectedCategory === 'All' 
//     ? events 
//     : events.filter(event => event.category === selectedCategory)

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
//               <Calendar className="w-4 h-4 text-primary" />
//               <span className="text-sm font-medium">Events at Avirat</span>
//             </motion.div>

//             <motion.h1 variants={fadeInUp} className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
//               Upcoming{' '}
//               <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
//                 Events
//               </span>
//             </motion.h1>

//             <motion.p variants={fadeInUp} className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
//               Join us for academic conferences, cultural festivals, sports meets, and more.
//             </motion.p>
//           </motion.div>
//         </div>
//       </section>

      

//       {/* Events Grid */}
//       <section className="py-16">
//         <div className="max-w-7xl mx-auto px-6 lg:px-8">
//           <AnimatePresence mode="wait">
//             <motion.div
//               key={selectedCategory}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: -20 }}
//               transition={{ duration: 0.3 }}
//               className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
//             >
//               {filteredEvents.map((event, index) => (
//                 <motion.div
//                   key={event.id}
//                   initial={{ opacity: 0, scale: 0.9 }}
//                   animate={{ opacity: 1, scale: 1 }}
//                   transition={{ delay: index * 0.05 }}
//                   onClick={() => setSelectedEvent(event)}
//                   className="cursor-pointer group"
//                 >
//                   <Card className="bg-white border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden h-full">
//                     {/* Event Image Placeholder */}
//                     <div className={`h-40 bg-gradient-to-br ${event.color} relative overflow-hidden`}>
//                       <div className="absolute inset-0 opacity-20">
//                         <div className="absolute inset-0" style={{
//                           backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
//                           backgroundSize: '20px 20px',
//                         }} />
//                       </div>
//                       <div className="absolute top-4 right-4">
//                         <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium text-foreground">
//                           {event.category}
//                         </span>
//                       </div>
//                       <div className="absolute bottom-4 left-4">
//                         <event.icon className="h-8 w-8 text-white" />
//                       </div>
//                     </div>

//                     <CardHeader>
//                       <CardTitle className="text-xl group-hover:text-primary transition-colors">
//                         {event.title}
//                       </CardTitle>
//                       <CardDescription className="line-clamp-2">
//                         {event.description}
//                       </CardDescription>
//                     </CardHeader>

//                     <CardContent className="space-y-3">
//                       <div className="flex items-center gap-2 text-sm text-muted-foreground">
//                         <Calendar className="h-4 w-4 text-primary" />
//                         <span>{event.date}</span>
//                       </div>
//                       <div className="flex items-center gap-2 text-sm text-muted-foreground">
//                         <Clock className="h-4 w-4 text-primary" />
//                         <span>{event.time}</span>
//                       </div>
//                       <div className="flex items-center gap-2 text-sm text-muted-foreground">
//                         <MapPin className="h-4 w-4 text-primary" />
//                         <span>{event.location}</span>
//                       </div>
//                       <div className="flex items-center gap-2 text-sm text-muted-foreground">
//                         <Users className="h-4 w-4 text-primary" />
//                         <span>{event.capacity}</span>
//                       </div>

//                       <Button className="w-full mt-4 bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary text-white group/btn">
//                         View Details
//                         <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
//                       </Button>
//                     </CardContent>
//                   </Card>
//                 </motion.div>
//               ))}
//             </motion.div>
//           </AnimatePresence>

//           {/* Empty State */}
//           {filteredEvents.length === 0 && (
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               className="text-center py-20"
//             >
//               <Calendar className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
//               <h3 className="text-xl font-semibold text-foreground mb-2">No events found</h3>
//               <p className="text-muted-foreground">Try selecting a different category</p>
//             </motion.div>
//           )}
//         </div>
//       </section>

//       {/* Event Details Modal */}
//       <AnimatePresence>
//         {selectedEvent && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             onClick={() => setSelectedEvent(null)}
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
//                 {/* Event Header with Gradient */}
//                 <div className={`h-32 bg-gradient-to-br ${selectedEvent.color} relative`}>
//                   <div className="absolute inset-0 opacity-20">
//                     <div className="absolute inset-0" style={{
//                       backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
//                       backgroundSize: '20px 20px',
//                     }} />
//                   </div>
//                   <button
//                     onClick={() => setSelectedEvent(null)}
//                     className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-colors"
//                   >
//                     ×
//                   </button>
//                 </div>

//                 <CardHeader>
//                   <div className="flex items-start justify-between">
//                     <div>
//                       <p className="text-sm text-primary font-medium mb-2">{selectedEvent.category}</p>
//                       <CardTitle className="text-2xl mb-2">{selectedEvent.title}</CardTitle>
//                     </div>
//                     <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${selectedEvent.color} flex items-center justify-center`}>
//                       <selectedEvent.icon className="h-6 w-6 text-white" />
//                     </div>
//                   </div>
//                 </CardHeader>

//                 <CardContent className="space-y-6">
//                   <p className="text-muted-foreground leading-relaxed">
//                     {selectedEvent.description}
//                   </p>

//                   <div className="grid grid-cols-2 gap-4">
//                     <div className="space-y-2">
//                       <div className="flex items-center gap-2 text-sm">
//                         <Calendar className="h-4 w-4 text-primary" />
//                         <span className="text-muted-foreground">Date:</span>
//                       </div>
//                       <p className="font-medium text-foreground pl-6">{selectedEvent.date}</p>
//                     </div>

//                     <div className="space-y-2">
//                       <div className="flex items-center gap-2 text-sm">
//                         <Clock className="h-4 w-4 text-primary" />
//                         <span className="text-muted-foreground">Time:</span>
//                       </div>
//                       <p className="font-medium text-foreground pl-6">{selectedEvent.time}</p>
//                     </div>

//                     <div className="space-y-2">
//                       <div className="flex items-center gap-2 text-sm">
//                         <MapPin className="h-4 w-4 text-primary" />
//                         <span className="text-muted-foreground">Location:</span>
//                       </div>
//                       <p className="font-medium text-foreground pl-6">{selectedEvent.location}</p>
//                     </div>

//                     <div className="space-y-2">
//                       <div className="flex items-center gap-2 text-sm">
//                         <Users className="h-4 w-4 text-primary" />
//                         <span className="text-muted-foreground">Capacity:</span>
//                       </div>
//                       <p className="font-medium text-foreground pl-6">{selectedEvent.capacity}</p>
//                     </div>
//                   </div>

//                   <div className="bg-secondary/30 p-4 rounded-lg">
//                     <p className="text-sm font-medium text-foreground mb-1">Registration Deadline</p>
//                     <p className="text-lg font-semibold text-primary">{selectedEvent.registrationDeadline}</p>
//                   </div>

//                   <div className="flex gap-3">
//                     <Button className="flex-1 bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary text-white">
//                       Register Now
//                     </Button>
//                     <Button variant="outline" className="flex-1">
//                       Add to Calendar
//                     </Button>
//                   </div>
//                 </CardContent>
//               </Card>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>

//       {/* Quick Info */}
      

//       {/* CTA */}
      
//     </main>
//   )
// }

import { getPayloadHMR } from '@payloadcms/next/utilities'
import configPromise from '@/payload.config'
import EventsClient from './EventsClient'

export default async function EventsPage() {
  const payload = await getPayloadHMR({ config: configPromise })
  
  const eventsRes = await payload.find({
    collection: 'events',
    limit: 100,
    sort: '-date',
  })

  return <EventsClient eventsData={eventsRes.docs} />
}