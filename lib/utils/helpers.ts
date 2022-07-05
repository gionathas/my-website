export const isBrowser = () => typeof window !== 'undefined'

export const redirectTo = (href: string) => {
  if (isBrowser()) {
    window.location.href = href
  }
}
