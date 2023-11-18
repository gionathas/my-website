import NextLink from 'next/link'
import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { LinkProps } from 'lib/types'

const Link = ({ href, children, active, className, ...rest }: LinkProps) => {
  return (
    <NextLink
      className={`flex items-center text-sm md:text-base font-medium text-gray-400 transition-colors hover:text-gray-100 ${
        active && 'text-gray-100'
      } ${className ? className : ''}`}
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

export default Link
