import Link from 'components/Link'
import { headerNavigation } from 'config/navigation'
import { useRouter } from 'next/router'

const Header = () => {
  return (
    <header>
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
      {headerNavigation.map(({ title, href }) => (
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
