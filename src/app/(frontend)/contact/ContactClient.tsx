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

export default function ContactClient({ data }: { data: any }) {
  const [formStatus, setFormStatus] = useState<'idle' | 'success' | 'error'>('idle')

  // Icon mapping logic based on Title
  const getIcon = (title: string) => {
    const t = title.toLowerCase()
    if (t.includes('visit')) return MapPin
    if (t.includes('call')) return Phone
    if (t.includes('email')) return Mail
    return Clock
  }

  const { ref: headerRef } = useScrollAnimation({ threshold: 0.1, triggerOnce: true })
  const { ref: infoRef, isInView: infoInView } = useScrollAnimation({
    threshold: 0.1,
    triggerOnce: true,
  })
  const { ref: formRef, isInView: formInView } = useScrollAnimation({
    threshold: 0.1,
    triggerOnce: true,
  })

  const fadeInUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }
  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setFormStatus('success')
    setTimeout(() => setFormStatus('idle'), 5000)
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-transparent" />
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse" />
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
            {data?.contactInfo?.map((info: any, idx: number) => {
              const Icon = getIcon(info.title)
              return (
                <motion.div key={idx} variants={fadeInUp}>
                  <Card className="group bg-white border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full relative overflow-hidden">
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${info.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                    />
                    <CardContent className="p-6 relative z-10">
                      <div
                        className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${info.color} p-0.5 mb-4 transform group-hover:scale-110 transition-transform duration-300`}
                      >
                        <div className="w-full h-full rounded-2xl bg-white flex items-center justify-center">
                          <Icon className="h-7 w-7 text-foreground" />
                        </div>
                      </div>
                      <h3 className="text-lg font-semibold text-foreground mb-3">{info.title}</h3>
                      <div className="space-y-1 mb-4">
                        {info.details?.map((d: any, i: number) => (
                          <p key={i} className="text-sm text-muted-foreground">
                            {d.line}
                          </p>
                        ))}
                      </div>
                      <Link
                        href={info.link || '#'}
                        className="inline-flex items-center text-sm font-medium text-primary hover:text-accent transition-colors group/link"
                      >
                        {info.action}{' '}
                        <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                      </Link>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Form Section */}
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
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="bg-white border-none shadow-xl overflow-hidden">
                <div className="h-2 bg-gradient-to-r from-primary via-accent to-primary" />
                <CardContent className="p-8 md:p-10">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <Input placeholder="First Name" required className="border-gray-200" />
                      <Input placeholder="Last Name" required className="border-gray-200" />
                    </div>
                    <Input
                      type="email"
                      placeholder="Email Address"
                      required
                      className="border-gray-200"
                    />
                    <Input type="tel" placeholder="Phone Number" className="border-gray-200" />
                    <Textarea
                      placeholder="How can we help?"
                      required
                      className="min-h-[140px] border-gray-200"
                    />

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-gradient-to-r from-primary to-accent text-white h-14"
                      disabled={formStatus === 'success'}
                    >
                      {formStatus === 'success' ? 'Message Sent!' : 'Send Message'}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24">
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
            {data?.faqs?.map((faq: any, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <Card className="bg-white border-none shadow-md group">
                  <CardContent className="p-6">
                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                        <HelpCircle className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
                        <p className="text-muted-foreground">{faq.answer}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

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
