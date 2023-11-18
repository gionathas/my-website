import { PropsWithChildren } from 'react'
import { LinkProps as NextLinkProps } from 'next/link'

export type LinkProps = PropsWithChildren<NextLinkProps> & {
  target?: React.HTMLAttributeAnchorTarget
  rel?: React.HTMLAttributeReferrerPolicy
}
