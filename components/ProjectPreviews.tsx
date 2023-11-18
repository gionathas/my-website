import React from 'react'
import { LinkWithRightArrow } from './Link'

export type LatestSectionProps = {
  title: string
  viewAllHref: string
  children?: React.ReactNode
  className?: string
  externalLink?: boolean
}

export const ProjectPreviewsSection = ({
  title,
  viewAllHref,
  className = '',
  children,
  externalLink = false,
}: LatestSectionProps) => {
  const viewAllExternalLink = (
    <LinkWithRightArrow href={viewAllHref} target="_blank" rel="no-referrer">
      View All
    </LinkWithRightArrow>
  )
  const viewAllInternalLink = (
    <LinkWithRightArrow href={viewAllHref}>View All</LinkWithRightArrow>
  )

  return (
    <section className={className}>
      <div className="flex items-baseline justify-between mb-5 md:mb-6">
        <h2 className="text-xl font-bold">{title}</h2>
        {externalLink ? viewAllExternalLink : viewAllInternalLink}
      </div>
      {children}
    </section>
  )
}

export const ProjectsPreviewsContent = ({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) => {
  return (
    <div className={`flex flex-col gap-y-9 gap-x-3 xs:flex-row  ${className}`}>
      {children}
    </div>
  )
}
