import { getPayloadHMR } from '@payloadcms/next/utilities'
import configPromise from '@/payload.config'

import HomeClient from '../(frontend)/components/HomeClient' // 👈 create this

export default async function Page() {
  const payload = await getPayloadHMR({ config: configPromise })

  const homeData = await payload.findGlobal({
    slug: 'home-settings',
  })

  const gallery = await payload.find({
    collection: 'gallery',
    limit: 4,
  })

  return (
    <HomeClient
      homeData={homeData}
      galleryImages={gallery.docs}
    />
  )
}