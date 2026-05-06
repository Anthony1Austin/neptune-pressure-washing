/** Bump `v` when replacing the logo file so browsers and CDNs fetch the new asset. */
export const LOGO_SRC = '/images/3802.PNG?v=2' as const

export const LOGO_ABSOLUTE_URL =
  `https://www.neptunewashpros.com${LOGO_SRC}` as const
