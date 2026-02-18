'use client'

import Link from 'next/link'
import { Button } from '@/app/(frontend)/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/app/(frontend)/components/ui/card'
import { CheckCircle2, FileText, Calendar, Users, GraduationCap } from 'lucide-react'
import { useScrollAnimation } from '@/app/(frontend)/hooks/use-scroll-animation'

const timeline = [
  {
    step: '01',
    title: 'Research Programs',
    description:
      'Explore our academic programs and find the right fit for your goals and interests.',
    icon: FileText,
  },
  {
    step: '02',
    title: 'Submit Application',
    description:
      'Complete your online application with transcripts, essays, and recommendation letters.',
    icon: CheckCircle2,
  },
  {
    step: '03',
    title: 'Interview',
    description:
      'Selected candidates may be invited for an interview with faculty and admissions staff.',
    icon: Users,
  },
  {
    step: '04',
    title: 'Receive Decision',
    description:
      'Admission decisions are released within 8-12 weeks of completing your application.',
    icon: GraduationCap,
  },
]

const deadlines = [
  { type: 'Early Decision', date: 'November 1, 2025' },
  { type: 'Regular Decision', date: 'January 15, 2026' },
  { type: 'Transfer Students', date: 'March 1, 2026' },
  { type: 'Graduate Programs', date: 'Rolling Admissions' },
]

export function Admissions() {
  const { ref: leftRef, isInView: leftInView } = useScrollAnimation()
  const { ref: rightRef, isInView: rightInView } = useScrollAnimation()

  return (
    <section id="admissions" className="py-24 md:py-32 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Timeline */}
          <div ref={leftRef}>
            <div
              className={`transition-all duration-700 ${leftInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            >
              <p className="text-sm uppercase tracking-widest text-accent mb-4">Admissions</p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-6">
                Your Path to Avirat
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-12">
                We seek students who demonstrate intellectual curiosity, leadership potential, and a
                commitment to making a positive impact on the world.
              </p>
            </div>

            <div className="space-y-8">
              {timeline.map((item, index) => (
                <div
                  key={item.step}
                  className={`flex gap-6 transition-all duration-500 ${leftInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}
                  style={{ transitionDelay: leftInView ? `${(index + 1) * 150}ms` : '0ms' }}
                >
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold text-sm transition-transform duration-300 hover:scale-110">
                      {item.step}
                    </div>
                    {index < timeline.length - 1 && (
                      <div
                        className="w-px h-full bg-border mt-4 transition-all duration-1000"
                        style={{ transitionDelay: `${(index + 2) * 150}ms` }}
                      />
                    )}
                  </div>
                  <div className="pb-8">
                    <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Deadlines & CTA */}
          <div ref={rightRef} className="space-y-8">
            <Card
              className={`bg-card border-border transition-all duration-700 hover:shadow-lg ${rightInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            >
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <Calendar className="h-5 w-5 text-accent" />
                  <CardTitle className="text-xl">Important Deadlines</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {deadlines.map((deadline, index) => (
                    <div
                      key={deadline.type}
                      className={`flex justify-between items-center py-3 border-b border-border last:border-0 transition-all duration-300 hover:bg-secondary/50 hover:px-2 rounded ${rightInView ? 'opacity-100' : 'opacity-0'}`}
                      style={{ transitionDelay: rightInView ? `${index * 100}ms` : '0ms' }}
                    >
                      <span className="text-foreground font-medium">{deadline.type}</span>
                      <span className="text-muted-foreground">{deadline.date}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card
              className={`bg-primary text-primary-foreground border-0 transition-all duration-700 delay-200 hover:shadow-xl hover:scale-[1.02] ${rightInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            >
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">Ready to Apply?</h3>
                <p className="text-primary-foreground/80 mb-6 leading-relaxed">
                  Start your application today and take the first step toward joining a community of
                  scholars, innovators, and leaders.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button
                    variant="secondary"
                    size="lg"
                    asChild
                    className="transition-all duration-300 hover:scale-105"
                  >
                    <Link href="#">Start Application</Link>
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    asChild
                    className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent transition-all duration-300 hover:scale-105"
                  >
                    <Link href="#">Request Info</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-2 gap-4">
              <Card
                className={`bg-card border-border transition-all duration-700 delay-300 hover:shadow-lg hover:-translate-y-1 ${rightInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              >
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-foreground mb-1">12%</div>
                  <div className="text-sm text-muted-foreground">Acceptance Rate</div>
                </CardContent>
              </Card>
              <Card
                className={`bg-card border-border transition-all duration-700 delay-400 hover:shadow-lg hover:-translate-y-1 ${rightInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              >
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-foreground mb-1">$72M</div>
                  <div className="text-sm text-muted-foreground">Financial Aid Awarded</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
