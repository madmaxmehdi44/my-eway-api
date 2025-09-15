// types/medicine.ts

export interface UnitValue {
    value: number
    unit: string
  }
  
  export interface Category {
    id: number
    name: { en: string }
    parent: number
    order: number
  }
  
  export interface Brand {
    id: number
    name: string
  }
  
  export interface Organization {
    id: number
    name: string
    type: string
    contactInformation: {
      address: string | null
      city: string | null
      country: string | null
      url: string | null
    }
  }
  
  export interface PhotoFormats {
    thumbnail: string
    medium: string
    large: string
    huge: string
    thumbnailWebp: string
    mediumWebp: string
    largeWebp: string
    hugeWebp: string
  }
  
  export interface Photo {
    id: number
    photoType: string
    formats: PhotoFormats
  }
  
  export interface Medicine {
    id: string
    name: { en: string }
    status: string
    requiresLegalText: boolean
    weightWithUnit: UnitValue
    widthWithUnit: UnitValue
    lengthWithUnit: UnitValue
    depthWithUnit: UnitValue
    ean: string[]
    eanGtin12: string | null
    eanGtin13: string | null
    supplierReference: string
    vat: number
    publicCategories: Category[]
    brands: Brand[]
    organizations: Organization[]
    photos: Photo[]
    conservationLabel: { en: string }
    conservationMin: { celsius: UnitValue }
    conservationMax: { celsius: UnitValue }
    // add other fields as needed...
  }