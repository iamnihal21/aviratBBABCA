
import { getPayloadHMR } from '@payloadcms/next/utilities'
import configPromise from '@/payload.config'
import PlacementsClient from './PlacementsClient'

export default async function PlacementsPage() {
  const payload = await getPayloadHMR({ config: configPromise })
  
  const settings = await payload.findGlobal({ slug: 'placements-settings' })
  const recruitersRes = await payload.find({ collection: 'recruiters', limit: 20 })

  return <PlacementsClient settings={settings} recruiters={recruitersRes.docs} />
}