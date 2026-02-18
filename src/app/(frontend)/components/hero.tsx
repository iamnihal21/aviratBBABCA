// 'use client'

// import Link from 'next/link'
// // import dynamic from 'next/dynamic'
// import { Button } from '@/app/(frontend)/components/ui/button'
// import { ArrowRight } from 'lucide-react'
// import { useScrollAnimation } from '@/app/(frontend)/hooks/use-scroll-animation'

// // Dynamically import 3D scene to avoid SSR issues
// // const Hero3DScene = dynamic(
// //   () => import('@/app/(frontend)/components/hero-3d-scene').then((mod) => mod.Hero3DScene),
// //   { ssr: false },
// // )

// export function Hero() {
//   const { ref: statsRef, isInView: statsInView } = useScrollAnimation()

//   return (
//     <section className="relative min-h-screen flex items-center justify-center bg-primary text-primary-foreground overflow-hidden">
//       {/* 3D Background Scene */}
//       {/* <Hero3DScene /> */}

//       {/* Gradient overlay for better text readability */}
//       <div className="absolute inset-0 bg-gradient-to-b from-primary/30 via-primary/50 to-primary z-[1]" />

//       <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-20">
//         <p
//           className="text-sm uppercase tracking-widest text-primary-foreground/70 mb-6 animate-fade-up opacity-0"
//           style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}
//         >
//           Established 1892
//         </p>

//         <h1
//           className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-balance mb-8 animate-fade-up opacity-0"
//           style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}
//         >
//           Where Knowledge
//           <br />
//           Meets Innovation
//         </h1>

//         <p
//           className="max-w-2xl mx-auto text-lg md:text-xl text-primary-foreground/80 leading-relaxed mb-12 animate-fade-up opacity-0"
//           style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}
//         >
//           Avirat University is a world-renowned institution dedicated to advancing human
//           potential through groundbreaking research, transformative education, and a commitment to
//           excellence.
//         </p>

//         <div
//           className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up opacity-0"
//           style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}
//         >
//           <Button
//             size="lg"
//             variant="secondary"
//             asChild
//             className="group transition-all duration-300 hover:scale-105 hover:shadow-lg"
//           >
//             <Link href="#programs">
//               Explore Programs
//               <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
//             </Link>
//           </Button>
//           <Button
//             size="lg"
//             variant="outline"
//             asChild
//             className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent transition-all duration-300 hover:scale-105"
//           >
//             <Link href="#admissions">Apply Now</Link>
//           </Button>
//         </div>

//         {/* Stats */}
//         <div
//           ref={statsRef}
//           className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-12 border-t border-primary-foreground/20"
//         >
//           {[
//             { value: '15,000+', label: 'Students' },
//             { value: '1,200+', label: 'Faculty' },
//             { value: '98%', label: 'Employment Rate' },
//             { value: '#12', label: 'Global Ranking' },
//           ].map((stat, index) => (
//             <div
//               key={stat.label}
//               className={`text-center transition-all duration-500 ${statsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
//               style={{ transitionDelay: `${index * 100}ms` }}
//             >
//               <div className="text-3xl md:text-4xl font-bold">{stat.value}</div>
//               <div className="text-sm text-primary-foreground/60 mt-1">{stat.label}</div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }

'use client'

import Link from 'next/link'
import { Button } from '@/app/(frontend)/components/ui/button'
import { ArrowRight, Sparkles } from 'lucide-react'
import { useScrollAnimation } from '@/app/(frontend)/hooks/use-scroll-animation'

export function Hero() {
  const { ref: statsRef, isInView: statsInView } = useScrollAnimation()

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-background animate-gradient" />
      
      {/* Geometric patterns */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent z-[1]" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-20">
        <div
          className="inline-flex items-center gap-2 bg-secondary/80 backdrop-blur-sm px-4 py-2 rounded-full mb-8 animate-fade-up opacity-0"
          style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}
        >
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium">Established 1892 · Shaping Futures Since</span>
        </div>

        <h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-balance mb-6 animate-fade-up opacity-0"
          style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}
        >
          Where Knowledge{' '}
          <span className="text-gradient-primary">Meets</span>
          <br />
          Innovation
        </h1>

        <p
          className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground leading-relaxed mb-10 animate-fade-up opacity-0"
          style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}
        >
          Avirat University is a world-renowned institution dedicated to advancing human
          potential through groundbreaking research, transformative education, and a commitment to
          excellence.
        </p>

        <div
          className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up opacity-0"
          style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}
        >
          <Button
            size="lg"
            className="group relative overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/25"
          >
            <span className="relative z-10 flex items-center">
              Explore Programs
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-100" />
          </Button>
          
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-primary/20 hover:border-primary/40 bg-background/50 backdrop-blur-sm text-foreground transition-all duration-300 hover:scale-105 hover:bg-primary/5"
          >
            Apply Now
          </Button>
        </div>

        {/* Stats */}
        <div
          ref={statsRef}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-12 border-t border-border"
        >
          {[
            { value: '15,000+', label: 'Students' },
            { value: '1,200+', label: 'Faculty' },
            { value: '98%', label: 'Employment Rate' },
            { value: '#12', label: 'Global Ranking' },
          ].map((stat, index) => (
            <div
              key={stat.label}
              className={`text-center transition-all duration-700 ${statsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-b from-foreground to-foreground/80 bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}