'use client'

import Link from 'next/link'
import { Button } from '@/app/(frontend)/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/app/(frontend)/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/app/(frontend)/components/ui/tabs'
import {
  ArrowRight,
  Calendar,
  CheckCircle2,
  DollarSign,
  FileText,
  GraduationCap,
  HelpCircle,
  MapPin,
  Users,
} from 'lucide-react'
import { useScrollAnimation } from '@/app/(frontend)/hooks/use-scroll-animation'

const timeline = [
  {
    step: '01',
    title: 'Create Your Account',
    description:
      "Start by creating an account on our application portal. You'll be able to save your progress and return at any time.",
    icon: FileText,
  },
  {
    step: '02',
    title: 'Submit Your Application',
    description:
      'Complete and submit your application, including essays, transcripts, and test scores.',
    icon: CheckCircle2,
  },
  {
    step: '03',
    title: 'Send Supporting Documents',
    description:
      'Request letters of recommendation and submit any additional materials required for your program.',
    icon: Users,
  },
  {
    step: '04',
    title: 'Interview (if applicable)',
    description: "Some programs require an interview. We'll contact you to schedule if needed.",
    icon: Calendar,
  },
  {
    step: '05',
    title: 'Receive Your Decision',
    description:
      'Admissions decisions are released on the dates listed below. Check your portal for updates.',
    icon: GraduationCap,
  },
]

const deadlines = {
  undergraduate: [
    { type: 'Early Decision I', deadline: 'November 1, 2025', notification: 'December 15, 2025' },
    { type: 'Early Decision II', deadline: 'January 1, 2026', notification: 'February 15, 2026' },
    { type: 'Regular Decision', deadline: 'January 15, 2026', notification: 'April 1, 2026' },
    { type: 'Transfer Students', deadline: 'March 15, 2026', notification: 'May 15, 2026' },
  ],
  graduate: [
    { type: 'Fall Admission', deadline: 'December 15, 2025', notification: 'March 1, 2026' },
    { type: 'Spring Admission', deadline: 'September 15, 2025', notification: 'November 1, 2025' },
    {
      type: 'Rolling Admission',
      deadline: 'Varies by program',
      notification: '4-6 weeks after submission',
    },
  ],
}

const financialAid = [
  {
    name: 'Merit Scholarships',
    amount: '$15,000 - $40,000/year',
    description: 'Based on academic achievement and leadership',
  },
  {
    name: 'Need-Based Grants',
    amount: 'Up to full tuition',
    description: 'Determined by financial need analysis',
  },
  {
    name: 'Research Fellowships',
    amount: '$25,000 - $35,000/year',
    description: 'For graduate students in research programs',
  },
  {
    name: 'Work-Study Programs',
    amount: '$3,000 - $5,000/year',
    description: 'Part-time employment opportunities on campus',
  },
]

const faqs = [
  {
    question: 'What are the minimum requirements for admission?',
    answer:
      "We practice holistic admissions and don't have strict cutoffs. However, competitive applicants typically have a GPA of 3.7+ and SAT scores of 1400+.",
  },
  {
    question: 'Is the SAT/ACT required?',
    answer:
      'We have adopted a test-optional policy. Submitting test scores is optional, and applications will be evaluated holistically.',
  },
  {
    question: 'Can I apply to multiple programs?',
    answer:
      'Undergraduate applicants apply to the university, not specific programs. Graduate applicants should apply directly to their program of interest.',
  },
  {
    question: 'What is the application fee?',
    answer:
      'The application fee is $75 for undergraduate and $85 for graduate programs. Fee waivers are available for eligible students.',
  },
]

export function AdmissionsPageContent() {
  const { ref: headerRef, isInView: headerInView } = useScrollAnimation()
  const { ref: timelineRef, isInView: timelineInView } = useScrollAnimation({ threshold: 0.05 })

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div
            ref={headerRef}
            className={`max-w-3xl transition-all duration-700 ${headerInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <p className="text-sm uppercase tracking-widest text-accent mb-4">Admissions</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Your Path to Avirat
            </h1>
            <p className="text-xl text-primary-foreground/80 leading-relaxed mb-8">
              We seek students who demonstrate intellectual curiosity, leadership potential, and a
              commitment to making a positive impact on the world.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" variant="secondary" asChild className="group">
                <Link href="https://apply.Avirat .edu" target="_blank">
                  Start Your Application
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
              >
                <Link href="#deadlines">View Deadlines</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-8 bg-secondary/50 border-b border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '12%', label: 'Acceptance Rate' },
              { value: '45,000+', label: 'Applications' },
              { value: '$72M', label: 'Financial Aid' },
              { value: '100%', label: 'Need Met' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-foreground">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">
              Application Process
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Follow these steps to complete your application to Avirat University.
            </p>
          </div>

          <div ref={timelineRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {timeline.map((item, index) => (
              <Card
                key={item.step}
                className={`bg-card border-border transition-all duration-500 hover:shadow-lg hover:-translate-y-1 ${timelineInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: timelineInView ? `${index * 100}ms` : '0ms' }}
              >
                <CardHeader>
                  <div className="flex items-center gap-4 mb-2">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                      <item.icon className="h-6 w-6 text-accent" />
                    </div>
                    <span className="text-4xl font-bold text-muted-foreground/30">{item.step}</span>
                  </div>
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                  <CardDescription className="leading-relaxed">{item.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Deadlines */}
      <section id="deadlines" className="py-24 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">
              Important Deadlines
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Plan ahead with our application deadlines and notification dates.
            </p>
          </div>

          <Tabs defaultValue="undergraduate" className="w-full">
            <TabsList className="mb-8">
              <TabsTrigger value="undergraduate">Undergraduate</TabsTrigger>
              <TabsTrigger value="graduate">Graduate</TabsTrigger>
            </TabsList>

            <TabsContent value="undergraduate">
              <div className="grid md:grid-cols-2 gap-6">
                {deadlines.undergraduate.map((item) => (
                  <Card key={item.type} className="bg-card border-border">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="text-lg font-semibold text-foreground mb-4">
                            {item.type}
                          </h3>
                          <div className="space-y-2">
                            <div className="flex items-center gap-2 text-sm">
                              <Calendar className="h-4 w-4 text-accent" />
                              <span className="text-muted-foreground">Deadline:</span>
                              <span className="font-medium text-foreground">{item.deadline}</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm">
                              <CheckCircle2 className="h-4 w-4 text-accent" />
                              <span className="text-muted-foreground">Notification:</span>
                              <span className="font-medium text-foreground">
                                {item.notification}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="graduate">
              <div className="grid md:grid-cols-2 gap-6">
                {deadlines.graduate.map((item) => (
                  <Card key={item.type} className="bg-card border-border">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="text-lg font-semibold text-foreground mb-4">
                            {item.type}
                          </h3>
                          <div className="space-y-2">
                            <div className="flex items-center gap-2 text-sm">
                              <Calendar className="h-4 w-4 text-accent" />
                              <span className="text-muted-foreground">Deadline:</span>
                              <span className="font-medium text-foreground">{item.deadline}</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm">
                              <CheckCircle2 className="h-4 w-4 text-accent" />
                              <span className="text-muted-foreground">Notification:</span>
                              <span className="font-medium text-foreground">
                                {item.notification}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Financial Aid */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">
                Financial Aid & Scholarships
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Avirat is committed to making education accessible. We meet 100% of demonstrated
                financial need for all admitted students.
              </p>
              <div className="space-y-4">
                {financialAid.map((aid) => (
                  <Card key={aid.name} className="bg-secondary/50 border-border">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-semibold text-foreground">{aid.name}</h3>
                          <p className="text-sm text-muted-foreground">{aid.description}</p>
                        </div>
                        <div className="text-right">
                          <span className="text-lg font-bold text-accent">{aid.amount}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <Card className="bg-primary text-primary-foreground border-0">
              <CardContent className="p-8">
                <DollarSign className="h-12 w-12 text-accent mb-6" />
                <h3 className="text-2xl font-bold mb-4">Calculate Your Aid</h3>
                <p className="text-primary-foreground/80 mb-6 leading-relaxed">
                  Use our Net Price Calculator to get an estimate of your financial aid package and
                  out-of-pocket costs.
                </p>
                <Button variant="secondary" size="lg" asChild className="w-full">
                  <Link href="#">
                    Net Price Calculator
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-24 bg-secondary/30">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground">
              Find answers to common questions about the admissions process.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index} className="bg-card border-border">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-2 flex items-start gap-3">
                    <HelpCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    {faq.question}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed pl-8">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg" asChild className="bg-transparent">
              <Link href="/contact">
                Have More Questions? Contact Us
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Visit Campus CTA */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <MapPin className="h-12 w-12 text-accent mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Visit Our Campus</h2>
          <p className="text-xl text-primary-foreground/80 mb-8">
            Experience Avirat firsthand. Schedule a campus tour or attend an information session.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/campus#virtual-tour">Virtual Tour</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
            >
              <Link href="/contact">Schedule a Visit</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
