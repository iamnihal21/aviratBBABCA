'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, Phone, Mail, ChevronRight } from 'lucide-react'
import { Button } from '@/app/(frontend)/components/ui/button'
import { motion, AnimatePresence } from 'framer-motion'
import { usePathname } from 'next/navigation'
import AdmissionInquiry from '@/app/(frontend)/admissionInquiry/page'

const navigation = [
  { name: 'About Us', href: '/aboutus' },
  { name: 'Contact Us', href: '/contact' },
  { name: 'Research', href: '/research' },
  { name: 'Placements', href: '/placements' },
  { name: 'Admissions', href: '/admissions' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Events', href: '/events' },
  { name: 'Achievements', href: '/achievements' },
  { name: 'Campus', href: '/campus' },
]

export function Header() {
  const [fullMenuOpen, setFullMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [isInquiryOpen, setIsInquiryOpen] = useState(false)

  const pathname = usePathname()
  const isHome = pathname === '/'

  // Scroll behavior
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = fullMenuOpen ? 'hidden' : 'unset'
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [fullMenuOpen])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled || !isHome
            ? 'bg-white/95 backdrop-blur-lg border-b border-gray-200 shadow-sm'
            : 'bg-background/30 backdrop-blur-md'
        }`}
      >
        <nav className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex items-center justify-between py-3">
            {/* Logo */}
            <Link href="/" className="group flex items-center gap-3">
              <div className="relative w-10 h-12">
                <Image
                  src="/api/media/file/avirat-bba-bca-collage-logo-2.png"
                  alt="Avirat Logo"
                  fill
                  className="object-contain"
                />
              </div>

              <div className="flex flex-col">
                <span
                  className={`text-xl font-black tracking-tighter ${
                    scrolled || !isHome ? 'text-gray-900' : 'text-white'
                  }`}
                >
                  AVIRAT
                </span>
                <span
                  className={`text-[10px] font-bold tracking-[0.2em] uppercase ${
                    scrolled || !isHome ? 'text-gray-600' : 'text-white'
                  }`}
                >
                  University
                </span>
              </div>
            </Link>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center gap-4">
              <Link
                href="/StudentPortal"
                className={`relative text-sm font-semibold transition-all ${
                  scrolled || !isHome ? 'text-gray-600' : 'text-white'
                } group`}
              >
                Student Portal
                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </Link>

              <Button
                variant="outline"
                size="sm"
                asChild
                className={`rounded-full px-5 ${
                  scrolled || !isHome
                    ? 'border-gray-200 text-gray-700 bg-transparent'
                    : 'border-white/40 text-white bg-transparent'
                }`}
              >
                <button onClick={() => setIsInquiryOpen(true)}>Inquiry</button>
              </Button>

              <Button
                size="sm"
                onClick={() => setFullMenuOpen(true)}
                className="bg-gray-900 hover:bg-primary text-white rounded-full px-6 flex items-center gap-2"
              >
                Menu
                <Menu className="h-4 w-4" />
              </Button>
            </div>

            {/* Mobile Button */}
            <button
              onClick={() => setFullMenuOpen(true)}
              className={`lg:hidden p-2 rounded-xl ${
                scrolled || !isHome
                  ? 'text-gray-600 hover:bg-gray-100'
                  : 'text-white hover:bg-white/10'
              }`}
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </nav>

        {/* Announcement Bar (only homepage + top) */}
        {!scrolled && isHome && (
          <div className="bg-white/60 backdrop-blur-md border-b border-white/20">
            <div className="max-w-7xl mx-auto px-6 py-2">
              <p className="text-center text-[11px] font-semibold text-gray-600 tracking-wider">
                📚 GCAS Awareness Program is active. Visit admissions page 📚
              </p>
            </div>
          </div>
        )}
      </header>

      {/* Menu */}

      {/* Full Screen Menu */}
      <AnimatePresence>
        {fullMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/40 backdrop-blur-md z-[60]"
              onClick={() => setFullMenuOpen(false)}
            />

            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              className="fixed top-0 right-0 bottom-0 w-full md:w-[500px] bg-white z-[70]"
            >
              {/* Close */}
              <div className="p-6 flex justify-end">
                <button
                  onClick={() => setFullMenuOpen(false)}
                  className="p-3 rounded-full bg-gray-50 hover:bg-gray-100 transition-all duration-300 hover:scale-110"
                >
                  <X className="h-5 w-5 text-gray-900" />
                </button>
              </div>

              {/* Content */}
              <div className="flex-1 overflow-y-auto px-8 md:px-12 pb-12">
                <div className="mb-12">
                  <span className="text-primary font-bold text-xs uppercase tracking-widest mb-2 block">
                    Navigation
                  </span>
                  <h2 className="text-4xl font-bold text-gray-900">University Menu</h2>
                </div>

                {/* Navigation Links */}
                <div className="grid grid-cols-1 gap-3">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setFullMenuOpen(false)}
                      className="group flex items-center justify-between p-4 rounded-2xl border border-transparent transition-all duration-300 hover:bg-primary/5 hover:border-primary/20 hover:shadow-sm"
                    >
                      <span className="text-lg font-semibold text-gray-700 transition-colors duration-300 group-hover:text-primary">
                        {item.name}
                      </span>

                      <ChevronRight className="h-5 w-5 text-gray-300 transition-all duration-300 group-hover:text-primary group-hover:translate-x-1" />
                    </Link>
                  ))}
                </div>

                {/* Contact */}
                <div className="mt-12 pt-8 border-t border-gray-100">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 text-gray-500">
                      <Phone className="h-4 w-4 text-primary" />
                      <span className="text-sm font-medium">+91 98765 43210</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-500">
                      <Mail className="h-4 w-4 text-primary" />
                      <span className="text-sm font-medium">admissions@avirat.edu.in</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {isInquiryOpen && (
          <AdmissionInquiry isOpen={isInquiryOpen} onClose={() => setIsInquiryOpen(false)} />
        )}
      </AnimatePresence>
    </>
  )
}
