'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/app/(frontend)/components/ui/button'
import { Card } from '@/app/(frontend)/components/ui/card'
import { Laptop, Briefcase, X } from 'lucide-react'

interface CourseDialogProps {
  onSelect: (course: 'bba' | 'bca') => void
}

export function CourseDialog({ onSelect }: CourseDialogProps) {
  const [isOpen, setIsOpen] = useState(true)

  useEffect(() => {
    // Check if user has already selected a course
    const savedCourse = localStorage.getItem('selectedCourse')
    if (savedCourse) {
      setIsOpen(false)
      onSelect(savedCourse as 'bba' | 'bca')
    }
  }, [onSelect])

  const handleSelect = (course: 'bba' | 'bca') => {
    localStorage.setItem('selectedCourse', course)
    setIsOpen(false)
    onSelect(course)
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            onClick={() => {}} // Prevents closing on backdrop click
          />

          {/* Dialog */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <Card className="max-w-md w-full bg-white shadow-2xl overflow-hidden">
              {/* Header */}
              <div className="bg-gradient-to-r from-primary to-accent p-6 text-white text-center relative">
                <h2 className="text-2xl font-bold mb-1">Welcome to Avirat University</h2>
                <p className="text-white/80 text-sm">Please select your program of interest</p>
              </div>

              {/* Options */}
              <div className="p-6">
                <div className="grid grid-cols-2 gap-4">
                  {/* BCA Option */}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleSelect('bca')}
                    className="group relative overflow-hidden rounded-xl p-6 border-2 border-primary/20 hover:border-primary transition-all duration-300"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <Laptop className="h-12 w-12 text-primary mx-auto mb-3" />
                    <h3 className="text-xl font-bold text-foreground mb-1">BCA</h3>
                    <p className="text-xs text-muted-foreground">Bachelor of Computer Applications</p>
                    <div className="mt-3 text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                      3 Years Program
                    </div>
                  </motion.button>

                  {/* BBA Option */}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleSelect('bba')}
                    className="group relative overflow-hidden rounded-xl p-6 border-2 border-accent/20 hover:border-accent transition-all duration-300"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <Briefcase className="h-12 w-12 text-accent mx-auto mb-3" />
                    <h3 className="text-xl font-bold text-foreground mb-1">BBA</h3>
                    <p className="text-xs text-muted-foreground">Bachelor of Business Administration</p>
                    <div className="mt-3 text-xs bg-accent/10 text-accent px-2 py-1 rounded-full">
                      3 Years Program
                    </div>
                  </motion.button>
                </div>

                {/* Note */}
                <p className="text-xs text-muted-foreground text-center mt-6">
                  You can change your selection later from the menu
                </p>
              </div>
            </Card>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}