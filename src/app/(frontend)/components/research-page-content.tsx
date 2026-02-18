'use client'

import Image from 'next/image'
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
  ArrowUpRight,
  Award,
  BookOpen,
  Cpu,
  FlaskConical,
  Globe2,
  Heart,
  Leaf,
  Lightbulb,
  Microscope,
  Rocket,
  Zap,
} from 'lucide-react'
import { useScrollAnimation } from '@/app/(frontend)/hooks/use-scroll-animation'

const researchAreas = [
  {
    id: 'ai',
    title: 'Artificial Intelligence',
    description:
      'Pioneering research in machine learning, natural language processing, computer vision, and ethical AI development.',
    icon: Cpu,
    color: 'from-blue-500 to-cyan-500',
    projects: 45,
    faculty: 28,
    funding: '$125M',
  },
  {
    id: 'health',
    title: 'Health & Medicine',
    description:
      'Advancing human health through biomedical research, drug discovery, precision medicine, and public health initiatives.',
    icon: Heart,
    color: 'from-red-500 to-rose-500',
    projects: 78,
    faculty: 65,
    funding: '$280M',
  },
  {
    id: 'sustainability',
    title: 'Climate & Sustainability',
    description:
      'Developing solutions for climate change, renewable energy, sustainable agriculture, and environmental conservation.',
    icon: Leaf,
    color: 'from-green-500 to-emerald-500',
    projects: 52,
    faculty: 38,
    funding: '$95M',
  },
  {
    id: 'space',
    title: 'Space & Astronomy',
    description:
      'Exploring the universe through astrophysics, planetary science, space exploration technologies, and cosmology.',
    icon: Rocket,
    color: 'from-purple-500 to-indigo-500',
    projects: 23,
    faculty: 15,
    funding: '$75M',
  },
  {
    id: 'quantum',
    title: 'Quantum Science',
    description:
      'Breakthrough research in quantum computing, quantum information, and quantum materials.',
    icon: Zap,
    color: 'from-amber-500 to-orange-500',
    projects: 18,
    faculty: 12,
    funding: '$65M',
  },
  {
    id: 'social',
    title: 'Social Sciences',
    description:
      'Understanding human behavior, economics, policy, and society through rigorous research and analysis.',
    icon: Globe2,
    color: 'from-teal-500 to-cyan-500',
    projects: 67,
    faculty: 45,
    funding: '$45M',
  },
]

const faculty = [
  {
    name: 'Dr. Sarah Chen',
    title: 'Professor of Computer Science',
    specialty: 'Artificial Intelligence & Machine Learning',
    image: '/faculty/sarah-chen.jpg',
    awards: ['National Medal of Science', 'Turing Award Nominee'],
  },
  {
    name: 'Dr. Michael Roberts',
    title: 'Professor of Biomedical Engineering',
    specialty: 'Regenerative Medicine',
    image: '/faculty/michael-roberts.jpg',
    awards: ["NIH Director's Award", 'MacArthur Fellow'],
  },
  {
    name: 'Dr. Elena Vasquez',
    title: 'Professor of Environmental Science',
    specialty: 'Climate Change & Sustainability',
    image: '/faculty/elena-vasquez.jpg',
    awards: ['Nobel Prize in Chemistry', 'EPA Science Award'],
  },
]

const publications = [
  {
    title: 'Breakthrough in Quantum Error Correction Achieves Record Coherence Times',
    journal: 'Nature Physics',
    date: 'January 2026',
    authors: 'Chen, Williams, et al.',
  },
  {
    title: 'Novel CRISPR Technique Shows Promise for Treating Genetic Disorders',
    journal: 'Cell',
    date: 'January 2026',
    authors: 'Roberts, Patel, et al.',
  },
  {
    title: 'AI Model Predicts Climate Patterns with Unprecedented Accuracy',
    journal: 'Science',
    date: 'December 2025',
    authors: 'Vasquez, Thompson, et al.',
  },
  {
    title: 'New Material Doubles Solar Cell Efficiency',
    journal: 'Nature Energy',
    date: 'December 2025',
    authors: 'Liu, Anderson, et al.',
  },
]

export function ResearchPageContent() {
  const { ref: headerRef, isInView: headerInView } = useScrollAnimation()
  const { ref: areasRef, isInView: areasInView } = useScrollAnimation({ threshold: 0.05 })
  const { ref: facultyRef, isInView: facultyInView } = useScrollAnimation({ threshold: 0.05 })

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div
            ref={headerRef}
            className={`max-w-3xl transition-all duration-700 ${headerInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <p className="text-sm uppercase tracking-widest text-accent mb-4">
              Research & Innovation
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Pushing the Boundaries of Knowledge
            </h1>
            <p className="text-xl text-primary-foreground/80 leading-relaxed">
              Our faculty includes Nobel laureates, National Academy members, and MacArthur Fellows
              who are leaders in their fields.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-8 bg-secondary/50 border-b border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '$850M', label: 'Annual Research Funding' },
              { value: '40+', label: 'Research Centers' },
              { value: '2,500+', label: 'Publications per Year' },
              { value: '180+', label: 'Patents Filed' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-foreground">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Areas */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">
              Research Areas
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Explore our diverse research portfolio spanning six major areas of inquiry.
            </p>
          </div>

          <div ref={areasRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {researchAreas.map((area, index) => (
              <Card
                key={area.id}
                className={`group bg-card border-border hover:shadow-xl transition-all duration-500 hover:-translate-y-2 overflow-hidden ${areasInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: areasInView ? `${index * 100}ms` : '0ms' }}
              >
                <div className={`h-2 bg-gradient-to-r ${area.color}`} />
                <CardHeader>
                  <div
                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${area.color} bg-opacity-20 flex items-center justify-center mb-4`}
                  >
                    <area.icon className="h-7 w-7 text-foreground" />
                  </div>
                  <CardTitle className="text-xl group-hover:text-accent transition-colors">
                    {area.title}
                  </CardTitle>
                  <CardDescription className="leading-relaxed">{area.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-3 gap-4 pt-4 border-t border-border">
                    <div className="text-center">
                      <div className="text-xl font-bold text-foreground">{area.projects}</div>
                      <div className="text-xs text-muted-foreground">Projects</div>
                    </div>
                    <div className="text-center">
                      <div className="text-xl font-bold text-foreground">{area.faculty}</div>
                      <div className="text-xs text-muted-foreground">Faculty</div>
                    </div>
                    <div className="text-center">
                      <div className="text-xl font-bold text-accent">{area.funding}</div>
                      <div className="text-xs text-muted-foreground">Funding</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Faculty */}
      <section className="py-24 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">
                Featured Faculty
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Meet some of the brilliant minds leading research at Avirat .
              </p>
            </div>
            <Button variant="outline" asChild className="w-fit bg-transparent">
              <Link href="#">
                View All Faculty
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div ref={facultyRef} className="grid md:grid-cols-3 gap-8">
            {faculty.map((member, index) => (
              <Card
                key={member.name}
                className={`group bg-card border-border overflow-hidden transition-all duration-500 hover:shadow-xl ${facultyInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: facultyInView ? `${index * 150}ms` : '0ms' }}
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src={member.image || '/placeholder.svg'}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-primary-foreground">
                    <h3 className="text-xl font-semibold">{member.name}</h3>
                    <p className="text-sm text-primary-foreground/80">{member.title}</p>
                    <p className="text-sm text-accent mt-1">{member.specialty}</p>
                  </div>
                </div>
                <CardContent className="p-4">
                  <div className="flex flex-wrap gap-2">
                    {member.awards.map((award) => (
                      <span
                        key={award}
                        className="inline-flex items-center gap-1 text-xs px-2 py-1 rounded-full bg-accent/10 text-accent"
                      >
                        <Award className="h-3 w-3" />
                        {award}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Publications */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">
                Recent Publications
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Browse our latest research contributions to leading academic journals.
              </p>
            </div>
            <Button variant="outline" asChild className="w-fit bg-transparent">
              <Link href="#">
                View All Publications
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="space-y-4">
            {publications.map((pub, index) => (
              <Card
                key={index}
                className="bg-card border-border group hover:bg-secondary/50 transition-colors"
              >
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-foreground group-hover:text-accent transition-colors mb-2">
                        {pub.title}
                      </h3>
                      <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <BookOpen className="h-4 w-4" />
                          {pub.journal}
                        </span>
                        <span>{pub.date}</span>
                        <span>{pub.authors}</span>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm" className="shrink-0">
                      Read Paper
                      <ArrowUpRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Research Centers */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
                40+ Research Centers & Institutes
              </h2>
              <p className="text-xl text-primary-foreground/80 leading-relaxed mb-8">
                Our research centers bring together faculty, students, and industry partners to
                tackle the world's most pressing challenges.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { icon: FlaskConical, label: 'Institute for Advanced Study' },
                  { icon: Microscope, label: 'Biomedical Research Center' },
                  { icon: Lightbulb, label: 'Innovation Lab' },
                  { icon: Globe2, label: 'Global Policy Institute' },
                ].map((center) => (
                  <div
                    key={center.label}
                    className="flex items-center gap-3 p-3 rounded-lg bg-primary-foreground/10"
                  >
                    <center.icon className="h-5 w-5 text-accent" />
                    <span className="text-sm font-medium">{center.label}</span>
                  </div>
                ))}
              </div>
              <Button size="lg" variant="secondary" asChild>
                <Link href="#">
                  Explore All Centers
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="relative aspect-square rounded-2xl overflow-hidden bg-primary-foreground/10">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-8xl font-bold text-accent mb-4">40+</div>
                  <div className="text-xl text-primary-foreground/80">Research Centers</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-secondary/30">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-6">
            Join Our Research Community
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Whether you're a prospective student, researcher, or industry partner, there are many
            ways to engage with research at Avirat .
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/programs">
                Graduate Programs
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="bg-transparent">
              <Link href="/contact">Partner With Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
