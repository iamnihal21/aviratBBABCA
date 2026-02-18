"use client"

import Link from "next/link"
import { Button } from "@/app/(frontend)/components/ui/button"
import { Card, CardContent } from "@/app/(frontend)/components/ui/card"
import { ArrowRight, Calendar, GraduationCap, Users, Trophy } from "lucide-react"
import { useScrollAnimation } from "@/app/(frontend)/hooks/use-scroll-animation"

const highlights = [
  { icon: GraduationCap, value: "12%", label: "Acceptance Rate" },
  { icon: Users, value: "15,000+", label: "Students" },
  { icon: Trophy, value: "#12", label: "Global Ranking" },
  { icon: Calendar, value: "Jan 15", label: "Application Deadline" },
]

export function AdmissionsPreview() {
  const { ref, isInView } = useScrollAnimation()

  return (
    <section className="py-24 md:py-32 bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div 
          ref={ref}
          className={`grid lg:grid-cols-2 gap-12 items-center transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div>
            <p className="text-sm uppercase tracking-widest text-accent mb-4">Begin Your Journey</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
              Your Path to Avirat Starts Here
            </h2>
            <p className="text-lg text-primary-foreground/80 leading-relaxed mb-8">
              We seek students who demonstrate intellectual curiosity, leadership potential, and a commitment to making a positive impact on the world.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" variant="secondary" asChild className="group transition-all duration-300 hover:scale-105">
                <Link href="/admissions">
                  Start Your Application
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent transition-all duration-300 hover:scale-105">
                <Link href="/admissions#deadlines">
                  View Deadlines
                </Link>
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <Card 
                key={item.label}
                className={`bg-primary-foreground/10 border-primary-foreground/20 backdrop-blur-sm transition-all duration-500 hover:bg-primary-foreground/15 hover:-translate-y-1 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                style={{ transitionDelay: isInView ? `${(index + 2) * 100}ms` : "0ms" }}
              >
                <CardContent className="p-6 text-center">
                  <item.icon className="h-8 w-8 mx-auto mb-3 text-accent" />
                  <div className="text-3xl font-bold text-primary-foreground mb-1">{item.value}</div>
                  <div className="text-sm text-primary-foreground/70">{item.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
