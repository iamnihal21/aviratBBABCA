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

  // New state for Payload data
  const [homeData, setHomeData] = useState<any>(null)
  const [galleryImages, setGalleryImages] = useState<any[]>([])

  useEffect(() => {
    // 1. Existing Course Logic
    const savedCourse = localStorage.getItem('selectedCourse') as CourseType | null
    if (savedCourse) {
      setSelectedCourse(savedCourse)
    }

    // 2. New Data Fetching Logic from Payload
    const fetchPayloadData = async () => {
      try {
        // Fetching Global Home Settings
        const homeRes = await fetch('/api/globals/home-settings')
        const home = await homeRes.json()
        setHomeData(home)

        // Fetching Gallery Images (limit 4 for home grid)
        const galleryRes = await fetch('/api/gallery?limit=4')
        const gallery = await galleryRes.json()
        setGalleryImages(gallery.docs)
      } catch (error) {
        console.error('Error loading CMS data:', error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchPayloadData()
  }, [])

  const handleCourseSelect = (course: CourseType) => {
    setSelectedCourse(course)
    localStorage.setItem('selectedCourse', course)
  }

  if (isLoading) return null

  return (
    <main>
      {/* Pass fetched slides to Hero */}
      <Hero data={homeData?.slides} />

      <CourseDialog onSelect={handleCourseSelect} />

      {selectedCourse && (
        <>
          <Stats data={homeData?.stats} />
          <HomeGallery images={galleryImages} />

          {/* FIX: Pass the courses data from homeData */}
          <CourseStructure courseType={selectedCourse} data={homeData?.courses} />

          <Testimonials data={homeData?.testimonials} />
        </>
      )}

      {/* Pass mapUrl and Sanskrit quote to lower sections */}
      <MapLocation mapUrl={homeData?.mapUrl} />
      <ApplyNow />
      <MessageSection
        sanskritQuote={homeData?.sanskritQuote}
        quoteTranslation={homeData?.quoteTranslation}
      />
    </main>
  )
}
