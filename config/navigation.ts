import routes from './routes'

export const headerNavigation: { title: string; href: string }[] = [
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
