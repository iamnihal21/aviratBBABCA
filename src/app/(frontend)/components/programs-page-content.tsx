'use client'

import Link from 'next/link'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/app/(frontend)/components/ui/card'
import { Button } from '@/app/(frontend)/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/app/(frontend)/components/ui/tabs'
import { Input } from '@/app/(frontend)/components/ui/input'
import {
  ArrowRight,
  Beaker,
  BookOpen,
  Cpu,
  Landmark,
  Palette,
  Stethoscope,
  Search,
  GraduationCap,
  Clock,
  Users,
} from 'lucide-react'
import { useScrollAnimation } from '@/app/(frontend)/hooks/use-scroll-animation'
import { useState } from 'react'

const schools = [
  {
    id: 'engineering',
    title: 'Engineering & Technology',
    description:
      'Cutting-edge programs in computer science, electrical engineering, mechanical engineering, and emerging technologies. Our engineering school is ranked #8 nationally.',
    icon: Cpu,
    color: 'from-blue-500/20 to-cyan-500/20',
    programs: [
      {
        name: 'Computer Science',
        degree: 'B.S., M.S., Ph.D.',
        duration: '4 years',
        students: 2500,
      },
      {
        name: 'Electrical Engineering',
        degree: 'B.S., M.S., Ph.D.',
        duration: '4 years',
        students: 1200,
      },
      { name: 'Mechanical Engineering', degree: 'B.S., M.S.', duration: '4 years', students: 1100 },
      { name: 'Data Science & AI', degree: 'M.S., Ph.D.', duration: '2 years', students: 800 },
      {
        name: 'Biomedical Engineering',
        degree: 'B.S., M.S., Ph.D.',
        duration: '4 years',
        students: 650,
      },
      { name: 'Aerospace Engineering', degree: 'B.S., M.S.', duration: '4 years', students: 450 },
    ],
  },
  {
    id: 'sciences',
    title: 'Sciences',
    description:
      'Explore the natural world through physics, chemistry, biology, and environmental sciences with world-class facilities and Nobel laureate faculty.',
    icon: Beaker,
    color: 'from-green-500/20 to-emerald-500/20',
    programs: [
      { name: 'Physics', degree: 'B.S., M.S., Ph.D.', duration: '4 years', students: 800 },
      { name: 'Chemistry', degree: 'B.S., M.S., Ph.D.', duration: '4 years', students: 750 },
      { name: 'Biology', degree: 'B.S., M.S., Ph.D.', duration: '4 years', students: 1100 },
      { name: 'Environmental Science', degree: 'B.S., M.S.', duration: '4 years', students: 500 },
      { name: 'Mathematics', degree: 'B.S., M.S., Ph.D.', duration: '4 years', students: 600 },
      { name: 'Neuroscience', degree: 'B.S., Ph.D.', duration: '4 years', students: 400 },
    ],
  },
  {
    id: 'medicine',
    title: 'Medicine & Health',
    description:
      'Train with leading medical professionals and researchers in our state-of-the-art medical campus and teaching hospitals.',
    icon: Stethoscope,
    color: 'from-red-500/20 to-rose-500/20',
    programs: [
      { name: 'Medicine (M.D.)', degree: 'M.D.', duration: '4 years', students: 600 },
      { name: 'Nursing', degree: 'B.S.N., M.S.N.', duration: '4 years', students: 800 },
      { name: 'Public Health', degree: 'M.P.H., Ph.D.', duration: '2 years', students: 450 },
      { name: 'Pharmacy', degree: 'Pharm.D.', duration: '4 years', students: 350 },
      { name: 'Physical Therapy', degree: 'D.P.T.', duration: '3 years', students: 200 },
      { name: 'Dentistry', degree: 'D.D.S.', duration: '4 years', students: 180 },
    ],
  },
  {
    id: 'business',
    title: 'Business & Economics',
    description:
      'Develop leadership skills and business acumen through rigorous programs taught by industry experts and academics.',
    icon: Landmark,
    color: 'from-amber-500/20 to-yellow-500/20',
    programs: [
      {
        name: 'Business Administration',
        degree: 'B.B.A., M.B.A.',
        duration: '4 years',
        students: 1500,
      },
      { name: 'Finance', degree: 'B.S., M.S.', duration: '4 years', students: 900 },
      { name: 'Economics', degree: 'B.A., M.A., Ph.D.', duration: '4 years', students: 700 },
      { name: 'Accounting', degree: 'B.S., M.S.', duration: '4 years', students: 600 },
      { name: 'Marketing', degree: 'B.S., M.S.', duration: '4 years', students: 550 },
      { name: 'Entrepreneurship', degree: 'B.S., M.S.', duration: '4 years', students: 400 },
    ],
  },
  {
    id: 'arts',
    title: 'Arts & Humanities',
    description:
      'Cultivate creativity and critical thinking through literature, history, philosophy, and the performing arts.',
    icon: Palette,
    color: 'from-purple-500/20 to-pink-500/20',
    programs: [
      {
        name: 'English Literature',
        degree: 'B.A., M.A., Ph.D.',
        duration: '4 years',
        students: 600,
      },
      { name: 'History', degree: 'B.A., M.A., Ph.D.', duration: '4 years', students: 500 },
      { name: 'Philosophy', degree: 'B.A., M.A., Ph.D.', duration: '4 years', students: 350 },
      { name: 'Fine Arts', degree: 'B.F.A., M.F.A.', duration: '4 years', students: 450 },
      { name: 'Music', degree: 'B.M., M.M.', duration: '4 years', students: 400 },
      { name: 'Theater & Drama', degree: 'B.A., M.F.A.', duration: '4 years', students: 300 },
    ],
  },
  {
    id: 'law',
    title: 'Law & Public Policy',
    description:
      "Prepare for careers in law, government, and public service with programs that shape tomorrow's leaders.",
    icon: BookOpen,
    color: 'from-slate-500/20 to-zinc-500/20',
    programs: [
      { name: 'Law (J.D.)', degree: 'J.D.', duration: '3 years', students: 700 },
      {
        name: 'Political Science',
        degree: 'B.A., M.A., Ph.D.',
        duration: '4 years',
        students: 600,
      },
      { name: 'Public Administration', degree: 'M.P.A.', duration: '2 years', students: 350 },
      { name: 'International Relations', degree: 'B.A., M.A.', duration: '4 years', students: 450 },
      { name: 'Criminal Justice', degree: 'B.A., M.A.', duration: '4 years', students: 400 },
      { name: 'Public Policy', degree: 'M.P.P., Ph.D.', duration: '2 years', students: 250 },
    ],
  },
]

export function ProgramsPageContent() {
  const { ref: headerRef, isInView: headerInView } = useScrollAnimation()
  const [searchQuery, setSearchQuery] = useState('')
  const [activeSchool, setActiveSchool] = useState('engineering')

  const currentSchool = schools.find((s) => s.id === activeSchool)
  const filteredPrograms = currentSchool?.programs.filter((p) =>
    p.name.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div
            ref={headerRef}
            className={`max-w-3xl transition-all duration-700 ${headerInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <p className="text-sm uppercase tracking-widest text-accent mb-4">Academic Programs</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Programs & Departments
            </h1>
            <p className="text-xl text-primary-foreground/80 leading-relaxed">
              Explore over 200 undergraduate and graduate programs across six world-renowned
              schools. Each program is designed to prepare you for leadership in your field.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-8 bg-secondary/50 border-b border-border sticky top-16 z-40 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search programs..."
                className="pl-10 bg-background"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex gap-2 flex-wrap justify-center">
              <Button variant="outline" size="sm" className="bg-transparent">
                Undergraduate
              </Button>
              <Button variant="outline" size="sm" className="bg-transparent">
                Graduate
              </Button>
              <Button variant="outline" size="sm" className="bg-transparent">
                Doctoral
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Content */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Tabs value={activeSchool} onValueChange={setActiveSchool} className="w-full">
            <TabsList className="flex flex-wrap h-auto gap-2 bg-transparent p-0 mb-12">
              {schools.map((school) => (
                <TabsTrigger
                  key={school.id}
                  value={school.id}
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground px-4 py-2 rounded-full border border-border data-[state=active]:border-transparent transition-all"
                >
                  <school.icon className="h-4 w-4 mr-2" />
                  {school.title}
                </TabsTrigger>
              ))}
            </TabsList>

            {schools.map((school) => (
              <TabsContent key={school.id} value={school.id} className="mt-0">
                <div className="grid lg:grid-cols-3 gap-8">
                  {/* School Info */}
                  <div className="lg:col-span-1">
                    <Card className={`bg-gradient-to-br ${school.color} border-0 sticky top-48`}>
                      <CardHeader>
                        <div className="w-16 h-16 rounded-2xl bg-background/80 flex items-center justify-center mb-4">
                          <school.icon className="h-8 w-8 text-foreground" />
                        </div>
                        <CardTitle className="text-2xl">{school.title}</CardTitle>
                        <CardDescription className="text-foreground/70 text-base leading-relaxed">
                          {school.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <Button asChild className="w-full">
                          <Link href="/admissions">
                            Apply to This School
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Programs List */}
                  <div className="lg:col-span-2 space-y-4">
                    {filteredPrograms?.map((program, index) => (
                      <Card
                        key={program.name}
                        className="group bg-card border-border hover:bg-secondary/50 transition-all duration-300 hover:shadow-md"
                      >
                        <CardContent className="p-6">
                          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                            <div className="flex-1">
                              <h3 className="text-lg font-semibold text-foreground group-hover:text-accent transition-colors">
                                {program.name}
                              </h3>
                              <p className="text-muted-foreground">{program.degree}</p>
                            </div>
                            <div className="flex items-center gap-6 text-sm text-muted-foreground">
                              <div className="flex items-center gap-2">
                                <Clock className="h-4 w-4" />
                                {program.duration}
                              </div>
                              <div className="flex items-center gap-2">
                                <Users className="h-4 w-4" />
                                {program.students.toLocaleString()} students
                              </div>
                              <Button
                                variant="ghost"
                                size="sm"
                                className="group-hover:bg-accent group-hover:text-accent-foreground transition-colors"
                              >
                                Learn More
                                <ArrowRight className="ml-2 h-4 w-4" />
                              </Button>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-secondary/30">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Connect with our admissions team to learn more about our programs and find the right fit
            for your academic goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/admissions">
                Apply Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="bg-transparent">
              <Link href="/contact">Request Information</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
