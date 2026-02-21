import { GlobalConfig } from 'payload'

export const HomeSettings: GlobalConfig = {
  slug: 'home-settings',
  admin: { group: 'Pages' },
  access: { read: () => true },
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Hero',
          fields: [
            {
              name: 'slides',
              type: 'array',
              fields: [
                { name: 'title', type: 'text', required: true },
                { name: 'highlight', type: 'text', required: true },
                { name: 'subtitle', type: 'text', required: true },
                { name: 'description', type: 'textarea', required: true },
                { name: 'image', type: 'upload', relationTo: 'media', required: true },
              ],
            },
          ],
        },
        {
          label: 'Stats & Sanskrit',
          fields: [
            { name: 'sanskritQuote', type: 'text' },
            { name: 'quoteTranslation', type: 'text' },
            {
              name: 'stats',
              type: 'array',
              maxRows: 3,
              fields: [
                { name: 'value', type: 'text', required: true },
                { name: 'label', type: 'text', required: true },
                { name: 'description', type: 'text' },
                { 
                  name: 'color', 
                  type: 'select', 
                  options: [
                    { label: 'Blue', value: 'from-blue-500 to-cyan-500' },
                    { label: 'Green', value: 'from-green-500 to-emerald-500' },
                    { label: 'Purple', value: 'from-purple-500 to-pink-500' },
                  ] 
                },
              ],
            },
          ],
        },
        {
          label: 'Map & Footer',
          fields: [
            { name: 'mapUrl', type: 'text' },
            { name: 'address', type: 'text' },
          ],
        },
      ],
    },
  ],
}