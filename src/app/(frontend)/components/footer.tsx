import Link from 'next/link'
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from 'lucide-react'

const footerLinks = {
  academics: [
    { name: 'Undergraduate Programs', href: '/programs' },
    { name: 'Graduate Programs', href: '/programs' },
    { name: 'Research', href: '/research' },
    { name: 'Academic Calendar', href: '/news' },
    { name: 'Libraries', href: '/campus' },
  ],
  admissions: [
    { name: 'Apply Now', href: '/admissions' },
    { name: 'Visit Campus', href: '/campus' },
    { name: 'Tuition & Aid', href: '/admissions#deadlines' },
    { name: 'International Students', href: '/admissions' },
    { name: 'Transfer Students', href: '/admissions' },
  ],
  campus: [
    { name: 'Student Life', href: '/campus' },
    { name: 'Housing & Dining', href: '/campus' },
    { name: 'Photo Gallery', href: '/gallery' },
    { name: 'Virtual Tour', href: '/campus#virtual-tour' },
    { name: 'Campus Map', href: '/contact' },
  ],
  about: [
    { name: 'Our History', href: '/' },
    { name: 'Research & Faculty', href: '/research' },
    { name: 'News & Events', href: '/news' },
    { name: 'Contact Us', href: '/contact' },
    { name: 'Careers', href: '/contact' },
  ],
}

const socialLinks = [
  { name: 'Facebook', href: '#', icon: Facebook },
  { name: 'Twitter', href: '#', icon: Twitter },
  { name: 'Instagram', href: '#', icon: Instagram },
  { name: 'LinkedIn', href: '#', icon: Linkedin },
  { name: 'YouTube', href: '#', icon: Youtube },
]

export function Footer() {
  return (
    <footer id="contact" className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 md:py-20">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Logo & Contact */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1 mb-8 lg:mb-0">
            <Link href="/" className="inline-block mb-6">
              <span className="text-2xl font-bold tracking-tight">Avirat </span>
            </Link>
            <address className="not-italic text-primary-foreground/70 text-sm leading-relaxed">
              123 University Avenue
              <br />
              Cambridge, MA 02142
              <br />
              United States
            </address>
            <div className="mt-4 text-sm">
              <p className="text-primary-foreground/70">General Inquiries</p>
              <a href="tel:+16175551234" className="hover:text-accent transition-colors">
                +1 (617) 555-1234
              </a>
            </div>
            <div className="mt-2 text-sm">
              <a href="mailto:info@Avirat .edu" className="hover:text-accent transition-colors">
                info@Avirat .edu
              </a>
            </div>
          </div>

          {/* Academics */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Academics</h3>
            <ul className="space-y-3">
              {footerLinks.academics.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Admissions */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Admissions</h3>
            <ul className="space-y-3">
              {footerLinks.admissions.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Campus */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Campus</h3>
            <ul className="space-y-3">
              {footerLinks.campus.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* About */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">About</h3>
            <ul className="space-y-3">
              {footerLinks.about.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary-foreground/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="h-5 w-5" />
                </Link>
              ))}
            </div>

            {/* Legal Links */}
            <div className="flex flex-wrap justify-center gap-6 text-sm text-primary-foreground/70">
              <Link href="#" className="hover:text-primary-foreground transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-primary-foreground transition-colors">
                Terms of Use
              </Link>
              <Link href="#" className="hover:text-primary-foreground transition-colors">
                Accessibility
              </Link>
              <Link href="#" className="hover:text-primary-foreground transition-colors">
                Non-Discrimination
              </Link>
            </div>
          </div>

          {/* Copyright */}
          <p className="text-center text-sm text-primary-foreground/50 mt-8">
            © {new Date().getFullYear()} Avirat University. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
