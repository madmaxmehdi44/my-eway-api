// components/MedicineCard.tsx
"use client"
import { Medicine } from '@/types/medicine'
import Image from 'next/image'
import EwayPayForm from './EwayPayForm'

export default function MedicineCard({ med }: { med: Medicine }) {
    const img = med.photos[0]?.formats.mediumWebp || '/images/placeholder.png'

    return (
        <div className="card">
            <Image src={img} alt={med.name.en} width={200} height={200} />
            <h3>{med.name.en}</h3>
            <p>Status: {med.status}</p>
            <p>EAN: {med.eanGtin13 || med.ean.join(', ')}</p>
            <p>Weight: {med.weightWithUnit.value}{med.weightWithUnit.unit}</p>
            <p>Dimensions: {med.widthWithUnit.value}×{med.lengthWithUnit.value}×{med.depthWithUnit.value} {med.widthWithUnit.unit}</p>
            <p>Category: {med.publicCategories.map(c => c.name.en).join(' / ')}</p>
            <p>Brand: {med.brands.map(b => b.name).join(', ')}</p>
            <p>Keep at: {med.conservationLabel.en} ({med.conservationMin.celsius.value}–{med.conservationMax.celsius.value}{med.conservationMin.celsius.unit})</p>
            < EwayPayForm />

            <style jsx>{`
        .card {
          border: 1px solid #ddd;
          padding: 1rem;
          border-radius: 6px;
          text-align: center;
        }
        .card h3 {
          margin: 0.5rem 0;
        }
      `}</style>
        </div>
    )
}