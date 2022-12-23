import routes from 'config/routes'
import useWindowScroll from 'lib/hooks/useWindowScroll'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'

const ThemeButton = dynamic(() => import('components/buttons/ThemeButton'), {
  ssr: false,
})

const navigationLinks: { title: string; href: string }[] = [
  {
    title: 'Bio',
    href: routes.bio,
  },
  {
    title: 'Works',
    href: routes.works,
  },
  {
    title: 'Contacts',
    href: routes.contacts,
  },
]
const BACKDROP_BLUR_THRESHOLD_VALUE = 20

const Header = () => {
  const pageYScrollOffset = useWindowScroll()

  return (
    <header
      className={`sticky top-0 z-50 w-full ${
        pageYScrollOffset > BACKDROP_BLUR_THRESHOLD_VALUE &&
        'backdrop-blur-md bg-white/30 dark:bg-slate-700/10'
      }`}
    >
      <div className="flex flex-wrap items-center justify-between max-w-2xl px-4 py-3 mx-auto">
        <Link href={routes.home}>
          <h2 className="font-semibold cursor-pointer">👨🏻‍💻 Gionatha Sturba</h2>
        </Link>
        <nav className="flex items-center">
          <ThemeButton />
          <MobileNavigation className="ml-2" />
          <DesktopNavigation className="ml-4" />
        </nav>
      </div>
    </header>
  )
}

const DesktopNavigation = ({ className }: { className?: string }) => {
  return (
    <NavigationLinks
      className={`hidden sm:flex sm:items-center sm:gap-x-4 ${className}`}
    />
  )
}

const MobileNavigation = ({ className }: { className?: string }) => {
  const [showMenu, setShowMenu] = useState(false)

  return (
    <div className={`relative sm:hidden ${className}`}>
      <button
        type="button"
        onClick={() => setShowMenu((show) => !show)}
        className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden focus:outline-none ring-2 ring-gray-700/30 dark:ring-gray-400/30 hover:bg-gray-200 dark:text-gray-400 dark:hover:bg-gray-700"
        aria-label="toggle-mobile-navigation-menu"
        aria-controls="navigation-menu"
        aria-expanded={showMenu}
      >
        <GiHamburgerMenu />
      </button>
      {showMenu && (
        <div
          id="navigation-menu"
          className="absolute right-0 p-4 rounded-lg w-44 bg-white/90 dark:bg-gray-700/90 top-9 ring-2 ring-gray-900/40 dark:ring-gray-50/40"
        >
          <NavigationLinks
            onClick={() => setShowMenu(false)}
            className="flex flex-col items-center gap-y-2"
          />
        </div>
      )}
    </div>
  )
}

const NavigationLinks = ({
  className,
  onClick,
}: {
  className?: string
  onClick?: () => void
}) => {
  const router = useRouter()

  return (
    <ul className={className}>
      {navigationLinks.map(({ title, href }) => (
        <Link key={title} href={href}>
          <a
            onClick={onClick}
            className={`text-sm text-black dark:text-white md:text-base hover:scale-105 transition-transform duration-100 ${
              router.pathname === href ? 'font-bold underline' : 'font-normal'
            }`}
          >
            {title}
          </a>
        </Link>
      ))}
    </ul>
  )
}

export default Header
