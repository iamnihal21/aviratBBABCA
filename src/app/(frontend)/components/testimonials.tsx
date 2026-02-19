'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Card, CardContent } from '@/app/(frontend)/components/ui/card'
import { Quote, Users } from 'lucide-react'

const testimonials = [
  {
    name: 'Jessica Park',
    role: 'Class of 2025, Biomedical Engineering',
    quote: 'My time at Avirat has been transformative. The opportunities for research, the supportive community, and the lifelong friendships I\'ve made here have shaped who I am today.',
    image: '/testimonials/jessica.jpg',
  },
  {
    name: 'Marcus Chen',
    role: 'Class of 2024, Computer Science',
    quote: 'The campus facilities are world-class. From the innovation labs to the study spaces, everything is designed to help students succeed.',
    image: '/testimonials/marcus.jpg',
  },
  {
    name: 'Sofia Rodriguez',
    role: 'Class of 2026, Architecture',
    quote: 'Living on campus has been incredible. The community events, the beautiful grounds, and the support from staff make this feel like home.',
    image: '/testimonials/sofia.jpg',
  },
]

export function Testimonials() {
  const [activeTestimonial, setActiveTestimonial] = useState(0)

  return (
    <section className="w-full py-16 bg-secondary/30">
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
            Student <span className="text-primary">Stories</span>
          </h2>
          <p className="text-sm text-muted-foreground max-w-xl mx-auto">
            Hear what our students have to say about life at Avirat
          </p>
        </motion.div>

        {/* Testimonial Card */}
        <div className="relative max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTestimonial}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="bg-white border-none shadow-md hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6 md:p-8">
                  {/* Quote Icon */}
                  <Quote className="h-8 w-8 text-primary/20 mb-4" />
                  
                  {/* Quote Text - Reduced font size */}
                  <blockquote className="text-base md:text-lg text-foreground/90 leading-relaxed mb-6">
                    "{testimonials[activeTestimonial].quote}"
                  </blockquote>
                  
                  {/* Author Info */}
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent p-0.5 flex-shrink-0">
                      <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                        <Users className="h-5 w-5 text-primary" />
                      </div>
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">
                        {testimonials[activeTestimonial].name}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {testimonials[activeTestimonial].role}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveTestimonial(index)}
                className={`transition-all duration-300 ${
                  index === activeTestimonial
                    ? 'w-6 h-2 bg-primary rounded-full'
                    : 'w-2 h-2 bg-gray-300 rounded-full hover:bg-gray-400'
                }`}
                aria-label={`View testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}