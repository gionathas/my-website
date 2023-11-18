import Link from 'components/Link'
import routes from 'config/routes'
import useWindowScroll from 'lib/hooks/useWindowScroll'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'

const navigationLinks: { title: string; href: string }[] = [
  // {
  //   title: 'Bio',
  //   href: routes.bio,
  // },
  {
    title: 'Home',
    href: routes.home,
  },
  {
    title: 'Projects',
    href: routes.projects,
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
        'backdrop-blur-md bg-slate-700/10'
      }`}
    >
      <div className="flex flex-wrap items-center justify-between max-w-2xl px-4 py-3 mx-auto">
        <nav className="flex items-center">
          {/* <MobileNavigation className="ml-2" /> */}
          <RowNavigationLayout className="p-2" />
        </nav>
      </div>
    </header>
  )
}

const RowNavigationLayout = ({ className }: { className?: string }) => {
  return (
    <NavigationLinks className={`flex items-center gap-x-4 ${className}`} />
  )
}

const MobileNavigation = ({ className }: { className?: string }) => {
  const [showMenu, setShowMenu] = useState(false)

  return (
    <div className={`relative sm:hidden ${className}`}>
      <button
        type="button"
        onClick={() => setShowMenu((show) => !show)}
        className="inline-flex items-center p-2 text-sm text-gray-400 rounded-lg md:hidden focus:outline-none ring-2 ring-gray-400/30 hover:bg-gray-700"
        aria-label="toggle-mobile-navigation-menu"
        aria-controls="navigation-menu"
        aria-expanded={showMenu}
      >
        <GiHamburgerMenu />
      </button>
      {showMenu && (
        <div
          id="navigation-menu"
          className="absolute right-0 p-4 rounded-lg w-44 bg-gray-700/90 top-9 ring-2 ring-gray-50/40"
        >
          <NavigationLinks
            onLinkClick={() => setShowMenu(false)}
            className="flex flex-col items-center gap-y-2"
          />
        </div>
      )}
    </div>
  )
}

const NavigationLinks = ({
  className,
  onLinkClick: handleLinkClick,
}: {
  className?: string
  onLinkClick?: () => void
}) => {
  const router = useRouter()

  return (
    <ul className={className}>
      {navigationLinks.map(({ title, href }) => (
        <Link
          active={router.pathname === href}
          onClick={handleLinkClick}
          key={title}
          href={href}
        >
          {title}
        </Link>
      ))}
    </ul>
  )
}

export default Header
