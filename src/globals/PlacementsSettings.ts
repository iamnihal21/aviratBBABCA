import { GlobalConfig } from 'payload'

export const PlacementsSettings: GlobalConfig = {
  slug: 'placements-settings',
  access: { read: () => true },
  fields: [
    {
      name: 'stats',
      type: 'array',
      maxRows: 4,
      fields: [
        { name: 'value', type: 'text', required: true },
        { name: 'label', type: 'text', required: true },
        { name: 'iconType', type: 'select', options: ['trending', 'dollar', 'award', 'building'] }
      ]
    },
    {
      name: 'highlights',
      type: 'array',
      fields: [
        { name: 'title', type: 'text', required: true },
        { name: 'count', type: 'text', required: true },
        { name: 'description', type: 'textarea', required: true },
        { name: 'iconType', type: 'select', options: ['award', 'briefcase', 'map-pin'] },
        { 
          name: 'colorTheme', 
          type: 'select', 
          options: [
            { label: 'Yellow', value: 'from-yellow-500 to-orange-500' },
            { label: 'Blue', value: 'from-blue-500 to-cyan-500' },
            { label: 'Green', value: 'from-green-500 to-emerald-500' }
          ] 
        }
      ]
    }
  ]
}