export const isBrowser = typeof window !== 'undefined'

export const redirectTo = (href: string) => {
  if (isBrowser) {
    window.location.href = href
  }
}

export const isProduction = process.env.NODE_ENV === 'production'

export const isDevelopment = process.env.NODE_ENV === 'development'
