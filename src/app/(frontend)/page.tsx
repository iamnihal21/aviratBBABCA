import { Header } from "@/app/(frontend)/components/header"
import { Hero } from "@/app/(frontend)/components/hero"
import { StatsSection } from "@/app/(frontend)/components/stats-section"
import { ProgramsPreview } from "@/app/(frontend)/components/programs-preview"
import { AdmissionsPreview } from "@/app/(frontend)/components/admissions-preview"
import { Gallery } from "@/app/(frontend)/components/gallery"
import { VirtualTourSection } from "@/app/(frontend)/components/virtual-tour-section"
import { NewsPreview } from "@/app/(frontend)/components/news-preview"
import { Footer } from "@/app/(frontend)/components/footer"

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <StatsSection />
      <ProgramsPreview />
      <AdmissionsPreview />
      <Gallery />
      <VirtualTourSection />
      <NewsPreview />
      <Footer />
    </main>
  )
}
