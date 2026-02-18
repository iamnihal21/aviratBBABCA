import type { Metadata } from "next"
import { Header } from "@/app/(frontend)/components/header"
import { Footer } from "@/app/(frontend)/components/footer"
import { ProgramsPageContent } from "@/app/(frontend)/components/programs-page-content"

export const metadata: Metadata = {
  title: "Programs & Departments | Avirat University",
  description: "Explore over 200 undergraduate and graduate programs across six schools at Avirat University. Find your path in engineering, sciences, medicine, business, arts, and law.",
}

export default function ProgramsPage() {
  return (
    <main>
      <Header />
      <ProgramsPageContent />
      <Footer />
    </main>
  )
}
