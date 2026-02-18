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
import { Input } from '@/app/(frontend)/components/ui/input'
import { Textarea } from '@/app/(frontend)/components/ui/textarea'
import { Label } from '@/app/(frontend)/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/app/(frontend)/components/ui/select'
import { ArrowRight, Building2, Clock, Mail, MapPin, Phone } from 'lucide-react'
import { useScrollAnimation } from '@/app/(frontend)/hooks/use-scroll-animation'

const departments = [
  {
    name: 'Admissions Office',
    email: 'admissions@Avirat .edu',
    phone: '(555) 123-4567',
    hours: 'Mon-Fri, 9:00 AM - 5:00 PM',
  },
  {
    name: 'Financial Aid',
    email: 'finaid@Avirat .edu',
    phone: '(555) 123-4568',
    hours: 'Mon-Fri, 9:00 AM - 4:30 PM',
  },
  {
    name: 'Registrar',
    email: 'registrar@Avirat .edu',
    phone: '(555) 123-4569',
    hours: 'Mon-Fri, 8:30 AM - 5:00 PM',
  },
  {
    name: 'Student Services',
    email: 'studentservices@Avirat .edu',
    phone: '(555) 123-4570',
    hours: 'Mon-Fri, 8:00 AM - 6:00 PM',
  },
]

const quickLinks = [
  { label: 'Schedule a Campus Visit', href: '/campus#virtual-tour' },
  { label: 'Request Information', href: '/admissions' },
  { label: 'Apply Now', href: '/admissions' },
  { label: 'Find a Program', href: '/programs' },
]

export function ContactPageContent() {
  const { ref: headerRef, isInView: headerInView } = useScrollAnimation()
  const { ref: formRef, isInView: formInView } = useScrollAnimation()

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div
            ref={headerRef}
            className={`max-w-3xl transition-all duration-700 ${headerInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <p className="text-sm uppercase tracking-widest text-accent mb-4">Get in Touch</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-primary-foreground/80 leading-relaxed">
              Have questions? We're here to help. Reach out to our team and we'll get back to you as
              soon as possible.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-8 bg-secondary/50 border-b border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-center">
            {quickLinks.map((link) => (
              <Button key={link.label} variant="outline" asChild className="bg-transparent">
                <Link href={link.href}>
                  {link.label}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div ref={formRef}>
              <h2
                className={`text-2xl md:text-3xl font-bold tracking-tight text-foreground mb-6 transition-all duration-700 ${formInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              >
                Send Us a Message
              </h2>
              <Card
                className={`bg-card border-border transition-all duration-700 delay-100 ${formInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              >
                <CardContent className="p-6">
                  <form className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input id="firstName" placeholder="John" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input id="lastName" placeholder="Doe" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="john@example.com" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="department">Department</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a department" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="admissions">Admissions</SelectItem>
                          <SelectItem value="finaid">Financial Aid</SelectItem>
                          <SelectItem value="registrar">Registrar</SelectItem>
                          <SelectItem value="student">Student Services</SelectItem>
                          <SelectItem value="general">General Inquiry</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input id="subject" placeholder="How can we help?" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us more about your inquiry..."
                        rows={5}
                      />
                    </div>
                    <Button type="submit" className="w-full">
                      Send Message
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground mb-6">
                Contact Information
              </h2>

              {/* Main Address */}
              <Card className="bg-primary text-primary-foreground border-0 mb-6">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <MapPin className="h-6 w-6 text-accent flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-2">Main Campus</h3>
                      <p className="text-primary-foreground/80">
                        1 University Drive
                        <br />
                        Avirat , CA 94000
                        <br />
                        United States
                      </p>
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4 mt-6 pt-6 border-t border-primary-foreground/20">
                    <div className="flex items-center gap-3">
                      <Phone className="h-5 w-5 text-accent" />
                      <div>
                        <p className="text-sm text-primary-foreground/70">Main Line</p>
                        <p className="font-medium">(555) 123-4500</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="h-5 w-5 text-accent" />
                      <div>
                        <p className="text-sm text-primary-foreground/70">Email</p>
                        <p className="font-medium">info@Avirat .edu</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Departments */}
              <h3 className="text-lg font-semibold text-foreground mb-4">Departments</h3>
              <div className="space-y-4">
                {departments.map((dept) => (
                  <Card key={dept.name} className="bg-card border-border">
                    <CardContent className="p-4">
                      <h4 className="font-semibold text-foreground mb-2">{dept.name}</h4>
                      <div className="space-y-1 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Mail className="h-4 w-4" />
                          <a
                            href={`mailto:${dept.email}`}
                            className="hover:text-accent transition-colors"
                          >
                            {dept.email}
                          </a>
                        </div>
                        <div className="flex items-center gap-2">
                          <Phone className="h-4 w-4" />
                          {dept.phone}
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4" />
                          {dept.hours}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-24 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">
              Find Us
            </h2>
            <p className="text-lg text-muted-foreground">
              Located in the heart of Northern California, our campus is easily accessible by car,
              train, or plane.
            </p>
          </div>
          <Card className="bg-card border-border overflow-hidden">
            <div className="aspect-[21/9] bg-secondary flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-12 w-12 text-accent mx-auto mb-4" />
                <p className="text-muted-foreground">Interactive map would be displayed here</p>
                <Button variant="outline" className="mt-4 bg-transparent" asChild>
                  <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer">
                    Open in Google Maps
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Visit CTA */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <Building2 className="h-12 w-12 text-accent mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Visit Our Campus</h2>
          <p className="text-xl text-primary-foreground/80 mb-8">
            Experience Avirat in person. Schedule a campus tour and see what makes our community
            special.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/campus">
                Schedule a Visit
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
            >
              <Link href="/campus#virtual-tour">Take Virtual Tour</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
