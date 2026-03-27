import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { s3Storage } from '@payloadcms/storage-s3'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { StudentAchievements } from './collections/StudentAchievements'
import { CollegeAchievements } from './collections/CollegeAchievements'
import { Gallery } from './collections/Gallery'
import { Events } from './collections/Events'
import { Recruiters } from './collections/Recruiters'
import { Publications } from './collections/Publications'
import { Faculty } from './collections/Faculty'
import { ResearchAreas } from './collections/ResearchAreas'
import { Payments } from './collections/Payments'
import { Students } from './collections/Student'
import { Results } from './collections/Results'

import { About } from './globals/About'
import { Contact } from './globals/Contact'
import { Admissions } from './globals/Admissions'
import { Campus } from './globals/Campus'
import { PlacementsSettings } from './globals/PlacementsSettings'
import { HomeSettings } from './globals/HomeSettings'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  // Ensure this matches your Ubuntu environment precisely
  serverURL: process.env.PAYLOAD_PUBLIC_SERVER_URL || 'http://localhost:3000',
  
  // Customizing cookie names prevents Admins and Students from overwriting each other's sessions
  cookiePrefix: 'college-app',

  collections: [
    Users,
    Media,
    CollegeAchievements,
    StudentAchievements,
    Gallery,
    Events,
    Recruiters,
    ResearchAreas,
    Faculty,
    Publications,
    Payments,
    Students,
    Results,
  ],
  globals: [About, Contact, Admissions, Campus, PlacementsSettings, HomeSettings],
  editor: lexicalEditor(),
  // CRITICAL: Ensure this is set in your .env file
  secret: process.env.PAYLOAD_SECRET || 'YOUR_REALLY_SECRET_STRING_HERE',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URL || '',
    },
  }),
  sharp,
  plugins: [
    s3Storage({
      collections: {
        media: { prefix: 'media' },
      },
      bucket: process.env.S3_BUCKET!,
      config: {
        region: process.env.S3_REGION!,
        endpoint: process.env.S3_ENDPOINT,
        forcePathStyle: true,
        credentials: {
          accessKeyId: process.env.S3_ACCESS_KEY!,
          secretAccessKey: process.env.S3_SECRET_KEY!,
        },
      },
    }),
  ],
})