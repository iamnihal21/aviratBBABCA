// 'use client'

// import Image from 'next/image'
// import Link from 'next/link'
// import { useState } from 'react'
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
//   ArrowRight,
//   Building2,
//   Coffee,
//   Dumbbell,
//   Home,
//   Library,
//   MapPin,
//   Music,
//   Palette,
//   TreePine,
//   Users,
//   Utensils,
//   Sparkles,
//   ChevronRight,
//   Heart,
//   Camera,
//   Calendar,
//   Clock,
//   Star,
//   Wifi,
//   Shield,
//   Wind,
// } from 'lucide-react'
// import { useScrollAnimation } from '@/app/(frontend)/hooks/use-scroll-animation'

// // Facilities Data
// const facilities = [
//   {
//     category: 'Academic',
//     items: [
//       { name: 'Central Library', description: '5 million volumes, 24/7 access', icon: Library, features: ['24/7 Study Spaces', 'Digital Archives', 'Research Support'] },
//       { name: 'Science Complex', description: 'State-of-the-art laboratories', icon: Building2, features: ['Advanced Labs', 'Research Centers', 'Innovation Hub'] },
//       { name: 'Engineering Hub', description: 'Maker spaces & innovation labs', icon: Building2, features: ['3D Printing Lab', 'Robotics Center', 'Prototyping Studio'] },
//     ],
//   },
//   {
//     category: 'Living',
//     items: [
//       { name: 'Residence Halls', description: '12 halls, 5,000+ beds', icon: Home, features: ['Single/Double Rooms', 'Common Areas', 'Study Lounges'] },
//       { name: 'Dining Services', description: '15 dining locations', icon: Utensils, features: ['International Cuisine', 'Dietary Options', 'Meal Plans'] },
//       { name: 'Coffee Shops', description: '8 campus cafes', icon: Coffee, features: ['Artisan Coffee', 'Study Spots', 'Quick Bites'] },
//     ],
//   },
//   {
//     category: 'Recreation',
//     items: [
//       { name: 'Athletics Center', description: 'Olympic-standard facilities', icon: Dumbbell, features: ['Fitness Center', 'Olympic Pool', 'Indoor Track'] },
//       { name: 'Performing Arts', description: 'Concert halls & theaters', icon: Music, features: ['Concert Hall', 'Black Box Theater', 'Rehearsal Rooms'] },
//       { name: 'Art Galleries', description: '3 campus museums', icon: Palette, features: ['Exhibition Spaces', 'Student Gallery', 'Permanent Collection'] },
//     ],
//   },
// ]

// // Housing Options
// const housingOptions = [
//   {
//     name: 'First-Year Housing',
//     description: 'Designed for new students to build community and transition to university life.',
//     features: ['Single & double rooms', 'Live-in advisors', 'Meal plans included', 'Learning communities'],
    
//     image: '/campus/first-year.jpg',
//     color: 'from-blue-500 to-cyan-500',
//   },
//   {
//     name: 'Upperclass Housing',
//     description: 'Suite and apartment-style living for sophomores, juniors, and seniors.',
//     features: ['Suite-style rooms', 'Kitchen facilities', 'More independence', 'Themed housing options'],
//     image: '/campus/upperclass.jpg',
//     color: 'from-purple-500 to-pink-500',
//   },
//   {
//     name: 'Graduate Housing',
//     description: 'Apartment-style accommodations for graduate and professional students.',
//     features: ['Studio & 1-bedroom', 'Full kitchens', 'Family housing available', 'Flexible leases'],
//     image: '/campus/graduate.jpg',
//     color: 'from-orange-500 to-red-500',
//   },
// ]

// // Student Organizations Stats
// const studentOrgs = [
//   { count: '500+', label: 'Student Organizations', icon: Users },
//   { count: '25', label: 'Club Sports', icon: Dumbbell },
//   { count: '40+', label: 'Greek Organizations', icon: Heart },
//   { count: '100+', label: 'Cultural Groups', icon: Palette },
// ]

// // Amenities
// const amenities = [
//   { icon: Wifi, label: 'High-Speed WiFi', description: 'Campus-wide coverage' },
//   { icon: Shield, label: '24/7 Security', description: 'Safe campus environment' },
//   { icon: Wind, label: 'Sustainability', description: 'Green campus initiative' },
//   { icon: Calendar, label: 'Events', description: 'Daily activities' },
//   { icon: Clock, label: 'Extended Hours', description: 'Late-night study options' },
//   { icon: Star, label: 'Award Winning', description: 'Top-ranked facilities' },
// ]

// // Gallery Images
// const galleryImages = [
//   {
//     src: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070',
//     alt: 'Main Quad at Avirat University',
//     span: 'md:col-span-2 md:row-span-2',
//     size: 'large',
//   },
//   {
//     src: 'https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=2086',
//     alt: 'Central Library Interior',
//     span: 'md:col-span-1',
//     size: 'medium',
//   },
//   {
//     src: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2070',
//     alt: 'Athletics Center',
//     span: 'md:col-span-1',
//     size: 'medium',
//   },
//   {
//     src: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=2070',
//     alt: 'Student Center',
//     span: 'md:col-span-1',
//     size: 'medium',
//   },
//   {
//     src: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070',
//     alt: 'Residence Hall',
//     span: 'md:col-span-1',
//     size: 'medium',
//   },
//   {
//     src: 'https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?q=80&w=2070',
//     alt: 'Dining Commons',
//     span: 'md:col-span-2',
//     size: 'large',
//   },
// ]

// // Testimonials
// const testimonials = [
//   {
//     name: 'Jessica Park',
//     role: 'Class of 2025, Biomedical Engineering',
//     quote: 'My time at Avirat has been transformative. The opportunities for research, the supportive community, and the lifelong friendships I\'ve made here have shaped who I am today.',
//     image: '/testimonials/jessica.jpg',
//   },
//   {
//     name: 'Marcus Chen',
//     role: 'Class of 2024, Computer Science',
//     quote: 'The campus facilities are world-class. From the innovation labs to the study spaces, everything is designed to help students succeed.',
//     image: '/testimonials/marcus.jpg',
//   },
//   {
//     name: 'Sofia Rodriguez',
//     role: 'Class of 2026, Architecture',
//     quote: 'Living on campus has been incredible. The community events, the beautiful grounds, and the support from staff make this feel like home.',
//     image: '/testimonials/sofia.jpg',
//   },
// ]

// export default function CampusPage() {
//   const [activeTab, setActiveTab] = useState('Academic')
//   const [activeTestimonial, setActiveTestimonial] = useState(0)
//   const { ref: heroRef, isInView: heroInView } = useScrollAnimation({ threshold: 0.1, triggerOnce: true })
//   const { ref: statsRef, isInView: statsInView } = useScrollAnimation({ threshold: 0.1, triggerOnce: true })
//   const { ref: galleryRef, isInView: galleryInView } = useScrollAnimation({ threshold: 0.1, triggerOnce: true })
//   const { ref: amenitiesRef, isInView: amenitiesInView } = useScrollAnimation({ threshold: 0.1, triggerOnce: true })

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
//             ref={heroRef}
//             initial="visible"
//             animate="visible"
//             variants={staggerChildren}
//             className="max-w-3xl"
//           >
//             <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 bg-primary/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-primary/20">
//               <Sparkles className="w-4 h-4 text-primary" />
//               <span className="text-sm font-medium">Experience Campus Life at Avirat</span>
//             </motion.div>

//             <motion.h1 variants={fadeInUp} className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
//               A Vibrant{' '}
//               <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
//                 Community
//               </span>
//             </motion.h1>

//             <motion.p variants={fadeInUp} className="text-xl text-muted-foreground leading-relaxed mb-8 max-w-2xl">
//               Experience a dynamic campus culture where academic excellence meets personal growth.
//               Our 300-acre campus offers everything you need to thrive.
//             </motion.p>

//           </motion.div>
//         </div>
//       </section>

//       {/* Stats Bar */}
//       <section className="py-16 bg-secondary/30">
//         <div className="max-w-7xl mx-auto px-6 lg:px-8">
//           <motion.div
//             ref={statsRef}
//             initial="hidden"
//             animate={statsInView ? "visible" : "hidden"}
//             variants={staggerChildren}
//             className="grid grid-cols-2 md:grid-cols-4 gap-8"
//           >
//             {studentOrgs.map((stat) => (
//               <motion.div key={stat.label} variants={fadeInUp} className="text-center">
//                 <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-3">
//                   <stat.icon className="h-6 w-6 text-primary" />
//                 </div>
//                 <div className="text-3xl md:text-4xl font-bold text-foreground">{stat.count}</div>
//                 <div className="text-sm text-muted-foreground">{stat.label}</div>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>
//       </section>

//       {/* Photo Gallery */}
//       <section className="py-24">
//         <div className="max-w-7xl mx-auto px-6 lg:px-8">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             viewport={{ once: true }}
//             className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12"
//           >
//             <div>
//               <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">
//                 Campus in Pictures
//               </h2>
//               <p className="text-lg text-muted-foreground">
//                 Take a visual journey through our historic and modern campus.
//               </p>
//             </div>
//             <Button variant="outline" asChild className="w-fit bg-transparent border-2">
//               <Link href="/gallery">
//                 View Full Gallery
//                 <ArrowRight className="ml-2 h-4 w-4" />
//               </Link>
//             </Button>
//           </motion.div>

//           <motion.div
//             ref={galleryRef}
//             initial="hidden"
//             animate={galleryInView ? "visible" : "hidden"}
//             variants={staggerChildren}
//             className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[200px] md:auto-rows-[250px]"
//           >
//             {galleryImages.map((image, index) => (
//               <motion.div
//                 key={index}
//                 variants={fadeInUp}
//                 className={`relative group cursor-pointer overflow-hidden rounded-xl ${image.span}`}
//               >
//                 <Image
//                   src={image.src}
//                   alt={image.alt}
//                   fill
//                   className="object-cover transition-transform duration-700 group-hover:scale-110"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//                 <div className="absolute bottom-0 left-0 right-0 p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                   <span className="text-sm font-medium">{image.alt}</span>
//                 </div>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>
//       </section>

//       {/* Facilities Tabs */}
//       <section className="py-24 bg-secondary/30">
//         <div className="max-w-7xl mx-auto px-6 lg:px-8">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             viewport={{ once: true }}
//             className="max-w-2xl mb-12"
//           >
//             <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">
//               World-Class Facilities
//             </h2>
//             <p className="text-lg text-muted-foreground leading-relaxed">
//               Our campus features state-of-the-art academic buildings, comfortable living spaces,
//               and exceptional recreational facilities.
//             </p>
//           </motion.div>

//           <Tabs defaultValue="Academic" className="w-full" onValueChange={setActiveTab}>
//             <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-12">
//               {facilities.map((cat) => (
//                 <TabsTrigger key={cat.category} value={cat.category}>
//                   {cat.category}
//                 </TabsTrigger>
//               ))}
//             </TabsList>

//             <AnimatePresence mode="wait">
//               {facilities.map((cat) => (
//                 <TabsContent key={cat.category} value={cat.category}>
//                   <motion.div
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     exit={{ opacity: 0, y: -20 }}
//                     transition={{ duration: 0.3 }}
//                     className="grid md:grid-cols-3 gap-6"
//                   >
//                     {cat.items.map((item, index) => (
//                       <Card key={item.name} className="bg-white border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
//                         <CardHeader>
//                           <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-accent p-0.5 mb-4">
//                             <div className="w-full h-full rounded-2xl bg-white flex items-center justify-center">
//                               <item.icon className="h-7 w-7 text-primary" />
//                             </div>
//                           </div>
//                           <CardTitle className="text-xl mb-2">{item.name}</CardTitle>
//                           <CardDescription className="text-base">{item.description}</CardDescription>
//                         </CardHeader>
//                         <CardContent>
//                           <ul className="space-y-2">
//                             {item.features.map((feature) => (
//                               <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
//                                 <div className="w-1.5 h-1.5 rounded-full bg-primary" />
//                                 {feature}
//                               </li>
//                             ))}
//                           </ul>
//                         </CardContent>
//                       </Card>
//                     ))}
//                   </motion.div>
//                 </TabsContent>
//               ))}
//             </AnimatePresence>
//           </Tabs>
//         </div>
//       </section>

//       {/* Housing Options */}

//       {/* Amenities Grid */}
//       <section className="py-24 bg-primary text-white">
//         <div className="max-w-7xl mx-auto px-6 lg:px-8">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             viewport={{ once: true }}
//             className="text-center mb-12"
//           >
//             <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
//               Everything You Need
//             </h2>
//             <p className="text-lg text-white/80 max-w-2xl mx-auto">
//               Our campus is designed to provide the best possible experience for our students.
//             </p>
//           </motion.div>

//           <motion.div
//             ref={amenitiesRef}
//             initial="hidden"
//             animate={amenitiesInView ? "visible" : "hidden"}
//             variants={staggerChildren}
//             className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"
//           >
//             {amenities.map((amenity) => (
//               <motion.div key={amenity.label} variants={fadeInUp}>
//                 <Card className="bg-white/10 border-white/20 hover:bg-white/20 transition-all duration-300">
//                   <CardContent className="p-6 text-center">
//                     <amenity.icon className="h-8 w-8 mx-auto mb-3 text-white" />
//                     <div className="font-medium text-white text-sm mb-1">{amenity.label}</div>
//                     <div className="text-xs text-white/70">{amenity.description}</div>
//                   </CardContent>
//                 </Card>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>
//       </section>

//       {/* Testimonials */}
      

//     </main>
//   )
// }

import { getPayloadHMR } from '@payloadcms/next/utilities'
import configPromise from '@/payload.config'
import CampusClient from './CampusClient'

export default async function CampusPage() {
  const payload = await getPayloadHMR({ config: configPromise })
  
  const settings = await payload.findGlobal({ slug: 'campus-settings' })
  const galleryRes = await payload.find({ collection: 'gallery', limit: 10 })

  return <CampusClient settings={settings} gallery={galleryRes.docs} />
}