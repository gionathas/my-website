export default {
  home: '/',
  // bio: '/bio',
  projects: '/projects',
  contacts: '/contacts',
  blog: '/blog',
  blogPost: (slug: string) => `/blog/${slug}`,
} as const
