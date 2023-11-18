import Link from 'components/Link'
import routes from 'config/routes'
import useWindowScroll from 'lib/hooks/useWindowScroll'
import { useRouter } from 'next/router'

const navigationLinks: { title: string; href: string }[] = [
  {
    title: 'Home',
    href: routes.home,
  },
  {
    title: 'Blog',
    href: routes.blog,
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
      <div className="flex flex-wrap items-center justify-between max-w-2xl p-5 mx-auto">
        <nav className="flex items-center">
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
