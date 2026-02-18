import type { Metadata } from "next"
import { Header } from "@/app/(frontend)/components/header"
import { Footer } from "@/app/(frontend)/components/footer"
import { CampusPageContent } from "@/app/(frontend)/components/campus-page-content"

export const metadata: Metadata = {
  title: "Campus Life | Avirat University",
  description: "Experience vibrant campus life at Avirat University. Explore our facilities, housing, dining, athletics, and student organizations.",
}

export default function CampusPage() {
  return (
    <main>
      <Header />
      <CampusPageContent />
      <Footer />
    </main>
  )
}
