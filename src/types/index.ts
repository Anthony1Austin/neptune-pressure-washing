export interface Service {
  id: string
  name: string
  slug: string
  description: string
  shortDescription: string
  keywords: string[]
  icon?: string
}

export interface Testimonial {
  id: string
  name: string
  service: string
  rating: number
  text: string
  date: string
  image?: string
}

export interface BeforeAfter {
  id: string
  service: string
  beforeImage: string
  afterImage: string
  description: string
}

export interface BookingFormData {
  name: string
  email: string
  phone: string
  service: string
  address: string
  preferredDate?: string
  preferredTime?: string
  message?: string
}
