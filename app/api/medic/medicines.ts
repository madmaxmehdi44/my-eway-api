// pages/api/medicines.ts
import { Medicine } from '@/types/medicine'
import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Medicine[]>
) {
    const medicines: Medicine[] = [
        {
            id: 'M00002DFF7',
            name: { en: 'Thermoskin Th Lumbar Support Xxl87227' },
            status: 'active',
            requiresLegalText: false,
            weightWithUnit: { value: 0.37, unit: 'kg' },
            widthWithUnit: { value: 15, unit: 'cm' },
            lengthWithUnit: { value: 6, unit: 'cm' },
            depthWithUnit: { value: 27, unit: 'cm' },
            ean: ['609580872276', '0609580872276'],
            eanGtin12: '609580872276',
            eanGtin13: '0609580872276',
            supplierReference: '87227',
            vat: 0,
            publicCategories: [
                { id: 435, name: { en: 'Back' }, parent: 248, order: 9 }
            ],
            brands: [{ id: 411, name: 'Thermoskin' }],
            organizations: [
                {
                    id: 210,
                    name: 'Thermoskin',
                    type: 'supplier',
                    contactInformation: {
                        address: null,
                        city: null,
                        country: null,
                        url: 'https://thermoskin.com/'
                    }
                },
                {
                    id: 937,
                    name: 'United Pacific Industries',
                    type: 'supplier',
                    contactInformation: {
                        address: '10 Eastspur Ct',
                        city: '',
                        country: 'AU',
                        url: null
                    }
                }
            ],
            photos: [
                {
                    id: 117550,
                    photoType: 'packshot',
                    formats: {
                        thumbnail: 'https://assets.au.medipim.com/media/thumbnail/...jpeg',
                        medium: 'https://assets.au.medipim.com/media/medium/...jpeg',
                        large: 'https://assets.au.medipim.com/media/large/...jpeg',
                        huge: 'https://assets.au.medipim.com/media/huge/...jpeg',
                        thumbnailWebp: 'https://assets.au.medipim.com/media/thumbnail/...webp',
                        mediumWebp: 'https://assets.au.medipim.com/media/medium/...webp',
                        largeWebp: 'https://assets.au.medipim.com/media/large/...webp',
                        hugeWebp: 'https://assets.au.medipim.com/media/huge/...webp'
                    }
                }
            ],
            conservationLabel: { en: 'Room temperature' },
            conservationMin: { celsius: { value: 15, unit: '°C' } },
            conservationMax: { celsius: { value: 25, unit: '°C' } }
        }
        // …more items
    ]

res.status(200).json(medicines)
}