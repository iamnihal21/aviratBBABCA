import type { Metadata } from "next"
import { Header } from "@/app/(frontend)/components/header"
import { Footer } from "@/app/(frontend)/components/footer"
import { AdmissionsPageContent } from "@/app/(frontend)/components/admissions-page-content"

export const metadata: Metadata = {
  title: "Admissions | Avirat University",
  description: "Begin your journey at Avirat University. Learn about our admissions process, application deadlines, financial aid, and how to apply.",
}

export default function AdmissionsPage() {
  return (
    <main>
      <Header />
      <AdmissionsPageContent />
      <Footer />
    </main>
  )
}
