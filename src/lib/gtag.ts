declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
  }
}

/** Fire GA4 custom events when gtag is loaded (set NEXT_PUBLIC_GA_MEASUREMENT_ID). */
export function trackEvent(eventName: string, params?: Record<string, string | number | boolean>) {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') {
    return
  }
  window.gtag('event', eventName, params ?? {})
}
