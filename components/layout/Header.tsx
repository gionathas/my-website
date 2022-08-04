import routes from 'config/routes'
import useWindowScroll from 'lib/hooks/useWindowScroll'
import Link from 'next/link'
import { useRouter } from 'next/router'

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
  const router = useRouter()

  return (
    <header
      className={`sticky top-0 z-50 w-full ${
        pageYScrollOffset > BACKDROP_BLUR_THRESHOLD_VALUE &&
        'backdrop-blur-md bg-white/30'
      }`}
    >
      <div className="flex justify-between max-w-2xl px-2 py-3 mx-auto">
        <Link href={routes.home}>
          <h2 className="font-semibold cursor-pointer">👨🏻‍💻 Gionatha Sturba</h2>
        </Link>
        <div className="flex items-center gap-x-4">
          {navigationLinks.map(({ title, href }) => (
            <Link key={title} href={href}>
              <a
                className={`text-sm text-black md:text-base hover:scale-105 transition-transform duration-100 ${
                  router.pathname === href ? 'font-semibold' : 'font-normal'
                }`}
              >
                {title}
              </a>
            </Link>
          ))}
        </div>
      </div>
    </header>
  )
}

export default Header
