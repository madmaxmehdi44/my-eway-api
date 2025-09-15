// components/MedicineList.tsx
"use client"

import { Medicine } from '@/types/medicine'
import MedicineCard from './MedicineCard'

export default function MedicineList({ items }: { items: Medicine[] }) {
  console.log('>>> items:', items)

  const list = Array.isArray(items) ? items : []

  return (
    <div className= "grid" >
    {
      items.map(med => (
        <MedicineCard key= { med.id } med = { med } />
            ))
    }

    < style jsx > {`
        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1rem;
        }
      `} </style>

  </div>
    )
}