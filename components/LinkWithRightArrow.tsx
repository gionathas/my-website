import Link from 'next/link'
import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { LinkProps } from 'lib/types'

const LinkWithRightArrow = ({ href, children, ...rest }: LinkProps) => {
  return (
    <Link
      className="flex items-center font-medium text-gray-400 transition-colors hover:text-gray-100 hover:no-underline"
      href={href}
      {...rest}
    >
      {children}
      <HiArrowNarrowRight className="w-4 h-4 ml-2" />
    </Link>
  )
}

export default LinkWithRightArrow
