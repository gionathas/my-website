import { isBrowser } from 'lib/utils/helpers'
import { useEffect, useState } from 'react'

const useWindowScroll = () => {
  const [scrollPosition, setScrollPosition] = useState(0)

  useEffect(() => {
    if (isBrowser()) {
      const updatePosition = () => {
        setScrollPosition(window.pageYOffset)
      }
      window.addEventListener('scroll', updatePosition)
      updatePosition()
      return () => window.removeEventListener('scroll', updatePosition)
    }
  }, [])

  return scrollPosition
}

export default useWindowScroll
