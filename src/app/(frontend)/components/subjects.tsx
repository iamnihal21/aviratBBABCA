'use client'

import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/app/(frontend)/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/app/(frontend)/components/ui/tabs'
import {
  BookOpen,
  Award,
  Clock,
  ChevronRight,
  Laptop,
  Briefcase,
  GraduationCap
} from 'lucide-react'
import { useScrollAnimation } from '@/app/(frontend)/hooks/use-scroll-animation'
import { CourseType } from '@/types/course'

interface CourseStructureProps {
  courseType: CourseType
  data?: any[] // From homeData.courses
}

const typeColors = {
  Core: 'bg-blue-100 text-blue-700',
  Elective: 'bg-purple-100 text-purple-700',
  AECC: 'bg-green-100 text-green-700',
  Lab: 'bg-orange-100 text-orange-700',
  Project: 'bg-pink-100 text-pink-700',
}

export function CourseStructure({ courseType, data }: CourseStructureProps) {
  const [activeSemester, setActiveSemester] = useState('1')
  const { ref: headerRef, isInView: headerInView } = useScrollAnimation({ threshold: 0.1, triggerOnce: true })

  const course = useMemo(() => {
    if (!data) return null
    return data.find((c: any) => c.courseKey === courseType)
  }, [data, courseType])

  const Icon = courseType === 'bca' ? Laptop : Briefcase

  if (!course) return <div className="py-20 text-center">Loading course structure...</div>

  const fadeInUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }
  const staggerChildren = { visible: { transition: { staggerChildren: 0.1 } } }

  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      {/* Dynamic Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-transparent" />
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
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
              <Icon className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">{course.shortTitle} Program</span>
            </motion.div>

            <motion.h1 variants={fadeInUp} className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
              {course.title.split(' ').slice(0, -1).join(' ')}{' '}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                {course.title.split(' ').pop()}
              </span>
            </motion.h1>

            <motion.p variants={fadeInUp} className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
              {course.description}
            </motion.p>
          </motion.div>
        </div>
      </section>
      {/* Overview Cards */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: Clock, label: 'Duration', value: course.duration },
              { icon: Award, label: 'Total Credits', value: `${course.totalCredits} Credits` },
              { icon: BookOpen, label: 'Eligibility', value: course.eligibility },
            ].map((item, i) => (
              <Card key={i} className="bg-white border-none shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{item.label}</p>
                    <p className="text-lg font-semibold">{item.value}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Semester Curriculum */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Tabs defaultValue="1" className="w-full" onValueChange={setActiveSemester}>
            <TabsList className="grid w-full grid-cols-3 md:grid-cols-6 mb-12">
              {course.semesters.map((sem: any, idx: number) => (
                <TabsTrigger key={idx} value={(idx + 1).toString()} className="text-sm">
                  Sem {idx + 1}
                </TabsTrigger>
              ))}
            </TabsList>

            <AnimatePresence mode="wait">
              {course.semesters.map((semester: any, idx: number) => (
                <TabsContent key={idx} value={(idx + 1).toString()}>
                  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}>
                    <Card className="bg-white border-none shadow-xl overflow-hidden">
                      <div className="h-2 bg-gradient-to-r from-primary to-accent" />
                      <CardHeader>
                        <CardTitle className="text-2xl">{semester.semesterName}</CardTitle>
                        <CardDescription>Comprehensive curriculum for term {idx + 1}</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        {semester.subjects.map((subject: any, sIdx: number) => (
                          <Card key={sIdx} className="bg-secondary/30 border-none hover:bg-secondary/50 transition-colors">
                            <CardContent className="p-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
                              <div className="flex-1">
                                <div className="flex items-center gap-3 mb-1">
                                  <span className="text-xs font-mono text-primary font-bold">{subject.code}</span>
                                  {subject.type && (
                                    <span className={`text-[10px] px-2 py-0.5 rounded-full ${typeColors[subject.type as keyof typeof typeColors] || 'bg-gray-100'}`}>
                                      {subject.type}
                                    </span>
                                  )}
                                </div>
                                <h4 className="text-lg font-semibold">{subject.name}</h4>
                              </div>
                              <div className="flex items-center gap-3">
                                <span className="text-sm bg-primary/10 px-3 py-1 rounded-full">{subject.credits} Credits</span>
                                <ChevronRight className="h-5 w-5 text-muted-foreground" />
                              </div>
                            </CardContent>
                          </Card>
                        ))}
                      </CardContent>
                    </Card>
                  </motion.div>
                </TabsContent>
              ))}
            </AnimatePresence>
          </Tabs>
        </div>
      </section>

      {/* Career Opportunities */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Career Opportunities</h2>
            <p className="text-muted-foreground">Expert roles available after completing {course.shortTitle}</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {course.careers.map((career: any, index: number) => (
              <motion.div key={index} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: index * 0.05 }}>
                <Card className="bg-white border-none shadow-sm hover:shadow-md text-center p-4">
                  <p className="text-sm font-medium">{career.role}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
