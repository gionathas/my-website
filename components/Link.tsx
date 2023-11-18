import { LinkProps } from 'lib/types'
import NextLink from 'next/link'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { IconType } from 'react-icons/lib'

const Link = ({
  href,
  children,
  active = false,
  className = '',
  ...rest
}: LinkProps) => {
  return (
    <NextLink
      className={`flex items-center text-sm md:text-base font-medium text-gray-400 transition-colors hover:text-gray-100 ${
        active && 'text-gray-50'
      } ${className}`}
      href={href}
      {...rest}
    >
      {children}
    </NextLink>
  )
}

export const LinkWithRightArrow = ({ href, children, ...rest }: LinkProps) => {
  return (
    <Link href={href} {...rest}>
      {children}
      <HiArrowNarrowRight className="w-4 h-4 ml-2" />
    </Link>
  )
}

export const SocialLink = ({
  href,
  icon: Icon,
  title,
  className = '',
}: {
  href: string
  icon: IconType
  title?: string
  className?: string
}) => {
  return (
    <Link className={className} target="_blank" rel="no-referrer" href={href}>
      <Icon className="inline w-4 h-4" />
      {title && (
        <span className="ml-1 text-lg font-medium hover:underline hover:underline-offset-4">
          {title}
        </span>
      )}
    </Link>
  )
}

export default Link
