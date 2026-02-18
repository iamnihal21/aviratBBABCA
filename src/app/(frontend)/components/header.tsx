// 'use client'

// import { useState, useEffect } from 'react'
// import Link from 'next/link'
// import { Menu, X } from 'lucide-react'
// import { Button } from '@/app/(frontend)/components/ui/button'

// const navigation = [
//   { name: 'Programs', href: '/programs' },
//   { name: 'Admissions', href: '/admissions' },
//   { name: 'Research', href: '/research' },
//   { name: 'Campus Life', href: '/campus' },
//   { name: 'News', href: '/news' },
// ]

// export function Header() {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
//   const [scrolled, setScrolled] = useState(false)

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 50)
//     }
//     window.addEventListener('scroll', handleScroll)
//     return () => window.removeEventListener('scroll', handleScroll)
//   }, [])

//   return (
//     <header
//       className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-background/95 backdrop-blur-md border-b border-border shadow-sm' : 'bg-transparent border-b border-transparent'}`}
//     >
//       <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
//         <div className="flex lg:flex-1">
//           <Link href="/" className="-m-1.5 p-1.5 group">
//             <span
//               className={`text-xl font-bold tracking-tight transition-colors duration-300 ${scrolled ? 'text-foreground' : 'text-primary-foreground'} group-hover:text-accent`}
//             >
//               Avirat
//             </span>
//           </Link>
//         </div>

//         <div className="flex lg:hidden">
//           <button
//             type="button"
//             onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//             className={`-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 transition-colors duration-300 ${scrolled ? 'text-foreground' : 'text-primary-foreground'}`}
//             aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
//           >
//             <div className="relative w-6 h-6">
//               <X
//                 className={`absolute h-6 w-6 transition-all duration-300 ${mobileMenuOpen ? 'opacity-100 rotate-0' : 'opacity-0 rotate-90'}`}
//               />
//               <Menu
//                 className={`absolute h-6 w-6 transition-all duration-300 ${mobileMenuOpen ? 'opacity-0 -rotate-90' : 'opacity-100 rotate-0'}`}
//               />
//             </div>
//           </button>
//         </div>

//         <div className="hidden lg:flex lg:gap-x-8">
//           {navigation.map((item, index) => (
//             <Link
//               key={item.name}
//               href={item.href}
//               className={`text-sm font-medium transition-all duration-300 hover:text-accent relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-accent hover:after:w-full after:transition-all after:duration-300 ${scrolled ? 'text-muted-foreground hover:text-foreground' : 'text-primary-foreground/80 hover:text-primary-foreground'}`}
//               style={{ animationDelay: `${index * 50}ms` }}
//             >
//               {item.name}
//             </Link>
//           ))}
//         </div>

//         <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-4">
//           <Button
//             variant="ghost"
//             size="sm"
//             asChild
//             className={`transition-all duration-300 hover:scale-105 ${scrolled ? '' : 'text-primary-foreground hover:text-primary-foreground hover:bg-primary-foreground/10'}`}
//           >
//             <Link href="/contact">Contact</Link>
//           </Button>
//           <Button size="sm" asChild className="transition-all duration-300 hover:scale-105">
//             <Link href="/admissions">Apply Now</Link>
//           </Button>
//         </div>
//       </nav>

//       {/* Mobile menu */}
//       <div
//         className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
//       >
//         <div className="space-y-1 px-6 pb-6 pt-2 bg-background/95 backdrop-blur-md">
//           {navigation.map((item, index) => (
//             <Link
//               key={item.name}
//               href={item.href}
//               onClick={() => setMobileMenuOpen(false)}
//               className={`block py-2 text-base font-medium text-muted-foreground hover:text-foreground hover:translate-x-2 transition-all duration-300 ${mobileMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}
//               style={{ transitionDelay: mobileMenuOpen ? `${index * 50}ms` : '0ms' }}
//             >
//               {item.name}
//             </Link>
//           ))}
//           <div
//             className={`flex flex-col gap-2 pt-4 transition-all duration-300 ${mobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
//             style={{ transitionDelay: mobileMenuOpen ? '250ms' : '0ms' }}
//           >
//             <Button variant="outline" asChild className="w-full bg-transparent">
//               <Link href="/contact">Contact</Link>
//             </Button>
//             <Button asChild className="w-full">
//               <Link href="/admissions">Apply Now</Link>
//             </Button>
//           </div>
//         </div>
//       </div>
//     </header>
//   )
// }


'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, GraduationCap } from 'lucide-react'
import { Button } from '@/app/(frontend)/components/ui/button'

const navigation = [
  { name: 'Programs', href: '/programs' },
  { name: 'Admissions', href: '/admissions' },
  { name: 'Research', href: '/research' },
  { name: 'Campus Life', href: '/campus' },
  { name: 'News', href: '/news' },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-background/80 backdrop-blur-lg border-b border-primary/10 shadow-lg shadow-primary/5' 
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5 group">
            <div className="flex items-center gap-2">
              <div className="relative">
                <GraduationCap 
                  className={`h-6 w-6 transition-all duration-300 ${
                    scrolled 
                      ? 'text-primary' 
                      : 'text-primary-foreground'
                  } group-hover:scale-110 group-hover:rotate-3`} 
                />
                <div className="absolute inset-0 bg-primary/20 blur-lg scale-150 group-hover:scale-175 transition-transform duration-300" />
              </div>
              <span
                className={`text-xl font-bold tracking-tight transition-all duration-300 ${
                  scrolled 
                    ? 'text-foreground' 
                    : 'text-primary-foreground'
                } group-hover:text-primary`}
              >
                Avirat
                <span className="text-primary ml-0.5">.</span>
              </span>
            </div>
          </Link>
        </div>

        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 transition-all duration-300 hover:bg-primary/10 ${
              scrolled 
                ? 'text-foreground' 
                : 'text-primary-foreground'
            }`}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            <div className="relative w-6 h-6">
              <X
                className={`absolute h-6 w-6 transition-all duration-300 ${
                  mobileMenuOpen 
                    ? 'opacity-100 rotate-0' 
                    : 'opacity-0 rotate-90'
                }`}
              />
              <Menu
                className={`absolute h-6 w-6 transition-all duration-300 ${
                  mobileMenuOpen 
                    ? 'opacity-0 -rotate-90' 
                    : 'opacity-100 rotate-0'
                }`}
              />
            </div>
          </button>
        </div>

        <div className="hidden lg:flex lg:gap-x-1">
          {navigation.map((item, index) => (
            <Link
              key={item.name}
              href={item.href}
              className={`relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 
                hover:bg-primary/10 group overflow-hidden ${
                scrolled 
                  ? 'text-muted-foreground hover:text-primary' 
                  : 'text-primary-foreground/90 hover:text-primary-foreground'
              }`}
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <span className="relative z-10">{item.name}</span>
              <span className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-3">
          <Button
            variant="ghost"
            size="sm"
            asChild
            className={`relative overflow-hidden group transition-all duration-300 hover:scale-105 ${
              scrolled 
                ? 'hover:bg-primary/10 hover:text-primary' 
                : 'text-primary-foreground hover:text-primary-foreground hover:bg-primary-foreground/10'
            }`}
          >
            <Link href="/contact">
              <span className="relative z-10">Contact</span>
              <span className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/10 to-primary/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
            </Link>
          </Button>
          <Button 
            size="sm" 
            asChild 
            className="relative overflow-hidden group bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/25 border-0"
          >
            <Link href="/admissions">
              <span className="relative z-10">Apply Now</span>
              <span className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
            </Link>
          </Button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          mobileMenuOpen ? 'max-h-[32rem] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="relative space-y-1 px-6 pb-6 pt-2 bg-background/95 backdrop-blur-lg border-t border-primary/10">
          {/* Gradient decoration */}
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
          
          {navigation.map((item, index) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`relative block py-3 px-4 text-base font-medium rounded-lg group overflow-hidden ${
                mobileMenuOpen 
                  ? 'opacity-100 translate-x-0' 
                  : 'opacity-0 -translate-x-4'
              }`}
              style={{ transitionDelay: mobileMenuOpen ? `${index * 50}ms` : '0ms' }}
            >
              <span className="relative z-10 text-muted-foreground group-hover:text-primary transition-colors duration-300">
                {item.name}
              </span>
              <span className="absolute inset-0 bg-primary/5 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300" />
            </Link>
          ))}
          
          <div
            className={`flex flex-col gap-3 pt-4 transition-all duration-500 ${
              mobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ transitionDelay: mobileMenuOpen ? '300ms' : '0ms' }}
          >
            <Button 
              variant="outline" 
              asChild 
              className="w-full border-primary/20 hover:border-primary/40 hover:bg-primary/5 transition-all duration-300"
            >
              <Link href="/contact">Contact</Link>
            </Button>
            <Button 
              asChild 
              className="w-full bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary transition-all duration-300 border-0"
            >
              <Link href="/admissions">Apply Now</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}