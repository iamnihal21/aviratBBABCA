'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/app/(frontend)/components/ui/button'
import { Card, CardContent } from '@/app/(frontend)/components/ui/card'
import { Input } from '@/app/(frontend)/components/ui/input'
import { Textarea } from '@/app/(frontend)/components/ui/textarea'
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle2,
  AlertCircle,
  MessageSquare,
  ChevronRight,
  HelpCircle,
} from 'lucide-react'
import { useScrollAnimation } from '@/app/(frontend)/hooks/use-scroll-animation'

// Contact Information
const contactInfo = [
  {
    icon: MapPin,
    title: 'Visit Us',
    details: ['Avirat University', '123 Education Valley', 'Knowledge Park, CA 94305'],
    action: 'Get Directions',
    link: 'https://maps.google.com',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Phone,
    title: 'Call Us',
    details: [
      'Admissions: +1 (234) 567-8900',
      'General: +1 (234) 567-8901',
      'Fax: +1 (234) 567-8902',
    ],
    action: 'Schedule a Call',
    link: 'tel:+12345678900',
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: Mail,
    title: 'Email Us',
    details: ['admissions@avirat.edu', 'info@avirat.edu', 'support@avirat.edu'],
    action: 'Send Message',
    link: 'mailto:info@avirat.edu',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: Clock,
    title: 'Office Hours',
    details: [
      'Monday - Friday: 8:00 AM - 6:00 PM',
      'Saturday: 9:00 AM - 2:00 PM',
      'Sunday: Closed',
    ],
    action: 'View Calendar',
    link: '#',
    color: 'from-orange-500 to-red-500',
  },
]

// FAQ Data
const faqs = [
  {
    question: 'How can I schedule a campus tour?',
    answer:
      'You can schedule a campus tour through our admissions portal or by calling our admissions office directly. We offer guided tours Monday through Friday.',
  },
  {
    question: 'What are the application deadlines?',
    answer:
      'Early Decision: November 1, Regular Decision: January 15, Transfer Students: March 1. Graduate programs have varying deadlines.',
  },
  {
    question: 'Do you offer virtual information sessions?',
    answer:
      'Yes, we host weekly virtual information sessions. Register through our admissions website to join.',
  },
  {
    question: 'How do I request transcripts?',
    answer:
      "Transcript requests can be made through the Registrar's Office portal. Processing takes 3-5 business days.",
  },
]

export default function ContactPage() {
  const [formStatus, setFormStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const { ref: headerRef, isInView: headerInView } = useScrollAnimation({
    threshold: 0.1,
    triggerOnce: true,
  })
  const { ref: infoRef, isInView: infoInView } = useScrollAnimation({
    threshold: 0.1,
    triggerOnce: true,
  })
  const { ref: formRef, isInView: formInView } = useScrollAnimation({
    threshold: 0.1,
    triggerOnce: true,
  })

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  }

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate form submission
    setFormStatus('success')
    setTimeout(() => setFormStatus('idle'), 5000)
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-transparent" />
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse" />
          <div
            className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: '1s' }}
          />
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                'radial-gradient(circle at 2px 2px, hsl(var(--primary)/0.1) 1px, transparent 0)',
              backgroundSize: '40px 40px',
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            ref={headerRef}
            initial="visible"
            animate="visible"
            variants={staggerChildren}
            className="max-w-3xl"
          >
            <motion.div
              variants={fadeInUp}
              className="inline-flex items-center gap-2 bg-primary/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-primary/20"
            >
              <MessageSquare className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">Get in Touch with Avirat</span>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
            >
              We're Here to{' '}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Help
              </span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-xl text-muted-foreground leading-relaxed mb-8 max-w-2xl"
            >
              Have questions about admissions, programs, or campus life? Our team is ready to assist
              you every step of the way.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section ref={infoRef} className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial="hidden"
            animate={infoInView ? 'visible' : 'hidden'}
            variants={staggerChildren}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {contactInfo.map((info) => (
              <motion.div key={info.title} variants={fadeInUp}>
                <Card className="group bg-white border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full relative overflow-hidden">
                  {/* Animated gradient overlay on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${info.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                  
                  <CardContent className="p-6 relative z-10">
                    <div
                      className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${info.color} p-0.5 mb-4 transform group-hover:scale-110 transition-transform duration-300`}
                    >
                      <div className="w-full h-full rounded-2xl bg-white flex items-center justify-center">
                        <info.icon className="h-7 w-7 text-foreground" />
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-3">{info.title}</h3>
                    <div className="space-y-1 mb-4">
                      {info.details.map((detail, i) => (
                        <p key={i} className="text-sm text-muted-foreground">
                          {detail}
                        </p>
                      ))}
                    </div>
                    <Link
                      href={info.link}
                      className="inline-flex items-center text-sm font-medium text-primary hover:text-accent transition-colors group/link"
                    >
                      {info.action}
                      <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section - Full Width */}
      <section ref={formRef} className="py-24 bg-secondary/30">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <motion.div
            initial="hidden"
            animate={formInView ? 'visible' : 'hidden'}
            variants={staggerChildren}
          >
            <motion.div variants={fadeInUp} className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">
                Send Us a{' '}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Message
                </span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Fill out the form below and we'll get back to you within 24 hours.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="bg-white border-none shadow-xl overflow-hidden">
                {/* Decorative top bar */}
                <div className="h-2 bg-gradient-to-r from-primary via-accent to-primary" />
                
                <CardContent className="p-8 md:p-10">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name Field - Grid on mobile, stacked on larger screens? Actually let's keep grid for better layout */}
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-foreground flex items-center gap-1">
                          First Name <span className="text-primary">*</span>
                        </label>
                        <Input
                          placeholder="Rakesh"
                          className="border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-foreground flex items-center gap-1">
                          Last Name <span className="text-primary">*</span>
                        </label>
                        <Input
                          placeholder="Sharma"
                          className="border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                          required
                        />
                      </div>
                    </div>

                    {/* Email Field */}
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground flex items-center gap-1">
                        Email Address <span className="text-primary">*</span>
                      </label>
                      <Input
                        type="email"
                        placeholder="rakesh.sharma@example.com"
                        className="border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                        required
                      />
                    </div>

                    {/* Phone Field */}
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Phone Number</label>
                      <Input
                        type="tel"
                        placeholder="9876543210"
                        className="border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                      />
                    </div>

                    {/* Message Field */}
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground flex items-center gap-1">
                        Message <span className="text-primary">*</span>
                      </label>
                      <Textarea
                        placeholder="How can we help you? Please provide details about your inquiry..."
                        className="min-h-[140px] border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-y"
                        required
                      />
                    </div>

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary text-white group relative overflow-hidden h-14 text-base"
                      disabled={formStatus === 'success'}
                    >
                      <span className="relative z-10 flex items-center justify-center">
                        {formStatus === 'success' ? (
                          <>
                            <CheckCircle2 className="mr-2 h-5 w-5 animate-bounce" />
                            Message Sent Successfully!
                          </>
                        ) : formStatus === 'error' ? (
                          <>
                            <AlertCircle className="mr-2 h-5 w-5" />
                            Try Again
                          </>
                        ) : (
                          <>
                            Send Message
                            <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                          </>
                        )}
                      </span>
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                        initial={{ x: '-100%' }}
                        whileHover={{ x: '100%' }}
                        transition={{ duration: 0.8 }}
                      />
                    </Button>

                    {/* Success/Error Message */}
                    <AnimatePresence>
                      {formStatus === 'success' && (
                        <motion.div
                          initial={{ opacity: 0, y: -10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.9 }}
                          className="p-5 bg-green-50 text-green-700 rounded-xl flex items-center gap-3 border border-green-200"
                        >
                          <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                            <CheckCircle2 className="h-5 w-5 text-green-600" />
                          </div>
                          <div>
                            <p className="font-medium">Thank you for reaching out!</p>
                            <p className="text-sm text-green-600">We'll respond within 24 hours.</p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Required fields note */}
                    <p className="text-xs text-muted-foreground text-center mt-4">
                      <span className="text-primary">*</span> Required fields
                    </p>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">
              Frequently Asked{' '}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Questions
              </span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Find quick answers to common questions about contacting us.
            </p>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-white border-none shadow-md hover:shadow-xl transition-all duration-300 group">
                  <CardContent className="p-6">
                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1 group-hover:scale-110 transition-transform duration-300">
                        <HelpCircle className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-foreground mb-2">
                          {faq.question}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Card className="bg-gradient-to-br from-primary/5 via-accent/5 to-transparent border-2 border-primary/20 shadow-xl overflow-hidden relative">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-primary/5 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-accent/5 rounded-full blur-3xl" />
              
              <CardContent className="p-10 relative z-10">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <AlertCircle className="h-8 w-8 text-primary" />
                </div>
                
                <h3 className="text-3xl font-bold text-foreground mb-3">24/7 Emergency Contact</h3>
                <p className="text-muted-foreground mb-8 text-lg">
                  For urgent matters outside business hours
                </p>
                
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300 min-w-[200px] group"
                  >
                    <Phone className="mr-2 h-4 w-4 group-hover:animate-pulse" />
                    +1 (234) 567-8999
                  </Button>
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary text-white border-0 min-w-[200px] group"
                  >
                    <Mail className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                    emergency@avirat.edu
                  </Button>
                </div>
                
                <p className="text-sm text-muted-foreground mt-6">
                  Available 24 hours a day, 7 days a week for emergencies
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </main>
  )
}