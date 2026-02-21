'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/app/(frontend)/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/app/(frontend)/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/app/(frontend)/components/ui/tabs'
import {
  Trophy, Award, Medal, TrendingUp, Users, BookOpen, Microscope, Target, Sparkles, Calendar, Laptop, Music
} from 'lucide-react'
import { useScrollAnimation } from '@/app/(frontend)/hooks/use-scroll-animation'

export default function AchievementsClient({ collegeData, studentData }: { collegeData: any[], studentData: any[] }) {
  const [activeTab, setActiveTab] = useState('college')
  const [selectedStudentCategory, setSelectedStudentCategory] = useState('All')
  const [selectedAchievement, setSelectedAchievement] = useState<any>(null)
  const { ref: headerRef } = useScrollAnimation({ threshold: 0.1, triggerOnce: true })

  const getIcon = (type: string) => {
    const icons: any = {
      trophy: Trophy, award: Award, ranking: TrendingUp, target: Target, 
      microscope: Microscope, laptop: Laptop, music: Music, book: BookOpen
    }
    return icons[type] || Award
  }

  const studentCategories = ['All', 'Technical', 'Cultural', 'Sports', 'Research']
  const filteredStudentAchievements = selectedStudentCategory === 'All'
    ? studentData
    : studentData.filter(a => a.category === selectedStudentCategory)

  const fadeInUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }
  const staggerChildren = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } }

  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-transparent" />
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div ref={headerRef} initial="visible" animate="visible" variants={staggerChildren} className="max-w-3xl">
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 bg-primary/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-primary/20">
              <Trophy className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">Our Achievements</span>
            </motion.div>
            <motion.h1 variants={fadeInUp} className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
              Celebrating <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Excellence</span>
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
              Recognizing the outstanding achievements of our institution and students across academics, sports, and cultural activities.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Stats Summary */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: Award, val: '25+', label: 'College Awards' },
              { icon: Medal, val: '150+', label: 'Student Medals' },
              { icon: TrendingUp, val: '5', label: 'National Rankings' },
              { icon: Users, val: '300+', label: 'Student Achievers' }
            ].map((stat, i) => (
              <Card key={i} className="bg-white border-none shadow-md">
                <CardContent className="p-4 text-center">
                  <stat.icon className="h-8 w-8 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold">{stat.val}</div>
                  <div className="text-xs text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content Tabs */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Tabs defaultValue="college" className="w-full" onValueChange={setActiveTab}>
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12">
              <TabsTrigger value="college" className="text-lg py-3"><Award className="w-4 h-4 mr-2" />College</TabsTrigger>
              <TabsTrigger value="students" className="text-lg py-3"><Users className="w-4 h-4 mr-2" />Students</TabsTrigger>
            </TabsList>

            <AnimatePresence mode="wait">
              {activeTab === 'college' && (
                <motion.div key="college" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {collegeData.map((item, i) => {
                    const Icon = getIcon(item.iconType)
                    return (
                      <Card key={i} onClick={() => setSelectedAchievement({...item, type: 'college'})} className="cursor-pointer group bg-white border-none shadow-lg hover:-translate-y-2 transition-all overflow-hidden h-full">
                        <div className={`h-2 bg-gradient-to-r ${item.color}`} />
                        <CardHeader>
                          <div className="flex justify-between mb-2">
                            <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center`}><Icon className="h-6 w-6 text-white" /></div>
                            <span className="text-xs text-muted-foreground">{item.date}</span>
                          </div>
                          <CardTitle className="text-xl group-hover:text-primary transition-colors">{item.title}</CardTitle>
                          <CardDescription className="line-clamp-2">{item.description}</CardDescription>
                        </CardHeader>
                      </Card>
                    )
                  })}
                </motion.div>
              )}

              {activeTab === 'students' && (
                <motion.div key="students" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}>
                  <div className="flex flex-wrap justify-center gap-3 mb-8">
                    {studentCategories.map((cat) => (
                      <Button key={cat} onClick={() => setSelectedStudentCategory(cat)} variant={selectedStudentCategory === cat ? 'default' : 'outline'} className={selectedStudentCategory === cat ? 'bg-primary text-white' : ''}>{cat}</Button>
                    ))}
                  </div>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredStudentAchievements.map((item, i) => {
                      const Icon = getIcon(item.iconType)
                      return (
                        <Card key={i} onClick={() => setSelectedAchievement({...item, type: 'student'})} className="cursor-pointer group bg-white border-none shadow-lg hover:-translate-y-2 transition-all overflow-hidden h-full">
                          <div className={`h-2 bg-gradient-to-r ${item.color}`} />
                          <CardHeader>
                            <div className="flex justify-between mb-2">
                              <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center`}><Icon className="h-6 w-6 text-white" /></div>
                              <span className="text-xs text-muted-foreground">{item.date}</span>
                            </div>
                            <CardTitle className="text-xl group-hover:text-primary transition-colors">{item.title}</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <p className="text-sm font-medium mb-2">{item.studentName}</p>
                            <div className="flex justify-between items-center">
                              <span className="text-xs px-2 py-1 bg-secondary rounded-full">{item.category}</span>
                              <span className="text-sm font-semibold text-primary">{item.prize}</span>
                            </div>
                          </CardContent>
                        </Card>
                      )
                    })}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </Tabs>
        </div>
      </section>

      {/* Modal - Strictly matching your original logic */}
      <AnimatePresence>
        {selectedAchievement && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelectedAchievement(null)} className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm">
            <motion.div initial={{ scale: 0.9 }} animate={{ scale: 1 }} exit={{ scale: 0.9 }} onClick={(e) => e.stopPropagation()} className="max-w-2xl w-full">
              <Card className="bg-white overflow-hidden">
                <div className={`h-24 bg-gradient-to-br ${selectedAchievement.color} relative p-6`}>
                   <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                        {/* Render Icon component from mapping */}
                        {(() => { const Icon = getIcon(selectedAchievement.iconType); return <Icon className="text-white h-6 w-6" /> })()}
                      </div>
                      <span className="text-white font-medium">{selectedAchievement.category}</span>
                   </div>
                </div>
                <CardContent className="p-6 space-y-4">
                  <CardTitle className="text-2xl">{selectedAchievement.title}</CardTitle>
                  <p className="text-muted-foreground">{selectedAchievement.description}</p>
                  {selectedAchievement.type === 'student' && (
                    <div className="bg-secondary/30 p-4 rounded-lg">
                      <p className="text-sm font-medium">Student</p>
                      <p className="text-lg font-semibold text-primary">{selectedAchievement.studentName}</p>
                    </div>
                  )}
                  <Button className="w-full bg-primary text-white" onClick={() => setSelectedAchievement(null)}>Close</Button>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  )
}