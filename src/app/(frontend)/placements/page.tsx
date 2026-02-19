'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/app/(frontend)/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/app/(frontend)/components/ui/card'
import {
  Briefcase,
  TrendingUp,
  DollarSign,
  Users,
  Building2,
  MapPin,
  Calendar,
  Award,
  ArrowRight,
  Sparkles,
} from 'lucide-react'
import { useScrollAnimation } from '@/app/(frontend)/hooks/use-scroll-animation'

// Placement Stats
const stats = [
  { value: '98%', label: 'Placement Rate', icon: TrendingUp },
  { value: '₹45 LPA', label: 'Highest Package', icon: DollarSign },
  { value: '₹12 LPA', label: 'Average Package', icon: Award },
  { value: '250+', label: 'Recruiting Companies', icon: Building2 },
]

// Top Recruiters
const topRecruiters = [
  { name: 'Google', logo: '/recruiters/google.svg', industry: 'Technology' },
  { name: 'Microsoft', logo: '/recruiters/microsoft.svg', industry: 'Technology' },
  { name: 'Amazon', logo: '/recruiters/amazon.svg', industry: 'E-commerce' },
  { name: 'Goldman Sachs', logo: '/recruiters/goldman.svg', industry: 'Finance' },
  { name: 'McKinsey', logo: '/recruiters/mckinsey.svg', industry: 'Consulting' },
  { name: 'Tesla', logo: '/recruiters/tesla.svg', industry: 'Automotive' },
  { name: 'Adobe', logo: '/recruiters/adobe.svg', industry: 'Software' },
  { name: 'Deloitte', logo: '/recruiters/deloitte.svg', industry: 'Consulting' },
]

// Placement Highlights
const highlights = [
  {
    title: 'Dream Offers',
    count: '150+',
    description: 'Students placed in top-tier companies with packages above ₹20 LPA',
    icon: Award,
    color: 'from-yellow-500 to-orange-500',
  },
  {
    title: 'Internships',
    count: '300+',
    description: 'Pre-placement offers through summer internships',
    icon: Briefcase,
    color: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'Global Placements',
    count: '45+',
    description: 'International offers across USA, Europe, and Singapore',
    icon: MapPin,
    color: 'from-green-500 to-emerald-500',
  },
]

// Year-wise Trends
const yearData = [
  { year: '2024', averagePackage: '₹12.5 LPA', highestPackage: '₹48 LPA' },
  { year: '2023', averagePackage: '₹11.2 LPA', highestPackage: '₹42 LPA' },
  { year: '2022', averagePackage: '₹10.8 LPA', highestPackage: '₹38 LPA' },
]

// Testimonials
const testimonials = [
  {
    name: 'Priya Sharma',
    company: 'Google',
    role: 'Software Engineer',
    quote: 'The placement training and faculty support helped me crack my dream job at Google.',
    image: '/testimonials/priya.jpg',
  },
  {
    name: 'Rahul Mehta',
    company: 'McKinsey',
    role: 'Business Analyst',
    quote: 'Avirat\'s industry connections and mock interview sessions were invaluable.',
    image: '/testimonials/rahul.jpg',
  },
  {
    name: 'Anjali Patel',
    company: 'Amazon',
    role: 'Product Manager',
    quote: 'The placement cell worked tirelessly to bring the best opportunities to campus.',
    image: '/testimonials/anjali.jpg',
  },
]

export default function PlacementsPage() {
  const { ref: headerRef, isInView: headerInView } = useScrollAnimation({ threshold: 0.1, triggerOnce: true })
  const { ref: statsRef, isInView: statsInView } = useScrollAnimation({ threshold: 0.1, triggerOnce: true })
  const { ref: recruitersRef, isInView: recruitersInView } = useScrollAnimation({ threshold: 0.1, triggerOnce: true })

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  }

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-transparent" />
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, hsl(var(--primary)/0.1) 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            ref={headerRef}
            initial="visible"
            animate="visible"
            variants={staggerChildren}
            className="max-w-3xl"
          >
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 bg-primary/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-primary/20">
              <Briefcase className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">Placements at Avirat</span>
            </motion.div>

            <motion.h1 variants={fadeInUp} className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
              Building{' '}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Careers
              </span>
            </motion.h1>

            <motion.p variants={fadeInUp} className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
              98% placement record with top recruiters from across the globe. Your dream career starts here.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section ref={statsRef} className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial="hidden"
            animate={statsInView ? "visible" : "hidden"}
            variants={staggerChildren}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {stats.map((stat) => (
              <motion.div key={stat.label} variants={fadeInUp}>
                <Card className="bg-white border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6 text-center">
                    <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <stat.icon className="h-7 w-7 text-primary" />
                    </div>
                    <div className="text-3xl font-bold text-foreground mb-1">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-16 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">
              Placement{' '}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Highlights
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Outstanding achievements by our students in recent placements.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-white border-none shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
                  <div className={`h-2 bg-gradient-to-r ${item.color}`} />
                  <CardContent className="p-6 text-center">
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${item.color} bg-opacity-10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <item.icon className="h-8 w-8 text-foreground" />
                    </div>
                    <div className="text-3xl font-bold text-foreground mb-2">{item.count}</div>
                    <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Top Recruiters */}
      <section ref={recruitersRef} className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">
              Top{' '}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Recruiters
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Leading companies that trust Avirat talent.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            animate={recruitersInView ? "visible" : "hidden"}
            variants={staggerChildren}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {topRecruiters.map((recruiter) => (
              <motion.div key={recruiter.name} variants={fadeInUp}>
                <Card className="bg-white border-none shadow-md hover:shadow-xl transition-all duration-300 group">
                  <CardContent className="p-6 text-center">
                    <div className="h-16 w-16 mx-auto mb-3 bg-secondary/50 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <span className="text-2xl font-bold text-primary">
                        {recruiter.name.charAt(0)}
                      </span>
                    </div>
                    <h3 className="font-semibold text-foreground">{recruiter.name}</h3>
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