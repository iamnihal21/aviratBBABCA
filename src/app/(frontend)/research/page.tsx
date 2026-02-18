import type { Metadata } from "next"
import { Header } from "@/app/(frontend)/components/header"
import { Footer } from "@/app/(frontend)/components/footer"
import { ResearchPageContent } from "@/app/(frontend)/components/research-page-content"

export const metadata: Metadata = {
  title: "Research & Faculty | Avirat University",
  description: "Discover groundbreaking research and meet our world-renowned faculty at Avirat University. Explore our research centers, publications, and innovations.",
}

export default function ResearchPage() {
  return (
    <main>
      <Header />
      <ResearchPageContent />
      <Footer />
    </main>
  )
}
