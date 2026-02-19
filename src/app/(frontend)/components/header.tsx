// 'use client'

// import { useState, useEffect } from 'react'
// import Link from 'next/link'
// import { Menu, X, GraduationCap, Phone, Mail, ChevronRight } from 'lucide-react'
// import { Button } from '@/app/(frontend)/components/ui/button'
// import { motion, AnimatePresence } from 'framer-motion'

// const navigation = [
//   { name: 'About Us', href: '/aboutus' },
//   { name: 'Contact Us', href: '/contact' },
//   { name: 'Research', href: '/research' },
//   { name: 'Placements', href: '/placements' },
//   { name: 'Admissions', href: '/admissions' },
//   { name: 'Gallery', href: '/gallery' },
//   { name: 'Fee Payment', href: '/feePayment' },
//   { name: 'Results', href: '/results' },
//   { name: 'Events', href: '/events' },
//   { name: 'Achievements', href: '/achievements' },
//   { name: 'Campus', href: '/campus' },
// ]

// export function Header() {
//   const [fullMenuOpen, setFullMenuOpen] = useState(false)
//   const [scrolled, setScrolled] = useState(false)

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 50)
//     }
//     window.addEventListener('scroll', handleScroll)
//     return () => window.removeEventListener('scroll', handleScroll)
//   }, [])

//   // Prevent body scroll when full menu is open
//   useEffect(() => {
//     if (fullMenuOpen) {
//       document.body.style.overflow = 'hidden'
//     } else {
//       document.body.style.overflow = 'unset'
//     }
//     return () => {
//       document.body.style.overflow = 'unset'
//     }
//   }, [fullMenuOpen])

//   return (
//     <>
//       <header
//         className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 backdrop-blur-lg ${
//           scrolled
//             ? 'bg-white border-b border-gray-200 shadow-lg text-gray-900'
//             : 'bg-transparent text-white'
//         }`}
//       >
//         {/* Top bar with contact info - only visible when not scrolled */}

//         <nav className="mx-auto max-w-7xl px-6 lg:px-8">
//           {/* Logo and actions row */}
//           <div className="flex items-center justify-between py-4">
//             <Link href="/" className="-m-1.5 p-1.5 group">
//               <motion.div
//                 initial={{ opacity: 0, x: -20 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 className="flex items-center gap-3"
//               >
//                 <div className="relative">
//                   <motion.div
//                     animate={{
//                       scale: [1, 1.2, 1],
//                       rotate: [0, 5, 0],
//                     }}
//                     transition={{
//                       duration: 3,
//                       repeat: Infinity,
//                       repeatType: 'reverse',
//                     }}
//                     className="absolute inset-0 bg-primary/20 blur-xl rounded-full"
//                   />
//                   <GraduationCap className="h-8 w-8 text-primary relative z-10" />
//                 </div>
//                 <div>
//                   <motion.span
//                     className={`text-2xl font-bold tracking-tight  block
//                       ${
//                         scrolled
//                           ? 'text-gray-900'
//                           : 'text-gray-400'
//                       } `}
//                     whileHover={{ scale: 1.05 }}
//                     transition={{ type: 'spring', stiffness: 400 }}
//                   >
//                     Avirat
//                     <span className="text-primary ml-0.5">University</span>
//                   </motion.span>
//                   {/* <p className="text-xs text-gray-500 -mt-1">Since 1892</p> */}
//                 </div>
//               </motion.div>
//             </Link>

//             {/* Desktop Action Buttons */}
//             <div className="hidden lg:flex items-center gap-3">
//               <motion.div
//                 initial={{ opacity: 0, scale: 0.9 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 transition={{ delay: 0.2 }}
//               >
//                 <Button
//                   variant="outline"
//                   size="sm"
//                   asChild
//                   className="border-gray-300 text-gray-700 hover:bg-gray-50 hover:text-primary hover:border-primary transition-all duration-300"
//                 >
//                   <Link href="/portal">Student Portal</Link>
//                 </Button>
//               </motion.div>
//               <motion.div
//                 initial={{ opacity: 0, scale: 0.9 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 transition={{ delay: 0.2 }}
//               >
//                 <Button
//                   variant="outline"
//                   size="sm"
//                   asChild
//                   className="border-gray-300 text-gray-700 hover:bg-gray-50 hover:text-primary hover:border-primary transition-all duration-300"
//                 >
//                   <Link href="/portal">Inquiry</Link>
//                 </Button>
//               </motion.div>
//               <motion.div
//                 initial={{ opacity: 0, scale: 0.9 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 transition={{ delay: 0.3 }}
//               >
//                 <Button
//                   size="sm"
//                   onClick={() => setFullMenuOpen(true)}
//                   className="bg-primary hover:bg-primary/90 text-white shadow-sm hover:shadow-md transition-all duration-300 flex items-center gap-2"
//                 >
//                   Menu
//                   <Menu className="h-4 w-4" />
//                 </Button>
//               </motion.div>
//             </div>

//             {/* Mobile menu button */}
//             <motion.button
//               initial={{ opacity: 0, scale: 0.9 }}
//               animate={{ opacity: 1, scale: 1 }}
//               onClick={() => setFullMenuOpen(true)}
//               className="lg:hidden -m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 hover:bg-gray-100 transition-all"
//             >
//               <Menu className="h-6 w-6" />
//             </motion.button>
//           </div>
//         </nav>
//         {!scrolled && (
//           <div className="hidden lg:block bg-gradient-to-r from-primary/5 to-accent/5 bg-gray-200 text-black">
//             <div className="max-w-fit mx-auto px-8 py-2">
//               <div className="flex items-center gap-6">
//                 <motion.div
//                   initial={{ opacity: 0, x: -20 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   transition={{ delay: 0.1 }}
//                   className="flex items-center gap-2"
//                 >
//                   <span>GCAS Awarness</span>
//                 </motion.div>
//               </div>
//             </div>
//           </div>
//         )}
//       </header>

//       {/* Full Screen Menu */}
//       <AnimatePresence>
//         {fullMenuOpen && (
//           <>
//             {/* Backdrop */}
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               className="fixed inset-0 bg-black/50 z-50"
//               onClick={() => setFullMenuOpen(false)}
//             />

//             {/* Menu Panel */}
//             <motion.div
//               initial={{ x: '100%' }}
//               animate={{ x: 0 }}
//               exit={{ x: '100%' }}
//               transition={{ type: 'spring', damping: 30, stiffness: 300 }}
//               className="fixed top-0 right-0 bottom-0 w-full md:w-[600px] lg:w-[800px] bg-white shadow-2xl z-50 overflow-hidden"
//             >
//               {/* Animated Background */}
//               <div className="absolute inset-0 overflow-hidden">
//                 {/* Geometric Pattern */}
//                 <div className="absolute inset-0 opacity-5">
//                   <div className="grid grid-cols-12 gap-4 h-full w-full p-8">
//                     {Array.from({ length: 48 }).map((_, i) => (
//                       <motion.div
//                         key={i}
//                         initial={{ opacity: 0, scale: 0.8 }}
//                         animate={{ opacity: 0.3, scale: 1 }}
//                         transition={{ delay: i * 0.02, duration: 0.5 }}
//                         className="border border-primary/20 rounded-lg"
//                       />
//                     ))}
//                   </div>
//                 </div>

//                 {/* Floating Icons */}
//                 <div className="absolute inset-0">
//                   {['🎓', '📚', '🔬', '🎨', '🏆', '🌍', '💡', '🚀'].map((icon, i) => (
//                     <motion.div
//                       key={i}
//                       animate={{
//                         y: [0, -20, 0],
//                         x: [0, 10, 0],
//                         rotate: [0, 10, 0],
//                       }}
//                       transition={{
//                         duration: 6,
//                         delay: i * 0.5,
//                         repeat: Infinity,
//                         repeatType: 'reverse',
//                       }}
//                       className="absolute text-3xl opacity-10"
//                       style={{
//                         left: `${10 + i * 10}%`,
//                         top: `${10 + (i % 5) * 15}%`,
//                       }}
//                     >
//                       {icon}
//                     </motion.div>
//                   ))}
//                 </div>

//                 {/* Gradient Orbs */}
//                 <motion.div
//                   animate={{
//                     x: [0, 50, 0],
//                     y: [0, -30, 0],
//                   }}
//                   transition={{
//                     duration: 15,
//                     repeat: Infinity,
//                     repeatType: 'reverse',
//                   }}
//                   className="absolute w-96 h-96 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full blur-3xl -top-20 -right-20"
//                 />
//                 <motion.div
//                   animate={{
//                     x: [0, -40, 0],
//                     y: [0, 40, 0],
//                   }}
//                   transition={{
//                     duration: 18,
//                     repeat: Infinity,
//                     repeatType: 'reverse',
//                   }}
//                   className="absolute w-80 h-80 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl -bottom-20 -left-20"
//                 />
//               </div>

//               {/* Close Button */}
//               <motion.button
//                 initial={{ opacity: 0, scale: 0.8 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 transition={{ delay: 0.3 }}
//                 onClick={() => setFullMenuOpen(false)}
//                 className="absolute top-6 right-6 z-10 p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
//               >
//                 <X className="h-5 w-5" />
//               </motion.button>

//               {/* Menu Content */}
//               <div className="relative h-full overflow-y-auto pt-20 pb-8 px-8 md:px-12">
//                 {/* Header */}
//                 <motion.div
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ delay: 0.1 }}
//                   className="mb-10"
//                 >
//                   <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
//                     Explore <span className="text-primary">Avirat</span>
//                   </h2>
//                   <p className="text-gray-600">Discover everything our university has to offer</p>
//                 </motion.div>

//                 {/* Navigation Grid */}
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                   {navigation.map((item, index) => (
//                     <motion.div
//                       key={item.name}
//                       initial={{ opacity: 0, y: 20 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       transition={{ delay: 0.2 + index * 0.05 }}
//                     >
//                       <Link
//                         href={item.href}
//                         onClick={() => setFullMenuOpen(false)}
//                         className="group block p-6 bg-gray-50 rounded-xl hover:bg-primary hover:text-white transition-all duration-300"
//                       >
//                         <div className="flex items-center justify-between">
//                           <span className="text-lg font-medium">{item.name}</span>
//                           <ChevronRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
//                         </div>
//                       </Link>
//                     </motion.div>
//                   ))}
//                 </div>

//                 {/* Quick Links Section */}
                

//                 {/* Contact Info */}
//                 <motion.div
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   transition={{ delay: 1.2 }}
//                   className="mt-8 pt-6 border-t border-gray-200 flex flex-wrap gap-6 text-sm text-gray-600"
//                 >
//                   <div className="flex items-center gap-2">
//                     <Phone className="h-4 w-4 text-primary" />
//                     <span>+1 (234) 567-8900</span>
//                   </div>
//                   <div className="flex items-center gap-2">
//                     <Mail className="h-4 w-4 text-primary" />
//                     <span>info@avirat.edu</span>
//                   </div>
//                 </motion.div>
//               </div>
//             </motion.div>
//           </>
//         )}
//       </AnimatePresence>
//     </>
//   )
// }


'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, GraduationCap, Phone, Mail, ChevronRight } from 'lucide-react'
import { Button } from '@/app/(frontend)/components/ui/button'
import { motion, AnimatePresence } from 'framer-motion'

const navigation = [
  { name: 'About Us', href: '/aboutus' },
  { name: 'Contact Us', href: '/contact' },
  { name: 'Research', href: '/research' },
  { name: 'Placements', href: '/placements' },
  { name: 'Admissions', href: '/admissions' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Fee Payment', href: '/feePayment' },
  { name: 'Results', href: '/results' },
  { name: 'Events', href: '/events' },
  { name: 'Achievements', href: '/achievements' },
  { name: 'Campus', href: '/campus' },
]

export function Header() {
  const [fullMenuOpen, setFullMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Prevent body scroll when full menu is open
  useEffect(() => {
    if (fullMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [fullMenuOpen])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-lg border-b border-gray-200 shadow-lg text-gray-900'
            : 'bg-transparent text-white'
        }`}
      >
        <nav className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Logo and actions row */}
          <div className="flex items-center justify-between py-4">
            <Link href="/" className="-m-1.5 p-1.5 group">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className={`absolute inset-0 bg-primary/20 blur-xl rounded-full ${
                    scrolled ? 'opacity-100' : 'opacity-0'
                  }`} />
                  <GraduationCap className={`h-8 w-8 relative z-10 ${
                    scrolled ? 'text-primary' : 'text-gray-400'
                  }`} />
                </div>
                <div>
                  <span className={`text-2xl font-bold tracking-tight block ${
                    scrolled ? 'text-gray-900' : 'text-gray-400'
                  }`}>
                    Avirat
                    <span className="text-primary ml-0.5">University</span>
                  </span>
                </div>
              </div>
            </Link>

            {/* Desktop Action Buttons */}
            <div className="hidden lg:flex items-center gap-3">
              <Button
                variant="outline"
                size="sm"
                asChild
                className={`transition-all duration-300 ${
                  scrolled
                    ? 'border-gray-300 text-gray-700 hover:bg-gray-500 hover:text-primary hover:border-primary'
                    : 'border-white/30 text-gray-700 hover:bg-gray-300 hover:text-gray-900 hover:border-white'
                }`}
              >
                <Link href="/portal">Student Portal</Link>
              </Button>
              <Button
                variant="outline"
                size="sm"
                asChild
                className={`transition-all duration-300 ${
                  scrolled
                    ? 'border-gray-300 text-gray-700 hover:bg-gray-500 hover:text-primary hover:border-primary'
                    : 'border-white/30 text-gray-700 hover:bg-gray-300/10 hover:border-white hover:text-gray-900'
                }`}
              >
                <Link href="/inquiry">Inquiry</Link>
              </Button>
              <Button
                size="sm"
                onClick={() => setFullMenuOpen(true)}
                className="bg-primary hover:bg-primary/90 text-white shadow-sm hover:shadow-md transition-all duration-300 flex items-center gap-2"
              >
                Menu
                <Menu className="h-4 w-4" />
              </Button>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setFullMenuOpen(true)}
              className={`lg:hidden -m-2.5 inline-flex items-center justify-center rounded-md p-2.5 transition-all ${
                scrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'
              }`}
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </nav>

        {/* Top bar - only visible when not scrolled */}
        {!scrolled && (
          <div className="hidden lg:block bg-primary/10 backdrop-blur-sm border-t border-white/10">
            <div className="max-w-fit mx-auto px-8 py-2">
              <div className="flex items-center gap-6">
                <span className="text-lg text-gray-400 font-bold"> 📚 GCAS Awareness Program is also in the college and website too find it in the admissions page 📚</span>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Full Screen Menu */}
      <AnimatePresence>
        {fullMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
              onClick={() => setFullMenuOpen(false)}
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 w-full md:w-[600px] lg:w-[800px] bg-white shadow-2xl z-50 overflow-hidden"
            >
              {/* Simple Background Pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                  backgroundImage: 'radial-gradient(circle at 2px 2px, hsl(var(--primary)/0.3) 1px, transparent 0)',
                  backgroundSize: '40px 40px',
                }} />
              </div>

              {/* Close Button */}
              <button
                onClick={() => setFullMenuOpen(false)}
                className="absolute top-6 right-6 z-10 p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
              >
                <X className="h-5 w-5" />
              </button>

              {/* Menu Content */}
              <div className="relative h-full overflow-y-auto pt-20 pb-8 px-8 md:px-12">
                {/* Header */}
                <div className="mb-10">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                    Explore <span className="text-primary">Avirat</span>
                  </h2>
                  <p className="text-gray-600">Discover everything our university has to offer</p>
                </div>

                {/* Navigation Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {navigation.map((item, index) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setFullMenuOpen(false)}
                      className="group block p-5 bg-gray-50 rounded-xl hover:bg-primary hover:text-white transition-all duration-300"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-base font-medium">{item.name}</span>
                        <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </Link>
                  ))}
                </div>

                {/* Contact Info */}
                <div className="mt-8 pt-6 border-t border-gray-200 flex flex-wrap gap-6 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-primary" />
                    <span>+1 (234) 567-8900</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-primary" />
                    <span>info@avirat.edu</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}