'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/app/(frontend)/components/ui/card'
import { BookOpen, Users, Briefcase } from 'lucide-react'
import { useScrollAnimation } from '@/app/(frontend)/hooks/use-scroll-animation'

const stats = [
  {
    icon: BookOpen,
    value: '50+',
    label: 'Courses',
    description: 'Undergraduate & Postgraduate',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Users,
    value: '15,000+',
    label: 'Students',
    description: 'Enrolled Worldwide',
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: Briefcase,
    value: '98%',
    label: 'Placements',
    description: 'Top Recruiting Companies',
    color: 'from-purple-500 to-pink-500',
  },
]

export function Stats() {
  const { ref, isInView } = useScrollAnimation({ threshold: 0.1, triggerOnce: true })

  return (
    <section ref={ref} className="py-16 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="bg-white border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden group">
                <div className={`h-2 bg-gradient-to-r ${stat.color}`} />
                <CardContent className="p-6 text-center">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br ${stat.color} p-0.5`}>
                    <div className="w-full h-full rounded-full bg-white flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <stat.icon className="h-8 w-8 text-foreground" />
                    </div>
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                    {stat.value}
                  </div>
                  <div className="text-lg font-semibold text-primary mb-1">
                    {stat.label}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.description}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}