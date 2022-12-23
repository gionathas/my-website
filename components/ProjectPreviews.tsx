import React from 'react'
import ButtonLink from './buttons/ButtonLink'

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
    <ButtonLink href={viewAllHref} target="_blank" rel="noreferrer">
      View All
    </ButtonLink>
  )
  const viewAllInternalLink = (
    <ButtonLink href={viewAllHref} nextLink>
      View All
    </ButtonLink>
  )

  return (
    <section className={className}>
      <div className="flex items-baseline justify-between">
        <h2 className="text-2xl font-bold">{title}</h2>
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
    <div className={`flex flex-col gap-y-5 gap-x-3 xs:flex-row  ${className}`}>
      {children}
    </div>
  )
}
