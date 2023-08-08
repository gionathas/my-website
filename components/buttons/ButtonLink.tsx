import Link from 'next/link'
import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'

type ButtonLinkProps = {
  href: string
  nextLink?: boolean
} & React.ComponentPropsWithoutRef<'a'>

const ButtonLink = ({
  nextLink = false,
  href,
  children,
  ...rest
}: ButtonLinkProps) => {
  const Anchor = (
    <a
      href={href}
      className="flex items-center font-medium text-gray-400 transition-colors hover:text-gray-100 hover:no-underline"
      {...rest}
    >
      {children}
      <HiArrowNarrowRight className="w-4 h-4 ml-2" />
    </a>
  )

  if (nextLink) {
    return (
      <Link href={href} passHref>
        {Anchor}
      </Link>
    )
  }

  return Anchor
}

export default ButtonLink
