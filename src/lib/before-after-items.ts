import type { BeforeAfter } from '@/types'

/** Single source of truth for homepage before/after gallery (used by admin stats). */
export const beforeAfterGalleryItems: BeforeAfter[] = [
  {
    id: 'driveway-cleaning-dw',
    service: 'Driveway Cleaning',
    beforeImage: '/images/B_A_Pics/DW_B.png',
    afterImage: '/images/B_A_Pics/DW_A.png',
    description: 'Driveway cleaning transformation.',
  },
  {
    id: 'placeholder-1',
    service: 'House Washing',
    beforeImage: '/images/B_A_Pics/HS_B.png',
    afterImage: '/images/B_A_Pics/HS_A.png',
    description: 'House washing transformation.',
  },
  {
    id: 'placeholder-2',
    service: 'Concrete Cleaning',
    beforeImage: '/images/B_A_Pics/CC_B.png',
    afterImage: '/images/B_A_Pics/CC_A.png',
    description: 'Concrete cleaning transformation.',
  },
  {
    id: 'placeholder-3',
    service: 'Brick Cleaning',
    beforeImage: '/images/B_A_Pics/BR_B.png',
    afterImage: '/images/B_A_Pics/BR_A.png',
    description: 'Brick cleaning transformation.',
  },
]
