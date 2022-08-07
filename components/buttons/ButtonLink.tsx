import Link from 'next/link'
import React from 'react'
import { GoChevronRight } from 'react-icons/go'

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
      className="flex items-center justify-between w-24 font-medium px-3 py-1.5 text-white bg-blue-500  rounded-md hover:no-underline hover:bg-blue-600 dark:bg-orange-500 dark:text-black text-sm dark:hover:bg-orange-600"
      {...rest}
    >
      {children}
      <GoChevronRight className="w-4 h-4" />
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
