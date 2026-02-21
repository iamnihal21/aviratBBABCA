import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { s3Storage } from '@payloadcms/storage-s3'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { About } from './globals/About'
import { Contact } from './globals/Contact'
import { StudentAchievements } from './collections/StudentAchievements'
import { CollegeAchievements } from './collections/CollegeAchievements'
import { Admissions } from './globals/Admissions'
import { Campus } from './globals/Campus'
import { Gallery } from './collections/Gallery'
import { Events } from './collections/Events'
import { PlacementsSettings } from './globals/PlacementsSettings'
import { Recruiters } from './collections/Recruiters'
import { Publications } from './collections/Publications'
import { Faculty } from './collections/Faculty'
import { ResearchAreas } from './collections/ResearchAreas'
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
  ],

  globals: [About, Contact, Admissions, Campus, PlacementsSettings, HomeSettings],

  editor: lexicalEditor(),

  secret: process.env.PAYLOAD_SECRET || '',

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
      media: true,
    },
    bucket: process.env.S3_BUCKET!,
    config: {
      region: process.env.S3_REGION!,
      endpoint: process.env.S3_ENDPOINT, // important for non-AWS
      forcePathStyle: true, // prevents TLS hostname mismatch
      credentials: {
        accessKeyId: process.env.S3_ACCESS_KEY!,
        secretAccessKey: process.env.S3_SECRET_KEY!,
      },
    },
  }),
]
})
