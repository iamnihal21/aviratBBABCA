'use client'

import Image from 'next/image'
import Link from 'next/link'
import dynamic from 'next/dynamic'
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
  Building2,
  Coffee,
  Dumbbell,
  Home,
  Library,
  MapPin,
  Music,
  Palette,
  TreePine,
  Users,
  Utensils,
} from 'lucide-react'
import { useScrollAnimation } from '@/app/(frontend)/hooks/use-scroll-animation'

const Campus3DTour = dynamic(
  () => import('@/app/(frontend)/components/campus-3d-tour').then((mod) => mod.Campus3DTour),
  { ssr: false },
)

const facilities = [
  {
    category: 'Academic',
    items: [
      { name: 'Central Library', description: '5 million volumes, 24/7 access', icon: Library },
      { name: 'Science Complex', description: 'State-of-the-art laboratories', icon: Building2 },
      { name: 'Engineering Hub', description: 'Maker spaces & innovation labs', icon: Building2 },
    ],
  },
  {
    category: 'Living',
    items: [
      { name: 'Residence Halls', description: '12 halls, 5,000+ beds', icon: Home },
      { name: 'Dining Services', description: '15 dining locations', icon: Utensils },
      { name: 'Coffee Shops', description: '8 campus cafes', icon: Coffee },
    ],
  },
  {
    category: 'Recreation',
    items: [
      { name: 'Athletics Center', description: 'Olympic-standard facilities', icon: Dumbbell },
      { name: 'Performing Arts', description: 'Concert halls & theaters', icon: Music },
      { name: 'Art Galleries', description: '3 campus museums', icon: Palette },
    ],
  },
]

const housingOptions = [
  {
    name: 'First-Year Housing',
    description: 'Designed for new students to build community and transition to university life.',
    features: [
      'Single & double rooms',
      'Live-in advisors',
      'Meal plans included',
      'Learning communities',
    ],
    price: '$12,500/year',
  },
  {
    name: 'Upperclass Housing',
    description: 'Suite and apartment-style living for sophomores, juniors, and seniors.',
    features: [
      'Suite-style rooms',
      'Kitchen facilities',
      'More independence',
      'Themed housing options',
    ],
    price: '$14,000/year',
  },
  {
    name: 'Graduate Housing',
    description: 'Apartment-style accommodations for graduate and professional students.',
    features: [
      'Studio & 1-bedroom',
      'Full kitchens',
      'Family housing available',
      'Flexible leases',
    ],
    price: '$16,500/year',
  },
]

const studentOrgs = [
  { count: '500+', label: 'Student Organizations' },
  { count: '25', label: 'Club Sports' },
  { count: '40+', label: 'Greek Organizations' },
  { count: '100+', label: 'Cultural Groups' },
]

const galleryImages = [
  {
    src: '/gallery/campus-aerial.jpg',
    alt: 'Aerial view of campus',
    span: 'col-span-2 row-span-2',
  },
  { src: '/gallery/historic-hall.jpg', alt: 'Historic Hall', span: 'col-span-1' },
  { src: '/gallery/science-building.jpg', alt: 'Science Building', span: 'col-span-1' },
  { src: '/gallery/graduation.jpg', alt: 'Graduation ceremony', span: 'col-span-1' },
  { src: '/gallery/students-lawn.jpg', alt: 'Students on the lawn', span: 'col-span-1' },
  { src: '/gallery/library-interior.jpg', alt: 'Library interior', span: 'col-span-2' },
  { src: '/gallery/research-lab.jpg', alt: 'Research laboratory', span: 'col-span-1' },
  { src: '/gallery/autumn-campus.jpg', alt: 'Autumn on campus', span: 'col-span-1' },
]

export function CampusPageContent() {
  const { ref: headerRef, isInView: headerInView } = useScrollAnimation()
  const { ref: facilitiesRef, isInView: facilitiesInView } = useScrollAnimation({ threshold: 0.05 })

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div
            ref={headerRef}
            className={`max-w-3xl transition-all duration-700 ${headerInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <p className="text-sm uppercase tracking-widest text-accent mb-4">Campus Life</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              A Vibrant Community
            </h1>
            <p className="text-xl text-primary-foreground/80 leading-relaxed">
              Experience a dynamic campus culture where academic excellence meets personal growth.
              Our 300-acre campus offers everything you need to thrive.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-8 bg-secondary/50 border-b border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {studentOrgs.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-foreground">{stat.count}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Virtual Tour */}
      <section id="virtual-tour" className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">
              Virtual Campus Tour
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our beautiful 300-acre campus from anywhere in the world. Click on markers or
              use the navigation buttons to visit different locations.
            </p>
          </div>
          <div className="h-[600px] rounded-2xl overflow-hidden border border-border">
            <Campus3DTour />
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-24 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">
                Campus Gallery
              </h2>
              <p className="text-lg text-muted-foreground">
                Take a visual journey through our historic and modern campus.
              </p>
            </div>
            <Button variant="outline" asChild className="w-fit bg-transparent">
              <Link href="/gallery">
                View Full Gallery
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className={`relative rounded-xl overflow-hidden group cursor-pointer ${image.span}`}
                style={{ aspectRatio: image.span.includes('row-span-2') ? '1/1' : '4/3' }}
              >
                <Image
                  src={image.src || '/placeholder.svg'}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 text-primary-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-sm font-medium">{image.alt}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">
              World-Class Facilities
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our campus features state-of-the-art academic buildings, comfortable living spaces,
              and exceptional recreational facilities.
            </p>
          </div>

          <Tabs defaultValue="Academic" className="w-full">
            <TabsList className="mb-8">
              {facilities.map((cat) => (
                <TabsTrigger key={cat.category} value={cat.category}>
                  {cat.category}
                </TabsTrigger>
              ))}
            </TabsList>

            {facilities.map((cat) => (
              <TabsContent key={cat.category} value={cat.category}>
                <div ref={facilitiesRef} className="grid md:grid-cols-3 gap-6">
                  {cat.items.map((item, index) => (
                    <Card
                      key={item.name}
                      className={`bg-card border-border hover:shadow-lg transition-all duration-500 hover:-translate-y-1 ${facilitiesInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                      style={{ transitionDelay: facilitiesInView ? `${index * 100}ms` : '0ms' }}
                    >
                      <CardHeader>
                        <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                          <item.icon className="h-6 w-6 text-accent" />
                        </div>
                        <CardTitle className="text-lg">{item.name}</CardTitle>
                        <CardDescription>{item.description}</CardDescription>
                      </CardHeader>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Housing */}
      <section className="py-24 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">
              Housing Options
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Find the perfect home during your time at Avirat . We offer diverse housing options to
              fit every lifestyle.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {housingOptions.map((option, index) => (
              <Card key={option.name} className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="text-xl">{option.name}</CardTitle>
                  <CardDescription className="leading-relaxed">
                    {option.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {option.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-2 text-sm text-muted-foreground"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="pt-4 border-t border-border">
                    <span className="text-2xl font-bold text-foreground">{option.price}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Student Life */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
                More Than Academics
              </h2>
              <p className="text-xl text-primary-foreground/80 leading-relaxed mb-8">
                With over 500 student organizations, 25 club sports, and countless events throughout
                the year, there's always something happening on campus.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { icon: Users, label: 'Greek Life' },
                  { icon: Music, label: 'Performance Groups' },
                  { icon: TreePine, label: 'Outdoor Recreation' },
                  { icon: Palette, label: 'Arts & Culture' },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center gap-3 p-3 rounded-lg bg-primary-foreground/10"
                  >
                    <item.icon className="h-5 w-5 text-accent" />
                    <span className="text-sm font-medium">{item.label}</span>
                  </div>
                ))}
              </div>
              <Button size="lg" variant="secondary" asChild>
                <Link href="#">
                  Explore Student Organizations
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <Card className="bg-primary-foreground/10 border-primary-foreground/20">
              <CardContent className="p-8">
                <blockquote className="text-xl text-primary-foreground font-medium leading-relaxed mb-6">
                  &ldquo;My time at Avirat has been transformative. The opportunities for research,
                  the supportive community, and the lifelong friendships I've made here have shaped
                  who I am today.&rdquo;
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary-foreground/20" />
                  <div>
                    <div className="font-semibold text-primary-foreground">Jessica Park</div>
                    <div className="text-sm text-primary-foreground/70">
                      Class of 2025, Biomedical Engineering
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Visit CTA */}
      <section className="py-24 bg-secondary/30">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <MapPin className="h-12 w-12 text-accent mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">
            Visit Us In Person
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Nothing compares to experiencing Avirat firsthand. Schedule a campus visit and see what
            makes our community special.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/contact">
                Schedule a Visit
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="bg-transparent">
              <Link href="#virtual-tour">Take Virtual Tour</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
