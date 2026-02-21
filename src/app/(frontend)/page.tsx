'use client'

import { useState, useEffect } from 'react'
import { Hero } from '@/app/(frontend)/components/hero'
import { Testimonials } from '@/app/(frontend)/components/testimonials'
import { ApplyNow } from './components/ApplyNow'
import { MessageSection } from './components/message'
import { HomeGallery } from './components/HomeGallery'
import { MapLocation } from './components/mapSection'
import { Stats } from './components/stats'
import { CourseStructure } from './components/subjects'
import { CourseDialog } from './components/courseSelection'
import { CourseType } from '@/types/course'

export default function Home() {
  const [selectedCourse, setSelectedCourse] = useState<CourseType | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const savedCourse = localStorage.getItem('selectedCourse') as CourseType | null

    if (savedCourse) {
      setSelectedCourse(savedCourse)
    }

    setIsLoading(false)
  }, [])

  const handleCourseSelect = (course: CourseType) => {
    setSelectedCourse(course)
    localStorage.setItem('selectedCourse', course)
  }

  if (isLoading) return null

  return (
    <main>
      <Hero />

      <CourseDialog onSelect={handleCourseSelect} />

      {selectedCourse && (
        <>
          <Stats />
          <HomeGallery />
          <CourseStructure courseType={selectedCourse} />
          <Testimonials />
        </>
      )}

      <MapLocation />
      <ApplyNow />
      <MessageSection />
    </main>
  )
}
