import type { Metadata } from "next"
import { Header } from "@/app/(frontend)/components/header"
import { Footer } from "@/app/(frontend)/components/footer"
import { ContactPageContent } from "@/app/(frontend)/components/contact-page-content"

export const metadata: Metadata = {
  title: "Contact Us | Avirat University",
  description: "Get in touch with Avirat University. Find contact information for admissions, departments, and general inquiries. Schedule a campus visit.",
}

export default function ContactPage() {
  return (
    <main>
      <Header />
      <ContactPageContent />
      <Footer />
    </main>
  )
}
