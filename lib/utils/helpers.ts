export const isBrowser = () => typeof window !== 'undefined'

export const redirectTo = (href: string) => {
  if (isBrowser()) {
    window.location.href = href
  }
}

export const isProduction = () => {
  return process.env.NODE_ENV === 'production'
}

export const isAnalyticsEnabled = () => {
  return (
    isProduction() &&
    isBrowser() &&
    process.env.NEXT_PUBLIC_ENABLE_ANALYTICS === 'true'
  )
}
