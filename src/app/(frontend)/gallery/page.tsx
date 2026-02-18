import type { Metadata } from "next"
import { Header } from "@/app/(frontend)/components/header"
import { Footer } from "@/app/(frontend)/components/footer"
import { GalleryPageContent } from "@/app/(frontend)/components/gallery-page-content"

export const metadata: Metadata = {
  title: "Photo Gallery | Avirat University",
  description: "Explore stunning photos of Avirat University's historic campus, modern facilities, student life, and memorable events.",
}

export default function GalleryPage() {
  return (
    <main>
      <Header />
      <GalleryPageContent />
      <Footer />
    </main>
  )
}
