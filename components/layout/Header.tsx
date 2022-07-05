import routes from 'config/routes'
import useWindowScroll from 'lib/hooks/useWindowScroll'
import Link from 'next/link'
import { useRouter } from 'next/router'

const navigationItems: { title: string; href: string }[] = [
  {
    title: 'Bio',
    href: routes.bio,
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
  const router = useRouter()

  return (
    <header
      className={`sticky top-0 z-50 w-full ${
        pageYScrollOffset > BACKDROP_BLUR_THRESHOLD_VALUE &&
        'backdrop-blur-md bg-white/30'
      }`}
    >
      <div className="flex max-w-2xl mx-auto justify-between px-2 py-3">
        <Link href={routes.home}>
          <h2 className="font-semibold cursor-pointer">👨🏻‍💻 Gionatha Sturba</h2>
        </Link>
        <div className="flex items-center gap-x-4">
          {navigationItems.map(({ title, href }) => (
            <Link key={title} href={href}>
              <span
                className={`text-sm md:text-base hover:scale-105 cursor-pointer hover:underline underline-offset-4 transition-transform duration-100 ${
                  router.pathname === href ? 'font-semibold' : 'font-normal'
                }`}
              >
                {title}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </header>
  )
}

export default Header
