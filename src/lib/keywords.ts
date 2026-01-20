// SEO Keywords for Neptune Pressure Washing - Massillon, OH

export const primaryKeywords = {
  main: 'pressure washing massillon ohio',
  house: 'house washing massillon',
  deck: 'deck cleaning massillon ohio',
  gutter: 'gutter cleaning massillon',
  roof: 'roof washing massillon ohio',
  power: 'power washing massillon',
  soft: 'soft washing massillon ohio',
  concrete: 'concrete cleaning massillon',
  driveway: 'driveway cleaning massillon',
  fence: 'fence cleaning massillon',
  patio: 'patio cleaning massillon',
  brick: 'brick cleaning massillon',
  sidewalk: 'sidewalk cleaning massillon',
}

export const secondaryKeywords = [
  'pressure washing near me',
  'exterior cleaning massillon',
  'professional pressure washing massillon',
  'residential pressure washing massillon',
  'commercial pressure washing massillon',
  'eco-friendly pressure washing massillon',
  'licensed pressure washing massillon',
  'pressure washing cost massillon ohio',
]

export const longTailKeywords = [
  'best pressure washing company massillon ohio',
  'professional house washing services massillon',
  'roof cleaning services massillon ohio',
  'deck restoration massillon',
  'gutter cleaning services massillon ohio',
  'driveway pressure washing massillon',
  'fence pressure washing massillon',
  'patio pressure washing massillon',
  'brick pressure washing massillon',
  'concrete pressure washing massillon',
]

export const serviceAreas = [
  'Massillon, OH',
  'Canton, OH',
  'North Canton, OH',
  'Barberton, OH',
  'Green, OH',
  'Jackson, OH',
  'Hartville, OH',
  'Uniontown, OH',
  'Stark County, OH',
  'Summit County, OH',
  'Belden Village, OH',
  'Clinton, OH',
  'New Franklin, OH',
  'Norton, OH',
  'Plain Township, OH',
  'Portage Lakes, OH',
]

export function getKeywordsForService(serviceSlug: string): string[] {
  const serviceKeywords: Record<string, string[]> = {
    'house-wash': [
      'house washing massillon',
      'exterior house cleaning massillon',
      'home pressure washing massillon',
      'residential house washing massillon ohio',
    ],
    'gutter-cleaning': [
      'gutter cleaning massillon',
      'gutter cleaning services massillon ohio',
      'gutter maintenance massillon',
      'gutter cleaning near me',
    ],
    'roof-washing': [
      'roof washing massillon',
      'roof cleaning massillon ohio',
      'soft wash roof cleaning massillon',
      'roof pressure washing massillon',
    ],
    'concrete-cleaning': [
      'concrete cleaning massillon',
      'concrete pressure washing massillon',
      'driveway cleaning massillon',
      'concrete restoration massillon',
    ],
    'fences-decks': [
      'fence cleaning massillon',
      'deck cleaning massillon ohio',
      'fence pressure washing massillon',
      'deck restoration massillon',
    ],
    'brick-cleaning': [
      'brick cleaning massillon',
      'brick pressure washing massillon',
      'stone cleaning massillon',
      'brick restoration massillon',
    ],
    'patio-deck-cleaning': [
      'patio cleaning massillon',
      'patio pressure washing massillon',
      'deck cleaning massillon',
      'outdoor cleaning massillon',
    ],
    'soft-washing': [
      'soft washing massillon',
      'soft wash services massillon ohio',
      'gentle pressure washing massillon',
      'soft wash roof cleaning massillon',
    ],
    'power-washing': [
      'power washing massillon',
      'power washing services massillon ohio',
      'commercial power washing massillon',
      'high pressure washing massillon',
    ],
    'sidewalk-cleaning': [
      'sidewalk cleaning massillon',
      'sidewalk pressure washing massillon',
      'walkway cleaning massillon',
      'sidewalk cleaning services massillon',
    ],
  }

  return serviceKeywords[serviceSlug] || []
}
