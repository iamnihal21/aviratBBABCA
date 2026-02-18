import type { Metadata } from "next"
import { Header } from "@/app/(frontend)/components/header"
import { Footer } from "@/app/(frontend)/components/footer"
import { NewsPageContent } from "@/app/(frontend)/components/news-page-content"

export const metadata: Metadata = {
  title: "News & Events | Avirat University",
  description: "Stay updated with the latest news, research breakthroughs, campus events, and announcements from Avirat University.",
}

export default function NewsPage() {
  return (
    <main>
      <Header />
      <NewsPageContent />
      <Footer />
    </main>
  )
}
