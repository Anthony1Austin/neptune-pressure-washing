// Schema markup generator for SEO

export interface LocalBusinessSchema {
  name: string
  description: string
  url: string
  telephone: string
  email?: string
  address: {
    streetAddress: string
    addressLocality: string
    addressRegion: string
    postalCode: string
    addressCountry: string
  }
  geo?: {
    latitude: string
    longitude: string
  }
  openingHours?: string[]
  priceRange?: string
  image?: string[]
  sameAs?: string[]
}

export interface ServiceSchema {
  name: string
  description: string
  provider: {
    name: string
    url: string
  }
  areaServed: string[]
  serviceType: string
}

export interface FAQSchema {
  question: string
  answer: string
}

export function generateLocalBusinessSchema(data: LocalBusinessSchema) {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: data.name,
    description: data.description,
    url: data.url,
    telephone: data.telephone,
    email: data.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: data.address.streetAddress,
      addressLocality: data.address.addressLocality,
      addressRegion: data.address.addressRegion,
      postalCode: data.address.postalCode,
      addressCountry: data.address.addressCountry,
    },
    ...(data.geo && {
      geo: {
        '@type': 'GeoCoordinates',
        latitude: data.geo.latitude,
        longitude: data.geo.longitude,
      },
    }),
    ...(data.openingHours && { openingHours: data.openingHours }),
    ...(data.priceRange && { priceRange: data.priceRange }),
    ...(data.image && { image: data.image }),
    ...(data.sameAs && { sameAs: data.sameAs }),
  }
}

export function generateServiceSchema(data: ServiceSchema) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: data.name,
    description: data.description,
    provider: {
      '@type': 'LocalBusiness',
      name: data.provider.name,
      url: data.provider.url,
    },
    areaServed: data.areaServed.map((area) => ({
      '@type': 'City',
      name: area,
    })),
    serviceType: data.serviceType,
  }
}

export function generateFAQSchema(faqs: FAQSchema[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
}

export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Neptune Pressure Washing',
    url: 'https://www.neptunewashpros.com',
    logo: 'https://www.neptunewashpros.com/images/3802.PNG',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+1-330-412-9330',
      contactType: 'Customer Service',
      areaServed: 'US',
      availableLanguage: 'English',
    },
    sameAs: [
      'https://www.facebook.com/profile.php?id=100063620580327',
      'https://www.yelp.com/biz/neptune-pressure-washing-massillon?osq=Neptune+Pressure+Washing',
    ],
  }
}
